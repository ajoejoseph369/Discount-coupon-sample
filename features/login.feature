Feature: Test discount coupons on purchases

Scenario: User visits the website and searches for product
Given user is on the homepage
When user searches for the product
Then user adds product to cart

Scenario: User checks out and adds coupon code
Given user is on the view cart page
When user applies coupon code
Then price of product will be updated
