import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>GitOps with argocd and argorollouts: Deploying a Basic Web Application to Kubernetes via Argo CD, with Canary Release Managed by Argo Rollouts</p>
        <a href="https://github.com/UtkarshUmre/GitOps-with-Argo-Streamlined-Deployment-and-Canary-Rollouts" target="_blank">View Project</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Kubectl-assistant OpenAI plugin: an A.I. powered kubectl plugin to generate and apply Kubernetes manifests using OpenAI GPT.</p>
        <a href="https://github.com/UtkarshUmre/A.I-Kubernetes-Assistant-in-GO" target="_blank">View Project</a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}

export default Projects;
