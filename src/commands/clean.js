import fs from 'node:fs/promises'
import { read } from 'yaml-import'

import { CONFIG_FILE } from './constants.js'

export async function load() {
    return read(CONFIG_FILE)
}

export async function clean() {
    const config = load()
    console.log(config)

    await fs.rm(CONFIG_FILE)
}