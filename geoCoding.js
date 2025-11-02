// geocode.js
require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.MAP_API_KEY;

/**
 * Forward Geocoding: Address -> Coordinates
 */
async function getCoordinates(address) {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: apiKey
            }
        });

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            // console.log(`Coordinates for "${address}":`, location);
            return location;
        } else {
            console.error('Error:', response.data.status, response.data.error_message);
        }
    } catch (error) {
        console.error('Request failed:', error.message);
    }
}


// Example usage:
let geoCode = (async () => {
    await getCoordinates('Statue of Liberty, New York, USA');
    // await getAddress(40.689247, -74.044502);
})()
    .then(result => {
        // console.log(result); // This will log the resolved value
        return result;
    })
    .catch(err => {
        console.error(err); // Handle errors
    });

console.log(geoCode);