import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiLayoutTopLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Nav from "../components/nav";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";
export default function CartPage() {
  const handleBooking = () => {
    toast.success("تم إتمام طلبك بنجاح!");
  };
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart).map((item) => ({
        ...item,
        price: Number(item.price) || 0, 
        qty: Number(item.qty) || 1,
      }));
      setCart(parsedCart);
    }
  }, []);
  const subtotal = cart.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (Number(item.qty) || 0),
    0
  );
  const deliveryFee = 25;
  const total = subtotal + deliveryFee;
  const updateQty = (index, delta) => {
    const newCart = [...cart];
    const newQty = newCart[index].qty + delta;
    if (newQty >= 1) {
      newCart[index].qty = newQty;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("تم حذف المنتج من السلة");
  };
  return (
    <>
      <Nav />
      <div className="flex items-center justify-between bg-white dark:bg-gray-900 shadow-md p-4 rounded-md">
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <span className="text-xl">←</span>
          <span onClick={() => navigate("/shop")} className="ml-2">
            العودة للمتجر
          </span>
        </button>
        <div className="flex items-center mr-2 gap-2 text-blue-600 font-semibold">
          <FaShoppingCart className="text-2xl ml-2" />
          <div className="text-right">
            <p className="text-sm">سلة التسوق</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 px-4 text-right">
        <div className="py-6">
          <div className="flex flex-col md:flex-row gap-20 pt-4 w-full max-w-6xl mx-auto mb-12">
            {cart.length > 0 && (
              <div className="w-sm bg-blue-50 text-black p-6 rounded-lg shadow h-83">
                <h2 className="text-2xl font-bold mb-4">ملخص الطلب</h2>
                <p className="text-lg mb-2">
                  المجموع الفرعي: {subtotal.toFixed(2)} جنيه
                </p>
                <p className="text-lg mb-2">
                  رسوم التوصيل: {deliveryFee.toFixed(2)} جنيه
                </p>
                <p className="text-xl font-bold mt-4">
                  المجموع الإجمالي: {total.toFixed(2)} جنيه
                </p>
                <div className="flex flex-col items-center justify-center gap-3">
                  <button
                    onClick={handleBooking}
                    className="bg-blue-800 w-full rounded-lg text-white px-3 py-2 mt-9 font-medium cursor-pointer"
                  >
                    إتمام الطلب
                  </button>
                  <div className="bg-green-100 text-green-800 text-center py-2 font-semibold flex items-center justify-center">
                    <span className="mr-2">🎉</span>
                    <span>شحن مجاني للطلبات فوق 1000 جنيه</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex-1 flex flex-col gap-4">
              {cart.length === 0 ? (
                <div className="flex gap-3 justify-center">
                  <RiLayoutTopLine className="size-6 text-blue-700 dark:text-white" />
                  <p className="text-[17px]">السلة فارغة حالياً.</p>
                </div>
              ) : (
                cart.map((product, index) => (
                  <div
                    key={product.id} 
                    className="bg-white dark:bg-black rounded-lg shadow-md p-4 flex flex-col md:flex-row justify-between items-center"
                  >
                    <img
                      className="object-contain size-30"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="flex md:flex-row flex-col gap-3 justify-between items-center">
                      <p className="font-bold">{product.title}</p>

                      <div className="item-qty flex items-center gap-3">
                        <button onClick={() => updateQty(index, -1)}>−</button>
                        <span>{product.qty}</span>
                        <button onClick={() => updateQty(index, 1)}>+</button>
                      </div>
                      <h5 className="text-grey m-0">
                        {Number(product.price) * Number(product.qty)} جنيه
                      </h5>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-600"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                ))
              )}
              <div className="border border-blue-300 bg-blue-50 rounded-md p-4">
                <h2 className="text-blue-700 font-bold mb-2">
                  معلومات التوصيل
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <div>توصيل سريع خلال 2-3 أيام عمل</div>
                  <div>شحن مجاني للطلبات فوق 1000 جنيه</div>
                  <div>إمكانية الدفع عند الاستلام</div>
                  <div>ضمان استرجاع المنتج خلال 14 يوم</div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}