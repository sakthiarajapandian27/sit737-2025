# SimpleServer on Kubernetes with Docker Desktop

This project demonstrates how to deploy a simple Node.js server in a Docker container, managed with Kubernetes using **Docker Desktop**.

---

## ⚙️ Prerequisites

Make sure the following are installed and set up:

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (with **Kubernetes enabled**)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Node.js](https://nodejs.org/) (for local testing)

---

## 🚀 Setup Instructions

### 1. Enable Kubernetes in Docker Desktop
- Open Docker Desktop
- Go to **Settings > Kubernetes**
- Enable "Kubernetes" and wait until it's ready

---

### 2. Check `kubectl` Context

Make sure you're using the **Docker Desktop** Kubernetes context:
```bash
kubectl config current-context
```

Expected output:
```
docker-desktop
```

If not, switch to it:
```bash
kubectl config use-context docker-desktop
```

---

### 3. Build Docker Image

```bash
docker build -t sakthiarajapandian/simpleserver:1.1 .
```

### 4. Push Image to Docker Hub (optional if already pushed)

```bash
docker push sakthiarajapandian/simpleserver:1.1
```

---

### 5. Apply Kubernetes Configuration

```bash
kubectl apply -f deployment.yaml
```

---

### 6. Check Deployment

```bash
kubectl get pods
kubectl get deployments
kubectl get services
```

---

### 7. Access the Application

The app runs on `PORT 3000`, exposed via **NodePort 30007**. Open in browser:

```
http://localhost:30007
```

You should see:
```
Hello, Docker!
```
---

## 🧼 To Delete Everything

```bash
kubectl delete -f deployment.yaml
```

---
