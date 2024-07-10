const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const Homepage = require('../pageobjects/homepage.js');
const Product = require('../pageobjects/productpage.js');

//homepage

Given(/^user is on the homepage$/, async () => {
	await Homepage.goToPage();
});

When(/^user searches for the product$/, async () => {
	await Homepage.searchProduct();
});

Then(/^user adds product to cart$/, async () => {
	await Product.checkRedirectionToProductDescription();
    await Product.addToCart();
});

//product page


Given(/^user is on the view cart page$/, async () => {
	await Product.checkIfCartDrawerIsDisplayed();
});

When(/^user applies coupon code$/, async () => {
	await Product.applyPromoCode();
});

Then(/^price of product will be updated$/, async () => {
	await Product.checkIfCodeApplied();
});
