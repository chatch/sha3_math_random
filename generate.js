'use strict'

/**
 * Generate random numbers by producing sha3 hashes of Math.random values.
 *
 * Write out to files for analysis.
 */

const fs = require('fs')
const sha3 = require('crypto-js/sha3')

const TS = Date.now()
const RANDOMS_FILE = `randoms.${TS}.txt`
const HASHES_FILE = `hashes.${TS}.txt`
const TIMES = 10000

const SHA3_OPTS = {outputLength: 256}
const ERROR_HANDLER = (err) => {
  if (err) throw err
}

for (let count = 0; count < TIMES; count++) {
  const rand = Math.random().toString()
  const hash = sha3(rand, SHA3_OPTS).toString();
  console.log(rand)
  console.log(hash)
  fs.appendFile(RANDOMS_FILE, `${rand}\n`, ERROR_HANDLER)
  fs.appendFile(HASHES_FILE, `${hash}\n`, ERROR_HANDLER)
}
