**Cybersecurity Awareness Training Application
**
This repository contains the code for a cybersecurity awareness training application, designed to be deployed as microservices on Google Cloud Run.

Project Structure
frontend/: Contains the static HTML/CSS/JavaScript for the web application.

backend/: Contains a simple Node.js microservice (placeholder for future authentication and data storage).

cloudbuild.yaml: Google Cloud Build configuration for automated Docker image builds and Cloud Run deployments.

Frontend (Static Web Application)
A single-page HTML application providing interactive training modules on topics like phishing, strong passwords, malware, and social engineering.

Backend (Microservice)
A basic Node.js Express application intended to handle dynamic functionalities such as user authentication (e.g., via Firebase Authentication with SSO), user progress tracking, and potentially quiz results stored in Firestore.

Deployment on Google Cloud
This project is set up for deployment on Google Cloud using:

Google Cloud Run: For deploying containerized frontend and backend services.

Google Artifact Registry: To store the Docker images of both services.

Google Cloud Build: For CI/CD (Continuous Integration/Continuous Deployment) to automate building and deploying from GitHub.

Firebase Authentication & Firestore: (Planned for backend) For user management and data storage.

How to Deploy
Set up Google Cloud Project: Ensure Cloud Run, Artifact Registry, and Cloud Build APIs are enabled.

Create Artifact Registry Repositories: Create a Docker repository in Artifact Registry.

Connect to GitHub (Cloud Build Trigger): Set up a Cloud Build trigger that connects to this GitHub repository. When changes are pushed, cloudbuild.yaml will automate the build and deployment process.

Feel free to explore the code and adapt it to your specific needs.
