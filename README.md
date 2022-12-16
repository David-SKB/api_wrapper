# API Wrapper - David Okeke
<br>
git clone https://github.com/David-SKB/api_wrapper.git

## Build + Run via docker-compose:

### From project root directory api_wrapper, execute:
docker-compose up -d  
<br>

## Build + Run Manually:

### Inside /backend directory, execute:
docker build -t backend-api .
docker run -d --name backend-api -p 8001:8001 backend-api

### Inside /frontend directory, execute:
docker build -t frontend-app .
docker run -d --name frontend-app -p 3001:3001 frontend-app  
<br>

## Using make On OSX / Linux / Windows (admin@powershell: choco install make):

### Inside /backend directory, execute:
make

### Inside /frontend directory, execute:
make
<br>

## To access the app, navigate to http://localhost:3001/USER_ID replacing USER_ID with the desired User ID
<br>
<br>
example
![image](https://user-images.githubusercontent.com/41873522/205165734-2e63f1e4-1de4-4ba6-a424-86d31be35ee4.png)
