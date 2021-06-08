require("dotenv").config();
const express = require("express");

const app = express();

(async () => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Az Express app fut, ezen a porton: ${port}`);
    });
})();
