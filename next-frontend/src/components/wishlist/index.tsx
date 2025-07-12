"use client"

import React from "react"
import Breadcrumb from "@/components/common/Breadcrumb"
import SingleItem from "@/components/wishlist/SingleItem"

export const Wishlist = () => {
  // Sample wishlist items data
  const wishlistItems = [
    {
      id: 1,
      title: "iPhone 16 Pro Max",
      discountedPrice: 1299,
      imgs: {
        thumbnails: ["/images/products/iPhone16Promax.png"]
      },
      inStock: true
    },
    {
      id: 2,
      title: "MacBook Pro M3",
      discountedPrice: 1999,
      imgs: {
        thumbnails: ["/images/products/product-1-bg-1.png"]
      },
      inStock: false
    },
    {
      id: 3,
      title: "AirPods Pro",
      discountedPrice: 249,
      imgs: {
        thumbnails: ["/images/products/product-2-bg-1.png"]
      },
      inStock: true
    }
  ]

  return (
    <>
      <Breadcrumb title={"สิ่งที่อยากได้"} pages={["สิ่งที่อยากได้"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
            <h2 className="font-medium text-dark text-2xl">สิ่งที่อยากได้</h2>
            <button className="text-blue">ล้างรายการสิ่งที่อยากได้</button>
          </div>

          <div className="bg-white rounded-[10px] shadow-1">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1170px]">
                {/* <!-- table header --> */}
                <div className="flex items-center py-5.5 px-10">
                  <div className="min-w-[83px]"></div>
                  <div className="min-w-[387px]">
                    <p className="text-dark">สินค้า</p>
                  </div>

                  <div className="min-w-[205px]">
                    <p className="text-dark">ราคา</p>
                  </div>

                  <div className="min-w-[265px]">
                    <p className="text-dark">สถานะ</p>
                  </div>

                  <div className="min-w-[150px]">
                    <p className="text-dark text-right">การดำเนินการ</p>
                  </div>
                </div>

                {/* <!-- wish item --> */}
                {wishlistItems.map((item, key) => (
                  <SingleItem item={item} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
