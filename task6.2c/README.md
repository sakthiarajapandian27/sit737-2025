# 🚀 SimpleServer Kubernetes Deployment

This project demonstrates deploying a Dockerized Node.js application to a Kubernetes cluster.  
It is designed for **SIT323/SIT737 - Cloud Native Application Development, Practical 6C**.

---

## ⚙️ Prerequisites

Make sure the following are installed:

- Node.js
- Docker
- Kubectl

---

## 🧪 Part I: Initial Deployment

### 1. Build Docker Image

```bash
docker build -t simpleserver:1.1 .
```

### 2. Tag & Push Image to DockerHub

```bash
docker tag simpleserver:1.1 sakthiarajapandian/simpleserver:1.1
docker push sakthiarajapandian/simpleserver:1.1
```

### 3. Deploy to Kubernetes

```bash
kubectl apply -f deployment.yaml
```

### 4. Verify Deployment

```bash
kubectl get pods
kubectl get services
```

### 5. Port Forward to Access App

```bash
kubectl port-forward service/simpleserver-service 8080:3000
```

Then open in your browser:

```
http://localhost:8080
```

---

## 6. Delete the Deployment, before proceeding to create a new version

```bash
kubectl delete -f deployment.yaml
```

---

## 🔁 Part II: Updating the Application

### 1. Modify the Code for version 2

Update `server.js` to a new version message:

```js
res.send('Hello, Docker! This is version 2!');
```

### 2. Build New Docker Image for version 2

```bash
docker build -t simpleserver:2.0 .
```

### 3. Tag and Push to DockerHub for version 2

```bash
docker tag simpleserver:2.0 sakthiarajapandian/simpleserver:2.0
docker push sakthiarajapandian/simpleserver:2.0
```

### 4. Update for version 2`deployment.yaml`

Change the image line:

```yaml
image: sakthiarajapandian/simpleserver:2.0
```

### 5. Apply Kubernetes Configuration for version 2
```bash
kubectl apply -f deployment.yaml
```

### 6. Port Forward Again for version 2

```bash
kubectl port-forward service/simpleserver-service 8080:3000
```

Visit again:

```
http://localhost:8080
```

You should now see the **updated message**.

---
## 6. Delete the Deployment for version 2

```bash
kubectl delete -f deployment.yaml
```

---


