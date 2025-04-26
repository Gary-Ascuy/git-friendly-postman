import fs from 'node:fs/promises'
import { read } from 'yaml-import'

import { CONFIG_FILE } from './constants.js'
import { log } from './logger.js'

export async function load() {
    return read(CONFIG_FILE)
}

export async function clean({ verbose }) {
    try {
        const config = await load()

        const { outputFile } = config['git-friendly-postman']
        log(`Removing temporal output file: ${outputFile}`, verbose)
        await fs.rm(outputFile)

        log(`Removing git-friendly-postman config: ${CONFIG_FILE}`, verbose)
        await fs.rm(CONFIG_FILE)
    } catch (e) {
        log(e, verbose)
        process.exit(1)
    }
}
