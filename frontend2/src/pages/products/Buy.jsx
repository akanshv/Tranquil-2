import React from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Buy = () => {
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
                    Total: <span id="totalPrice" className="font-bold">₹{bought.amount}</span>
                  </h5>
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
