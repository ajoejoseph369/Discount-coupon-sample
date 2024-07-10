const { $ } = require('@wdio/globals')

const searchBtn = '(//*[@class="modal__toggle-open icon icon-search"])[2]';
const searchBar = '(//*[@id="custom_search_input1"])[2]';
const firstProduct = '(//*[@class="js--div__cat js--div__product"])[2]/div[1]';

class Homepage{
    async goToPage(){
        await browser.url('https://beardo.in/');
    }

    async searchProduct(){
        await $(searchBtn).click();
        await $(searchBar).waitForDisplayed({timeout:6000});
        await browser.pause(3000);
        await $(searchBar).setValue('Beardo APE X 3 In 1 Multipurpose Trimmer');
        await $(firstProduct).waitForDisplayed({timeout:6000});
        await $(firstProduct).click();
    }

}

module.exports = new Homepage();