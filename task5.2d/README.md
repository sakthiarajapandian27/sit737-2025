```markdown
# 📦 Deploy Docker Image to Google Artifact Registry & Run Locally


This guide walks you through building a Docker image, pushing it to **Google Artifact Registry**, and running it locally.

---

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Authenticate and Configure Google Cloud](#step-1-authenticate-and-configure-google-cloud)
- [Step 2: Create Artifact Registry Repository](#step-2-create-artifact-registry-repository)
- [Step 3: Build, Tag & Push Docker Image](#step-3-build-tag--push-docker-image)
- [Step 4: Run the Container Locally](#step-4-run-the-container-locally)
- [Accessing the Web App](#accessing-the-web-app)
- [Summary of Commands](#summary-of-commands)

---

## ✅ Prerequisites

- Google Cloud account with billing enabled
- Google Cloud SDK installed
- Docker installed
- A Google Cloud project created
- Terminal access (Linux/macOS/Windows)

---

## 🔐 Step 1: Authenticate and Configure Google Cloud

```bash
# Log in to your Google account
gcloud auth login

# Set your GCP project
gcloud config set project [PROJECT_ID]

# Set your default region
gcloud config set compute/region [REGION]

# Enable the Artifact Registry API
gcloud services enable artifactregistry.googleapis.com
```

---

## 🗂️ Step 2: Create Artifact Registry Repository

In the **Google Cloud Console**, create a new repository with the following details:

- **Name**: `simpleserver`
- **Format**: Docker
- **Mode**: Standard
- **Location Type**: Region
- **Region**: `australia-southeast2`
- **Encryption**: Google-managed encryption key

---

## 🛠️ Step 3: Build, Tag & Push Docker Image

### 1. Build your Docker image

```bash
docker build -t simpleserver .
```

### 2. Tag the image for Artifact Registry

```bash
docker tag simpleserver australia-southeast2-docker.pkg.dev/sit737-25t1-rajapandia-8dff346/latestserver/simpleserver
```

### 3. Authenticate Docker with Artifact Registry

```bash
gcloud auth configure-docker australia-southeast2-docker.pkg.dev
```

### 4. Push the image to the repository

```bash
docker push australia-southeast2-docker.pkg.dev/sit737-25t1-rajapandia-8dff346/latestserver/simpleserver
```

---

## 🧪 Step 4: Run the Container Locally

```bash
docker run -p 80:80 -e PORT=80 australia-southeast2-docker.pkg.dev/sit737-25t1-rajapandia-8dff346/latestserver/simpleserver
```
---

## 🌐 Accessing the Web App

Once the container is running, access your application in the browser:

```
http://localhost:80
```

---



