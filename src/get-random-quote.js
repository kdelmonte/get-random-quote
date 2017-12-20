const request = require('request-promise');

function getRandomQuote() {
    var options = {
        method: 'POST',
        uri: 'https://forismatic.com/api/1.0/',
        formData: {
            method: 'getQuote',
            format: 'json',
            param: 'ms',
            lang: 'en'
        },
        json: true
    };

    return request(options)
        .then(function (quote) {
            return {
                author: quote.quoteAuthor,
                text: quote.quoteText
            }
        });
}

module.exports = getRandomQuote;