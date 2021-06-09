require("dotenv").config();
const express = require("express");
const fs = require("fs");

const router = express.Router();

router
    .get("/", (req, res) => {
        fs.readFile("./data/memory.json", (err, data) => {
            if (err) throw err;
            let { number } = JSON.parse(data);
            res.send({number});
        });
    })
    .post("/", (req, res) => {
        const { number } = req.body;

        if (!number) return res.sendStatus(400);

        fs.writeFile(
            "./data/memory.json",
            JSON.stringify({ number }),
            (err) => {
                if (err) throw err;
                console.log("Memory updated");
            }
        );

        res.status(201).send({number});
    });

module.exports = router;
