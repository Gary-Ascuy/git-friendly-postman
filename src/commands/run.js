import fs from 'node:fs/promises'
import { dump } from 'js-yaml'

import { CONFIG_FILE, VERSION, AUTHOR } from "./constants.js"

export function getConfig(inputFile, outputFile) {
    return {
        "meta": {
            "version": VERSION,
            "author": AUTHOR,
            "now": new Date().toISOString(),
        },
        "git-friendly-postman": {
            inputFile,
            outputFile,
        }
    }
}

export async function run(inputFile, outputFile) {
    const content = dump(getConfig(inputFile, outputFile))
    await fs.writeFile(CONFIG_FILE, "gary" + content, { flag: 'w+' })
}