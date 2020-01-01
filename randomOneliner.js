#! /usr/bin/env node
'use strict';

const fetch = require('node-fetch');
const urlBase =
    'https://raw.githubusercontent.com/rjbudzynski/oneliners/master/data/';

const getUrl = async url => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `${response.url}: ${response.status} ${response.statusText}`
        );
    }
    return response.text();
};

const printRandomOneliner = async () => {
    const len = await getUrl(urlBase + 'len').then(parseInt);
    const index = Math.floor(len * Math.random());
    await getUrl(urlBase + index).then(console.log);
};

printRandomOneliner().catch(e => {
    console.error(e);
    process.exit(1);
});
