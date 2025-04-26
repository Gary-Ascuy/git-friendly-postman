import fs from 'node:fs/promises'

import { log } from './logger.js'

export async function exportPostmanConfigToYaml(inputFile, outputFile, { verbose }) {
    const options = { flag: 'w+', encoding: 'utf8', flush: true }

    const content = await fs.readFile(inputFile)
    const json = JSON.parse(content)

    if (verbose) {
        console.log(json)
    }

    log(`Writting exported file: ${outputFile}`, verbose)
    const yaml = dump(json)
    await fs.writeFile(outputFile, yaml, options)
}