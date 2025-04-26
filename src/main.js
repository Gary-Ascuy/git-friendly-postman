#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

program
    .name('git-friendly-postman')
    .description('Git Friendly Postman Tool')
    .version('0.1.0')
    .option('--clean')
    .option('-e,--export <path>')
    .option('-f,--file <path>')
    .argument('<string>')

program.parse()
const options = program.opts()

async function main(path, options) {
    console.log(path)
    console.log(options)
}

main(options.file ?? program.args[0], options)
