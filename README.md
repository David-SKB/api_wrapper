## Run instructions
From project root directory (API_WRAPPER), run:
docker-compose up -d

## Manual run instructions

# from /backend directory, run:
docker build -t backend-api .
docker run -d --name backend-api -p 8001:8001 backend-api

# from /frontend directory, run:
docker build -t frontend-app .
docker run -d --name frontend-app -p 3001:3001 frontend-app

# On OSX / Linux / Windows with make (admin@powershell: choco install make)

# from API_WRAPPER root directory run:
make

# To access the app, navigate to http://localhost:3001/USER_ID replacing USER_ID with the desired integer User ID