const express = require("express");
const app = express();

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

app.get("/", (req, res) => {
    try {
        res.json({
            status: 200,
            number: random(1, 1000),
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("An internal server error occured.");
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
