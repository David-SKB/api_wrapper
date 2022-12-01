import requests
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# I have other stuff running on port 3000 hence including port 3001
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Connection test
@app.get("/")
def read_root():
    return {"connection": "successful"}

@app.get("/user")
def get_by_id(id: str):
    # Retrieve user data from external api with id as param
    response = requests.get('https://reqres.in/api/users/' + id)
    # Check if request was successful and return data, otherwise return status code
    if (response.status_code == 200):
        data = response.text
        parsed_data = json.loads(data)
        # fields: id, email, first_name, last_name, avatar
        return parsed_data['data']
    else:
        return response.status_code
