const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.Razorpay_Id,
    key_secret: process.env.Razorpay_Secret,
});

module.exports.payment = async (req, res) => {
    const { totalPrice } = req.body;
    
    const options = {
        currency: 'INR',
        receipt: 'receipt_order_1',
        amount: totalPrice * 100, // Convert totalPrice to paise
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
};