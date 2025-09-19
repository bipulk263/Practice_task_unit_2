import { expect, $, $$ } from '@wdio/globals'

const expectedSum = 251;
const currencySign = '$';

describe('Data Table test', () => {
    it('sum of Due values should be correct', async () => {
        await $$('[//*[@id="table1"]//td[4]]').click()

        //get Due column elements
        let actualSum = 0

        for await (let item of dueItems) {
            //get value in the column
            let value = await item.getText()
            //increase actualSum with value without currencySign
            actualSum += Number(value.replace(currencySign, ''))
        }

        expect(actualSum).toEqual(expectedSum)
    })
})

