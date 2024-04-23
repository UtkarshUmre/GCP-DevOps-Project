# Google-Cloud-Platform-DevOps-Project

<img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="GCP" width="60" height="60" />

This project demonstrates a continuous integration and continuous delivery (CI/CD) pipeline for a React portfolio website using Google Cloud Build, Artifact Registry, and Kubernetes Engine (GKE). When code is pushed to the main branch of a GitHub repository, the pipeline automatically builds the Docker image, pushes it to the Artifact Registry, and deploys the application to a GKE cluster.

---

This diagram visually represents the GCP DevOps project. As you can see, the project utilizes tools and technologies from GitHub and Google Cloud, including Google Kubernetes Engine (GKE), Cloud Build, and Artifact Registry. The workflow follows a continuous integration and continuous delivery (CI/CD) approach: when code is pushed to the GitHub repository, Cloud Build triggers a build process. The resulting image is then stored in Google Cloud's Artifact Registry before being deployed to a GKE cluster.

<a href="https://ibb.co/6ysrTFC"><img src="https://i.ibb.co/YNjP1hs/Screenshot-from-2024-04-23-07-35-35.png" alt="Screenshot-from-2024-04-23-07-35-35" border="1" /></a>

---

## Services Used in This Project

- GitHub: A popular version control system used to host your project's code. It allows for efficient collaboration, code tracking, and easy pushing of code changes to trigger the CI/CD pipeline.
- Google Cloud Build: A Google Cloud Platform service that automates building, testing, and deploying your application. In this project, Cloud Build triggers a build process whenever code is pushed to the GitHub repository. It uses the cloudbuild.yaml file to define the build steps, such as installing dependencies, building the Docker image, and pushing it to Artifact Registry.
- Google Cloud Artifact Registry: A managed container image registry service within Google Cloud Platform. It provides a secure and reliable way to store your Docker images, making them readily accessible for deployment. In this project, Cloud Build pushes the built Docker image to Artifact Registry after the build process is complete.
- Google Kubernetes Engine (GKE): A managed Kubernetes service offered by Google Cloud Platform. Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications. In this project, GKE is used to deploy the containerized application built from your code. Cloud Build pushes the image from Artifact Registry to a GKE cluster for deployment.

By utilizing these services, this project achieves a streamlined CI/CD pipeline that automates the build, storage, and deployment of your React application, ensuring a smoother development and deployment workflow.

---
