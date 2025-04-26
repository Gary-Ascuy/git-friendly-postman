import fs from 'node:fs/promises'
import { read } from 'yaml-import'

import { CONFIG_FILE } from './constants.js'

export async function load() {
    return read(CONFIG_FILE)
}

export async function clean() {
    const config = load()

    try {
        await fs.rm(config['git-friendly-postman'].outputFile)
        await fs.rm(CONFIG_FILE)
    } catch (e) {
        console.log("Unable to remove files")
        process.exit(1)
    }
}