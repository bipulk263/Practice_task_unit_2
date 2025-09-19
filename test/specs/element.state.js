import { expect, $ } from '@wdio/globals'

const randomString = crypto.randomUUID();

describe('Dynamic Controls test', () => {
    it('populated text should be displayed in dynamic control', async () => {
        await $('//*[@href="/dynamic_controls"]').click()

        await $('//button[text() = "Enable"]').click()
        
        let inputField = await $('#input-example input')
        //expect that inputField is enabled
        await expect(inputField).toBeEnabled()

        //input randomString into inputField
        await inputField.setValue(randomString)
       let text = await inputField.getValue()

        //expect that randomString is displayed
      expect(text).toEqual(randomString)

        

        
    })
})

