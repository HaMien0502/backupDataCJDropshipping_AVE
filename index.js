require("dotenv").config();

const getOrderList = require('./src/functions/getOrderList');

const express = require('express');
const cron = require("node-cron");


const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

const backupDataCJ = async () => {
    console.log("Now time update!");
    console.log("--------CJ DropShippinh--------");
    // Lấy data từ Apps CJ DropShipping
    await getOrderList();
};

cron.schedule("15 0 * * *", backupDataCJ, {
    timezone: "Asia/Ho_Chi_Minh",
});

cron.schedule("15 12 * * *", backupDataCJ, {
    timezone: "Asia/Ho_Chi_Minh",
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
