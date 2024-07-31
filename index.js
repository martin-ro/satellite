#!/usr/bin/env node

const si = require('systeminformation');
const axios = require('axios');
const os = require('os');
const fs = require('fs');
const Path = require('path');
const cp = require('child_process');
const cli = require('pixl-cli');

cli.global();
const Tools = cli.Tools;
const args = cli.args;
const async = Tools.async;
const selfBin = Path.resolve(process.argv[0]);
const configFile = Path.join(Path.dirname(selfBin), 'config.json');
const config = {};

console.log('Yeah!')

