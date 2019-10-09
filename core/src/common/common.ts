import randomstring = require('randomstring')

export function generateRandomString(length) {
    return randomstring.generate(length)
}
