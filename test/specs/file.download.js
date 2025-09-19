import { expect, $ } from '@wdio/globals';
import * as path from 'path';
import * as fs from 'fs';

const fileName = "test.txt"

describe('File Download test', () => {
    before('create downloads folder', async () => {
        fs.mkdirSync(global.downloadDir)
    })

    it('file should be downloaded to the default downloads directory', async () => {
        await $('[href="/download"]').click()

        let fileLink = await $(`[href="download/${fileName}"]`)
        await expect(fileLink).toExist()

        await fileLink.click()
        let downloadedFilePath = path.join(global.downloadDir, fileName)

        //wait until the file is fully downloaded along a specific downloadedFilePath
        await browser.waitUntil(() => fs.existsSync(downloadedFilePath));
        //assert that file downloaded
            await expect(fs.existsSync(downloadedFilePath)).toBeTruthy();   

    })

    //after execution delete downloadDir folder with all content 
    after('delete downloads folder', async () => {
        fs.rmdirSync(global.downloadDir, { recursive: true })
    })
})
