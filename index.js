const express = require('express');
const fs = require('fs');
const moment = require('moment-timezone');
const requestIp = require('request-ip');

const app = express();
const PORT = process.env.PORT || 8080;
const AUTHOR = 'Grzegrz Poleszak'; 

const logServerStart = () => {
    const logMessage = `Server started on ${new Date().toISOString()} by ${AUTHOR} on port ${PORT}`;
    console.log(logMessage);
    fs.appendFileSync('/var/log/server.log', logMessage + '\n');
};

app.use(requestIp.mw());

app.use((req, res, next) => {
    const clientIp = req.clientIp;
    const clientTime = moment().tz(clientIp).format('YYYY-MM-DD HH:mm:ss');
    console.log(`Client IP: ${clientIp}, Client Time: ${clientTime}`);
    next();
});
app.get('/', (req, res) => {
    const clientIp = req.clientIp;
    const clientTime = moment().tz(clientIp).format('YYYY-MM-DD HH:mm:ss');
    res.send(`<h1>Adres IP klienta: ${clientIp}</h1><p>Data i godzina w jego strefie czasowej: ${clientTime}</p>`);
});
app.listen(PORT, () => {
    logServerStart();
});
