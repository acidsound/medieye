const axios = require('axios');
export default async (request, response) => {
    const result = await axios("https://jsonplaceholder.typicode.com/posts");
    response.status(200).end(JSON.stringify(result.data));
};
