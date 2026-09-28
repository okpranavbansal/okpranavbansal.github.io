import { useEffect, useRef, useState } from "react";
import { bootLogLines } from "../../data/siteContent.js";
import "./BootLog.css";

const LINE_CHAR_MS = 8;
const LINE_GAP_MS = 60;
const NAME_CHAR_MS = 55;
const HOLD_MS = 250;
const EXIT_MS = 350;

function computeTyping(elapsed, lines, displayName) {
  let t = 0;
  const lineCounts = lines.map((line) => {
    const chars = Math.min(
      line.length,
      Math.max(0, Math.floor((elapsed - t) / LINE_CHAR_MS)),
    );
    t += line.length * LINE_CHAR_MS;
    t += LINE_GAP_MS;
    return chars;
  });
  t -= LINE_GAP_MS;
  const nameStart = t + LINE_GAP_MS;
  const nameChars = Math.min(
    displayName.length,
    Math.max(0, Math.floor((elapsed - nameStart) / NAME_CHAR_MS)),
  );
  const exitAt = nameStart + displayName.length * NAME_CHAR_MS + HOLD_MS;
  return { lineCounts, nameChars, exitAt, nameStart };
}

function fullTyping(lines, displayName) {
  return {
    lineCounts: lines.map((line) => line.length),
    nameChars: displayName.length,
  };
}

export function BootLog({ name, onDone }) {
  const displayName = name?.trim() || "Pranav Bansal";
  const [lineCounts, setLineCounts] = useState(() =>
    bootLogLines.map(() => 0),
  );
  const [nameChars, setNameChars] = useState(0);
  const [exiting, setExiting] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    finishedRef.current = false;
    let rafId = 0;
    let doneTimeoutId = 0;
    const start = performance.now();

    const beginExit = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      const full = fullTyping(bootLogLines, displayName);
      setLineCounts(full.lineCounts);
      setNameChars(full.nameChars);
      setExiting(true);
      doneTimeoutId = window.setTimeout(onDone, EXIT_MS);
    };

    const skip = () => beginExit();

    const tick = (now) => {
      if (finishedRef.current) return;
      const elapsed = now - start;
      const { lineCounts: counts, nameChars: nChars, exitAt } = computeTyping(
        elapsed,
        bootLogLines,
        displayName,
      );
      setLineCounts(counts);
      setNameChars(nChars);
      if (elapsed >= exitAt) {
        beginExit();
        return;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(doneTimeoutId);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [displayName, onDone]);

  const nameLineVisible =
    lineCounts.every((count, i) => count >= bootLogLines[i].length) ||
    nameChars > 0;

  return (
    <div
      className={`boot-log${exiting ? " boot-log--exit" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading {displayName}&apos;s portfolio</span>
      <div className="boot-log-card">
        <div className="boot-log-chrome" aria-hidden="true">
          <div className="boot-log-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="boot-log-title">pranav@platform: ~</span>
        </div>
        <div className="boot-log-body" aria-hidden="true">
          {bootLogLines.map((line, index) => (
            <p key={line} className="boot-log-line">
              <span className="boot-log-prompt">$</span>
              <span className="boot-log-chevron">&gt;</span>
              {line.slice(0, lineCounts[index])}
            </p>
          ))}
          {nameLineVisible && (
            <p className="boot-log-name">
              <span className="boot-log-chevron">&gt;</span>
              {displayName.slice(0, nameChars)}
              <span className="boot-log-block-cursor" />
            </p>
          )}
        </div>
      </div>
      <p className="boot-log-skip-hint" aria-hidden="true">
        press any key to skip
      </p>
    </div>
  );
}
