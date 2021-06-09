require("dotenv").config();
const express = require("express");

const app = express();

const memoryRouter = require('./routers/memoryRouter');

app.use(express.json());

app.use("/memory",memoryRouter);


(async () => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Az Express app fut, ezen a porton: ${port}`);
    });
})();
