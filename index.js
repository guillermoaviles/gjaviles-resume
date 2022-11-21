#! /usr/bin/env node

const fs = require('fs')

const colors = require('colors');

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(colors.purple(data))
        return data
    }
})
