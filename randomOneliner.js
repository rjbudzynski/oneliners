#! /usr/bin/node

"use strict";
const fetch = require('node-fetch');
const urlBase = "https://raw.githubusercontent.com/rjbudzynski/oneliners/master/data/";

let len = 0,
    r = Math.random(),
    index = 0,
    text = "no oneliner for you...";

fetch(urlBase + "len").
    then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error(`${response.url}: ${response.status} ${response.statusText}`);
        }
    }
    ).
    then((s) => {
        len = parseInt(s);
        index = Math.floor(r * len);
        return fetch(urlBase + index);
    }
    ).
    then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error(`${response.url}: ${response.status} ${response.statusText}`);
        }
    }
    ).
    then((s) => {
        text = s;
        console.log(text);
    }
    ).
    catch(function (err) {
        console.log(err);
    })
