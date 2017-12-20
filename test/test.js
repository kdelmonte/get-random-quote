import test from 'ava';
import getRandomQuote from './../index';

test('gets quote successfully', async t => {
    try {
        let quote = await getRandomQuote();
        if(quote.text){
            t.pass();
        } else {
            t.fail('Quote is empty');
        }
    } catch(e){
        t.fail(`Could not retrieve quote. Error: ${e.message}`);
    }
});