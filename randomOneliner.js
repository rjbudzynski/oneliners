#! /usr/bin/env node

"use strict";
const fetch = require('node-fetch');
const urlBase = "https://raw.githubusercontent.com/rjbudzynski/oneliners/master/data/";

function getResponseBody(response) {
    if (!response.ok) {
        throw new Error(`${response.url}: ${response.status} ${response.statusText}`);
    }
    return response.text()
}

(async function printRandomOneliner() {
    const len = await fetch(urlBase + "len").then(getResponseBody).then(parseInt);
    const index = Math.floor(len * Math.random());
    fetch(urlBase + index).then(getResponseBody).then(console.log);
})();
