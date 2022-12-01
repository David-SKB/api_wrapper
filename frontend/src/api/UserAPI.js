import axios from 'axios';

// Async function to retrieve data from fastAPI app
const BASE_URL = "http://localhost:8001";

export async function getUser(userId) {

    console.log("[US] [GET] START");
    let response = await axios.get(BASE_URL +'/user', {
        params: {
            id: userId
        }
    }).then((response) => {
        // Extract data from response object
        response = response.data
        console.log("[US] [GET] RESPONSE DATA: " + response);
        return response;
    }
    ).catch(function(err) {
       console.log("[US] [GET] ERROR: " + err); 
       return err;
    });
      return response;
}