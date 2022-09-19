/**
 * @param {string} s
 * @return {string}
 */
 exports.reverse = function reversedWords(s) {
    const space = /\s*(?: |$)\s*/
    const words = s.trim().split(space)
    const reversed = []
    for(let i = words.length - 1; i >= 0; i--){
        reversed.push(words[i])
    }
    return reversed.join(' ')
};