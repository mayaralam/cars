import Nav from "../components/nav";
import { useState } from "react";
import { toast } from "react-hot-toast";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import item7 from "../assets/item7.jpg";
import item8 from "../assets/item8.jpg";
import item9 from "../assets/item9.png";
import Footer from "../components/footer";
export default function Shop() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const products = [
    { id: 1, title: "حامل هاتف مغناطيسي", price: 65, image: item2 },
    { id: 2, title: "مصابيح أمامية LED", price: 950, image: item3 },
    { id: 3, title: "معطر سيارة فاخر", price: 45, image: item1 },
    { id: 4, title: "وسادة مقعد مريحة", price: 85, image: item7 },
    { id: 5, title: "بطارية 70 أمبير", price: 450, image: item6 },
    { id: 6, title: "غطاء مقود جلد طبيعي", price: 95, image: item4 },
    { id: 7, title: "نظام فرامل كامل", price: 2800, image: item5 },
    { id: 8, title: "فلتر زيت متطور", price: 85, image: item9 },
    { id: 9, title: "واقي شمس للزجاج الأمامي", price: 50, image: item8 },
  ];
  const addToCart = (productIndex) => {
    const selectedProduct = products[productIndex];
    let newCart = [...cart];
    const existingProductIndex = newCart.findIndex(
      (item) => item.id === selectedProduct.id
    );
    if (existingProductIndex !== -1) {
      newCart[existingProductIndex].qty += 1;
      toast.success("تم زيادة الكمية في السلة!");
    } else {
      newCart.push({ ...selectedProduct, qty: 1 });
      toast.success("تمت الإضافة إلى السلة!");
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <>
      <Nav />
      <section className="bg-blue-800 text-white container mx-auto p-6 text-right rounded-lg mt-7">
        <h2 className="text-xl font-bold mb-4">مرحباً بك في متجرنا</h2>
        <p className="text-lg mx-auto leading-relaxed text-gray-200">
          اكتشف مجموعتنا المميزة من إكسسوارات السيارات وقطع الغيار عالية الجودة.
          نوفر لك أفضل المنتجات بأسعار تنافسية
        </p>
      </section>
      <section className="container mx-auto py-12 px-6 text-right">
        <h2 className="text-2xl font-bold mb-12">منتجاتنا المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-black rounded-lg shadow p-4 flex flex-col group"
            >
              <div className="overflow-hidden rounded-md mb-4 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold mb-1 text-right">
                {item.title}
              </h3>
              <p className="text-blue-600 mt-1 text-right">ريال {item.price}</p>
              <button
                onClick={() => addToCart(index)}
                className="cursor-pointer mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                احجز الآن
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
