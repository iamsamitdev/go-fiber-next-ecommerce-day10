import React from "react"

const OrderSummary = () => {
  // Sample cart items data
  const cartItems = [
    {
      id: 1,
      title: "iPhone 16 Pro Max",
      discountedPrice: 1299,
      quantity: 1
    },
    {
      id: 2,
      title: "MacBook Pro M3",
      discountedPrice: 1999,
      quantity: 2
    }
  ]

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0)

  return (
    <div className="lg:max-w-[455px] w-full">
      {/* <!-- order list box --> */}
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">สรุปราคาสินค้า</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* <!-- title --> */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
              <h4 className="font-medium text-dark">สินค้า</h4>
            </div>
            <div>
              <h4 className="font-medium text-dark text-right">ราคาสินค้า</h4>
            </div>
          </div>

          {/* <!-- product item --> */}
          {cartItems.map((item, key) => (
            <div key={key} className="flex items-center justify-between py-5 border-b border-gray-3">
              <div>
                <p className="text-dark">{item.title}</p>
              </div>
              <div>
                <p className="text-dark text-right">
                  ${item.discountedPrice * item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* <!-- total --> */}
          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="font-medium text-lg text-dark">ราคารวม</p>
            </div>
            <div>
              <p className="font-medium text-lg text-dark text-right">
                ${totalPrice}
              </p>
            </div>
          </div>

          {/* <!-- checkout button --> */}
          <button
            type="submit"
            className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
          >
            ดำเนินการชำระเงิน
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
