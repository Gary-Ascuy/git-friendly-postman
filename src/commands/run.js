import fs from 'node:fs/promises'

import { dump } from 'js-yaml'
import { read } from 'yaml-import'

import { CONFIG_FILE, VERSION, AUTHOR } from './constants.js'

export function getConfig(inputFile, outputFile) {
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

export async function run(inputFile, outputFile) {
    const options = { flag: 'w+', encoding: 'utf8', flush: true }

    const config = dump(getConfig(inputFile, outputFile))
    await fs.writeFile(CONFIG_FILE, config, options)

    const content = read(inputFile)
    await fs.writeFile(outputFile, JSON.stringify(content, null, 4), options)
}
