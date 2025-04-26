import fs from 'node:fs/promises'

import { dump } from 'js-yaml'
import { read } from 'yaml-import'

import { CONFIG_FILE, VERSION, AUTHOR } from './constants.js'
import { log } from './logger.js'

export function getConfig(inputFile, outputFile, options) {
    return {
        'meta': {
            'version': VERSION,
            'author': AUTHOR,
            'now': new Date().toISOString(),
        },
        'git-friendly-postman': {
            inputFile,
            outputFile,
        }
    }
}

export async function run(inputFile, outputFile, { verbose }) {
    const options = { flag: 'w+', encoding: 'utf8', flush: true }

    log(`Writting config file: ${outputFile}`, verbose)
    const config = dump(getConfig(inputFile, outputFile))
    await fs.writeFile(CONFIG_FILE, config, options)

    log(`Writting temporal output file: ${outputFile}`, verbose)
    const content = read(inputFile)
    await fs.writeFile(outputFile, JSON.stringify(content, null, 4), options)
}
