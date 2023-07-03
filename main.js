const axios = require("axios");

const BASE_URL = "http://ir.somthinels.click";

function callAPI() {
  // Generate a random size between 1 and 1000
  const randomSize = Math.floor(Math.random() * 2000) + 500;

  // Make a GET request to the API endpoint
  axios
    .get(`${BASE_URL}/api/response/${randomSize}`)
    .then((response) => {
      // Handle the response data
      const responseData = response.data;
      console.log(
        "Response Size:",
        response.headers["content-length"],
        "bytes"
      );
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error.message);
    })
    .finally(() => {
      // Schedule the next API call
      const randomTimeout = Math.floor(Math.random() * 45) + 15; // Random timeout between 30 and 90 seconds
      console.log('randomTimeout: ', randomTimeout);
      setTimeout(callAPI, randomTimeout * 1000);
    });
}

// Start the initial API call
callAPI();
