#!/usr/bin/env node

import { Command } from 'commander'

import { clean } from './commands/clean.js'
import { run } from './commands/run.js'

const program = new Command()
program
    .name('git-friendly-postman')
    .description('Git Friendly Postman Tool')
    .version('0.1.0')
    .option('--clean')
    .option('-i,--input-file <path>')
    .option('-o,--output-file <path>')
    .option('-e,--export <path>')
    .argument('<string>')

program.parse()
const options = program.opts()

async function main(inputFile, outputFile, options) {
    if (options.clean) {
        clean()
        process.exit(0)
    }

    run(inputFile, outputFile)
    process.exit(0)
}

const inputFile = options.file ?? program.args[0]
const outputFile = options.outputFile ?? inputFile.replace(/\.json$/, '.yaml')

main(inputFile, outputFile, options)
