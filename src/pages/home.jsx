import Nav from "../components/nav";
import cars from "../assets/cars.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import five from "../assets/five.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
export default function home() {
  const navigate = useNavigate();
  const features = [
    {
      icon: "🚚",
      title: "شحن مجاني",
      description: "على جميع الطلبات فوق 500 رس",
    },
    {
      icon: "🛡️",
      title: "ضمان الجودة",
      description: "ضمان لمدة عام على جميع المنتجات",
    },
    {
      icon: "🎧",
      title: "دعم على مدار الساعة",
      description: "فريق خدمة العملاء جاهز لمساعدتك",
    },
    {
      icon: "💳",
      title: "دفع آمن",
      description: "طرق دفع متعددة وآمنة",
    },
  ];
  const categories = [
    {
      title: "قطع المحرك",
      description: "قطع غيار أصلية للمحركات",
      products: "+250 منتج",
      image: one,
    },
    {
      title: "الإطارات والعجلات",
      description: "إطارات بجودة عالمية",
      products: "+180 منتج",
      image: two,
    },
    {
      title: "إكسسوارات داخلية",
      description: "تحسين مظهر سيارتك من الداخل",
      products: "+320 منتج",
      image: three,
    },
    {
      title: "نظام الفرامل",
      description: "فرامل آمنة وموثوقة",
      products: "+150 منتج",
      image: five,
    },
  ];
  return (
    <>
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${cars})` }}
      >
        <Nav />
        <section className="container mx-auto text-white py-16 px-6 rounded-lg text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-25">
            قطع غيار أصلية لجميع أنواع السيارات
          </h2>
          <p className="text-lg mb-8 mx-auto leading-relaxed">
            نوفر لك أفضل قطع الغيار والإكسسوارات بجودة عالية وأسعار تنافسية. شحن
            سريع <br />
            وضمان على جميع المنتجات
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/shop")}
              className="border border-white cursor-pointer text-white font-semibold py-2 px-5 rounded hover:bg-white hover:text-blue-600 transition"
            >
              تسوق الآن
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-white text-blue-600 cursor-pointer font-semibold py-2 px-5 rounded hover:bg-blue-100 transition"
            >
              اكتشف المزيد
            </button>
          </div>
        </section>
      </div>
      <section className="container mx-auto py-16 px-6 text-right">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-lg shadow p-6 flex flex-col items-end text-right"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto py-16 px-6 text-right">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          تسوق حسب الفئة
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-center">
          اختر من بين مجموعة واسعة من قطع الغيار والإكسسوارات
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-lg shadow p-4 flex flex-col items-end text-right group"
            >
              <div className="overflow-hidden rounded-md mb-4 w-full">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{cat.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {cat.description}
              </p>
              <p className="text-xs text-blue-600 mt-1">{cat.products}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-800 text-white py-16 px-6 text-center rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
        %15 ابدأ التسوق الآن واحصل على خصم
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
          WELCOME15 : على أول طلب لك! استخدم الكود
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-white cursor-pointer text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
        >
          ابدأ التسوق
        </button>
      </section>
      <Footer />
    </>
  );
}
