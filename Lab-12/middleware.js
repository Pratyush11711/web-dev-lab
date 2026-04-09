// middleware.js

const express = require('express');
const app = express();

// Global middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

// Route-specific middleware
const checkAuth = (req, res, next) => {
    const isAuth = true; // simulate auth
    if (isAuth) {
        next();
    } else {
        res.send("Unauthorized");
    }
};

// Route with middleware
app.get('/secure', checkAuth, (req, res) => {
    res.send("Secure route accessed");
});

// Multiple middleware chaining
app.get('/chain',
    (req, res, next) => {
        console.log("Middleware 1");
        next();
    },
    (req, res, next) => {
        console.log("Middleware 2");
        next();
    },
    (req, res) => {
        res.send("Middleware chain complete");
    }
);

app.listen(3000, () => {
    console.log("Middleware server running on port 3000");
});