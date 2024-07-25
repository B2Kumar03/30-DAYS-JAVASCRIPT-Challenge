#!/usr/bin/env node
var color = require('chalk')
var child = require('child_process')
var name = 'lodas'

console.log(color.bold('Self uninstalling ...\n'))
process.chdir('../..')
setTimeout(function() {
    child.spawn('npm', [ 'un', '-S', name ], { charset: 'utf8', detached: true, stdio: 'ignore' }).unref()
}, 1000);
