var cart = ["shoes", "watches"];

function createOrder(cart, cb) {
    var noOfItem = cart.length;
    var price = noOfItem * 500;

    console.log("Order is created");

    cb(price, noOfItem);
}

function placeOrder(price, noOfItem, cb) {
    var orderId = Math.floor(Math.random() * 10000);
    console.log(`Order placed with Order ID: ${orderId}`);
    cb(orderId, price, noOfItem);
}

function orderPayment(orderId, price, noOfItem, cb) {
    console.log(`Payment of ₹${price} done for ${noOfItem} items, Order ID: ${orderId}`);
    cb();
}

function orderStatus() {
    console.log("Status: Payment Successful, Order Confirmed!");
}

// Start the callback chain
createOrder(cart, function(price, noOfItem) {
    placeOrder(price, noOfItem, function(orderId, price, noOfItem) {
        orderPayment(orderId, price, noOfItem, function() {
            orderStatus();
        });
    });
});
