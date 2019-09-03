const express = require('express');
const port = process.env.PORT || 7000;
const server = express();
const request = require('request');

server.use(express.json())


server.get('/', (req, res) => {
    res.send('Acumen Group');
});

server.post('/', (req, res) => {

    const url = `https://secure.shippingapis.com/ShippingAPI.dll?API=ZipCodeLookup&XML=<ZipCodeLookupRequest USERID="661PARAP3185">
                <Address>
                <Address1>${req.body.address1}</Address1>
                <Address2>${req.body.address2}</Address2>
                <City>${req.body.city}</City>
                <State>${req.body.state}</State>
                </Address>
                </ZipCodeLookupRequest>`;
    request(url, (error, response, data) => {
        res.send(data);
        })  
})

server.listen(port, () => {
    console.log("listening on port 7000");
})