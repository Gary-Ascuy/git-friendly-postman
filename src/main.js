#!/usr/bin/env node

import { Command } from 'commander'

import { clean } from './commands/clean.js'
import { run } from './commands/run.js'
import { DESCRIPTION, VERSION } from './commands/constants.js'
import { log } from './commands/logger.js'
import { exportPostmanConfigToYaml } from './commands/export.js'

const program = new Command()
program
    .name('git-friendly-postman')
    .description(DESCRIPTION)
    .version(VERSION)
    .option('--clean')
    .option('-i,--input-file <path>')
    .option('-o,--output-file <path>')
    .option('-e,--export')
    .option('--v,--verbose')
    .argument('[string]')

program.parse()
const options = program.opts()

async function main(inputFile, outputFile, options) {
    const { verbose } = options

    if (options.clean) {
        log(`Starting clean operation`, verbose)
        await clean(options)
        process.exit(0)
    }

    if (options.export) {
        log(`Starting export operation`, verbose)
        await exportPostmanConfigToYaml(inputFile, outputFile, options)
        process.exit(0)
    }

    log(`Starting init operation`, verbose)
    await run(inputFile, outputFile, options)
    process.exit(0)
}

const inputFile = options.file ?? program.args[0]
const outputFile = options.outputFile ?? (inputFile ?? "").replace(/\.yaml$/, '.json')
main(inputFile, outputFile, options)
