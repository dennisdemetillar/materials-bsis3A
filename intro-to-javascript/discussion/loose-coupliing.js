const handlePaypal = (amount) => {
    console.log(`Processing payment of $${amount} using PayPal...`);
}

const handleStripe = (amount) => {
    console.log(`Processing payment of $${amount} using Stripe...`);
}

const handlePaymentGateway = (amount, type) => {
    if (type === 'paypal') {
        handlePaypal(amount);
    } else if (type === 'stripe') {
        handleStripe(amount);
    } else {
        console.log("Invalid payment gateway.");
    }
}

handlePaymentGateway(100.0, 'paypal');
handlePaymentGateway(150.0, 'stripe');
handlePaymentGateway(10, 'gcash');
