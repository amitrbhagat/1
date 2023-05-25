const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this port number if needed

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/hello.html");
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
