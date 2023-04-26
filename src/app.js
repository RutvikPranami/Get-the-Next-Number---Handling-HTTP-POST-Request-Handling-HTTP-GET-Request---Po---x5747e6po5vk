const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

app.get('/api/get-next-num', (req, res) => {
    res.status(200).json({ "message": req.body.num + 1, "status": "success" })
})

module.exports = app;
