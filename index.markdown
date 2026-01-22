---
layout: homepage
title: Home
permalink: /
---

<div class="row" style="margin-top: 2em;">

    <!-- LEFT: Profile + Social -->
    <div class="col-md-12 text-center">

        <img style="width: 15em; height: 15em; border-radius: 50%;"
             src="{{site.baseurl}}/images/profile.jpeg">

        <h1 style="font-size: 3em; font-family: Raleway;">Pranav Bansal</h1>

        {% if site.linkedin %}
        <a target="_blank" href="{{site.linkedin}}">
            <li class="social linkedin"><i class="fa fa-linkedin-square"></i></li>
        </a>
        {% endif %}

        {% if site.github %}
        <a target="_blank" href="{{site.github}}">
            <li class="social github"><i class="fa fa-github-square"></i></li>
        </a>
        {% endif %}

        {% if site.email %}
        <a target="_blank" href="mailto:{{site.email}}">
            <li class="social email"><i class="fa fa-envelope"></i></li>
        </a>
        {% endif %}

    </div>

</div>

<!-- INTRO SECTION BELOW -->
<div style="margin: 3em 0; text-align: left; font-family: 'Raleway', sans-serif;">
    
<p>
    <strong>Hello!</strong> I'm <strong>Pranav Bansal</strong>, a <strong>Software Engineer</strong>.
</p>

<p>
    Right now, I work as a Site Reliability Engineer, making sure that apps and websites run smoothly and stay up all the time. I find it exciting to work with cloud platforms like AWS and I love making things faster, safer and cheaper using tools like Terraform, Docker and Kubernetes.
    I believe the best results come from teamwork. I’ve been lucky to lead efforts where we’ve kept apps running with almost no downtime and even managed to cut our cloud costs by a huge chunk. Learning new things is a big part of my journey. I’m now exploring more about Kubernetes and different cloud platforms, always looking to pick up new skills.
    When I’m not working with tech, you’ll probably find me at the gym, playing chess, watching sci-fi movies or chatting with friends about new ideas.
</p>

<hr style="margin: 2em 0;">

<h3 style="font-weight:600;">🔧 What I Do (Day-to-Day)</h3>

<ul>
    <li>🚀 Build, scale, and operate AWS infrastructure for high-traffic, microservices-based platforms</li>
    <li>🐳 Deploy and manage workloads across Kubernetes and ECS (blue-green & zero-downtime releases included)</li>
    <li>🧠 Automate everything with Terraform, CI/CD pipelines, and smart deployment strategies</li>
    <li>📊 Design observability stacks (Prometheus, Grafana, Datadog, Loki, Tempo) so issues get caught before users notice</li>
    <li>🔥 Handle production incidents, on-call rotations, and root-cause analysis</li>
    <li>💸 Optimize cloud costs using Spot Instances, right-sizing, and architecture improvements</li>
    <li>🤖 Support AI-driven platforms and LLM workflows running in production</li>
</ul>

<hr style="margin: 2em 0;">

<p>
    I hold a <strong>B.E.</strong> in <strong>Computer Science</strong> from 
    <strong>Chitkara University</strong>.  
    <br>Explore my work under <a href="/projects">Projects</a> or check out my code on 
    <a href="https://github.com/okpranavbansal" target="_blank">GitHub</a> 🚀
</p>

</div>
