const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ 
        message: 'Node.js app is running!', 
        version: '1.0.0',
        build: process.env.BUILD_NUMBER || 'local'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
