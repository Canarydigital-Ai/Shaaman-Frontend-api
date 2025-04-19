import React from "react";
import Footer from "../../components/footer/Footer";
import ShopingCartSection from "../../components/cart/ShopingCartSection";
import OrderSummary from "../../components/cart/OrderSummary";

const CartandCheckoutPage: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#F6F1E8,_#FFF9EF)]">
      <div className="h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24 space-y-16">
        <h2 className="text-3xl md:text-[48px] nanum-myeongjo-regular tracking-[-4px]">
          Shopping cart
        </h2>
        <div className="flex gap-5">
          <ShopingCartSection />
          <OrderSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartandCheckoutPage;
