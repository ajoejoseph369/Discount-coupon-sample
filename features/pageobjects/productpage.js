const { $ } = require('@wdio/globals')

const addToCartBtn = '//*[@name="add"]';
const cartDrawer = '//*[@id="CartDrawer"]';
const checkoutBtn = '//*[@id="CartDrawer-Checkout"]';
const couponCodeInput = '//*[@name="temp-discount"]';
const applyBtn = '//*[@class="docapp-coupon-input--button"]';
const discountHolder = '//*[@class="docapp-cart-item docapp-cart-discount docapp-clearfix"]';
const discountAmount = '//*[@class="docapp-cart-item docapp-cart-discount docapp-clearfix"]/span[@class="docapp-right"]';
const couponApplyConfirmation = '//*[@class="docapp-coupon-input--message-content"]';

class Product{
    async checkRedirectionToProductDescription(){
        if(await $(addToCartBtn).isDisplayed())
            return true;
        else
            return false;
    }

    async addToCart(){
        await $(addToCartBtn).waitForDisplayed({timeout:6000});
        await $(addToCartBtn).click();
    }

    // async checkout(){
    //     await $(cartDrawer).waitForDisplayed({timeout:6000});
    //     await $(checkoutBtn).waitForDisplayed({timeout:6000});
    //     await $(checkoutBtn).click();

    // }
    async checkIfCartDrawerIsDisplayed(){
        if(await $(cartDrawer).isDisplayed())
            return true;
        else
            return false;
    }

    async applyPromoCode(){
        await $(cartDrawer).waitForDisplayed({timeout:6000});
        await $(couponCodeInput).setValue('GPAT9270');
        await $(applyBtn).click();
        await browser.pause(5000);
    }

    async checkIfCodeApplied(){
        console.log('Message: ' + await $(couponApplyConfirmation).getText());
        if(await $(couponApplyConfirmation).isDisplayed()){
            let condition = await expect($(couponApplyConfirmation)).toHaveText(expect.stringContaining("Coupon code 'GPAT9270' applied"))
            if(condition)
                return true;
        }
        else
            return false;
        await browser.pause(13000);
    }

}

module.exports = new Product();