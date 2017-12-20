const request = require('request-promise');
const escapeJson = require('escape-json-node');

function getRandomQuote() {
    var options = {
        method: 'POST',
        uri: 'https://forismatic.com/api/1.0/',
        formData: {
            method: 'getQuote',
            format: 'json',
            param: 'ms',
            lang: 'en'
        }
    };

    return request(options)
        .then(function (quoteJson) {
            // forismatic sometimes returns invalid JSON
            let inputQuote = JSON.parse(escapeJson(quoteJson));
            let quote = {
                author: inputQuote.quoteAuthor ? inputQuote.quoteAuthor.trim() : null,
                text: inputQuote.quoteText.trim()
            };
            return quote;
        });
}

module.exports = getRandomQuote;