const express = require('express');
const app = express()

const PORT = 8000;

app.get('/', (req, res) => {
    console.log(`Hello KJH`);
    res.end('Hello KJH!');
    
});

app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));