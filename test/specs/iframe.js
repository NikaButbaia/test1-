import { expect, $, $$ } from '@wdio/globals'

const randomString = crypto.randomUUID();
const initText = 'Your content goes here.';

describe('iFrame test', () => {
    it('check that changes is backed from iframe input', async () => {
        await $('[href="/frames"]').click()
        await $('[href="/iframe"]').click()
        
        const iframe = await $('iframe#mce_0_ifr')
        
        //add text to the input field

        await expect($(`//*[text() = '${initText}${randomString}']`)).toExist()

        await $('//*[text()="Edit"]').click()
        //undo changes 
        
        //expect that initText is displayed in the editor
    })
})

