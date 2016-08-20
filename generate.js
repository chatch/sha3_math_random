'use strict'

/**
 * Generate random numbers by producing sha3 hashes of Math.random values.
 *
 * Write out to files for analysis.
 */

const fs = require('fs')
const sha3 = require('crypto-js/sha3')

const NUMBER_OF_RANDS = 10000

const TS = Date.now()
const RANDOMS_FILE = `randoms.${TS}.txt`
const HASHES_FILE = `hashes.${TS}.txt`

const SHA3_OPTS = {outputLength: 256}
const ERROR_HANDLER = (err) => {
  if (err) throw err
}

const randsStream = fs.createWriteStream(RANDOMS_FILE);
const hashesStream = fs.createWriteStream(HASHES_FILE);

for (let count = 0; count < NUMBER_OF_RANDS; count++) {
  const rand = Math.random().toString()
  const hash = sha3(rand, SHA3_OPTS).toString();
  // console.log(rand)
  // console.log(hash)
  randsStream.write(`${rand}\n`);
  hashesStream.write(`${hash}\n`);
}

randsStream.end()
hashesStream.end()
