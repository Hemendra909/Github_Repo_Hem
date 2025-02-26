// Create web server
// 1. Create a web server
// 2. Handle the request and response
// 3. Read the file
// 4. Write the response

const http = require('http');
const fs = require('fs');
const url = require('url');

// Create web server
http.createServer((req, res) => {
    // Handle the request and response
    const query = url.parse(req.url, true).query;
    const id = query.id;
})