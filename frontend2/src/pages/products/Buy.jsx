import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Buy = () => {
  const { totalPrice } = useSelector((state) => state.allCart);
  const location = useLocation();
  const bought = location.state.bought;
  const use = location.state.use;

  // console.log('here');
  // console.log(location.state.bought)
  // console.log(location.state.use)

  const buyDate = new Date(bought.buydate);
  const formattedDate = `${buyDate.getDate()}-${
    buyDate.getMonth() + 1
  }-${buyDate.getFullYear()}`;
  const formattedTime = `${buyDate.getHours()}:${buyDate.getMinutes()}:${buyDate.getSeconds()}`;

  const [orderId, setOrderId] = useState("");

  const createOrder = async () => {
    try {
      const response = await axios.post("http://localhost:3000/products/create-order", { totalPrice: totalPrice });
      setOrderId(response.data.id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  let orderPlaced = false;
  const displayRazorpay = async () => {
    const options = {
      key: 'rzp_test_fxbOGrycAZwU7g' ,
      amount: totalPrice * 100, // Amount in paise (Example: 50000 paise = ₹500)
      currency: "INR",
      name: "Tranquil",
      description: "Test Payment",
      order_id: orderId,
      handler: function (response) {
        toast.success("Order placed successfully!", {
            autoClose: 2000,
        });
        orderPlaced = true;
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };
    const razorpayInstance = await new window.Razorpay(options);
    razorpayInstance.open();
  };

  const handlePayment = async () => {
    await createOrder();
    await displayRazorpay();
  };


  return (
    <>
      <div className="expert-div flex justify-center">
        <img
          src="https://i.imgur.com/uc9EeQL.png"
          className="w-[65%] mt-[8rem] rounded-full"
          alt="expert"
        />
      </div>
      <section className="mt-6 mb-6">
        <div className="container-sm">
          <div className="flex justify-center">
            <div className="w-full md:w-8/12 mx-auto">
              <div className="card card-md">
                <div className="mt-6 text-center text-4xl text-blue-600 font-bold">
                  Shopping Bill
                </div>
                <div className="card-header mt-4">
                  <div>Name: {use.username}</div>
                  <div>Date: {formattedDate}</div>
                  <div>Time: {formattedTime}</div>
                </div>
                <div className="card-body">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bought.productarr.map((product, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">{product.Name}</td>
                          <td className="border px-4 py-2">
                            {product.Cutprice}
                          </td>
                          <td className="border px-4 py-2">
                            {bought.countarr[index]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer flex justify-end mt-4">
                  <h5 className="text-lg">
                    Total:{" "}
                    <span id="totalPrice" className="font-bold">
                      ₹{bought.amount}
                    </span>
                  </h5>
                  {!orderPlaced && (
                    <button
                      onClick={handlePayment}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-6 rounded"
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buy;
