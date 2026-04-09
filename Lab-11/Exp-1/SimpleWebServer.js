// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Handle request
    if (req.url === '/') {
        res.write('<h1>Welcome to Node.js Server</h1>');
    } else if (req.url === '/about') {
        res.write('<h1>About Page</h1>');
    } else {
        res.write('<h1>404 Page Not Found</h1>');
    }

    // End response
    res.end();
});

// Define port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});