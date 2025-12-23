import Nav from "../components/nav";
import cars from "../assets/cars.png";
import carcon from "../assets/carcon.png";
import map from "../assets/map.png";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";
export default function contact() {
  const handleSubmit = () => {
    event.preventDefault();
    toast.success(".تم ارسال رسالتك بنجاح! سنعود إليك قريبًا");
  };
  const stats = [
    { value: "+10000", label: "قطعة غيار متوفرة" },
    { value: "+5000", label: "عميل راضٍ" },
    { value: "10+", label: "سنوات من الخبرة" },
  ];
  return (
    <>
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${cars})` }}
      >
        <Nav />
        <div className="container mx-auto flex flex-col items-center text-center gap-5 px-4">
          <h3 className="mt-40 text-4xl font-bold text-white opacity-100 text-shadow-lg/70">
            تواصل معنا
          </h3>
          <h2 className="text-white text-xl opacity-100 text-shadow-lg/70">
            نحن هنا لخدمتك. تواصل معنا للحصول على أفضل قطع الغيار والإكسسوارات
            <br />
            لسيارتك
          </h2>
        </div>
      </div>
      <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-right">
            <div>
              <img src={carcon} className="w-full p-3 h-60 mb-5" />
            </div>
            <h2 className="text-2xl font-bold mb-4">معلومات الاتصال</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-2 border-blue-700 p-4">
                <p className="font-semibold"> :الهاتف 📞</p>
                <p>+20 10 5555 1234</p>
                <p>+20 11 4444 9876</p>
              </div>
              <div className="border-2 border-blue-700 p-4">
                <p className="font-semibold"> :البريد الإلكتروني 📧</p>
                <p>info@carparts.eg</p>
                <p>support@carparts.eg</p>
              </div>
              <div className="border-2 border-blue-700 p-4">
                <p className="font-semibold">:العنوان 📍</p>
                <p>شارع الثورة، حي مصر الجديدة</p>
                <p>القاهرة 11757، جمهورية مصر العربية</p>
              </div>
              <div className="border-2 border-blue-700 p-4">
                <p className="font-semibold">:ساعات العمل ⏰</p>
                <p>السبت - الخميس: 8:00 صباحاً - 10:00 مساءً</p>
                <p>الجمعة: 2:00 ظهراً - 10:00 مساءً</p>
              </div>
            </div>
            <div className="flex gap-4 mt-6 justify-center text-2xl text-blue-600">
              <FaLinkedin className="cursor-pointer hover:text-blue-800" />
              <FaInstagram className="cursor-pointer hover:text-blue-800" />
              <FaTwitter className="cursor-pointer hover:text-blue-800" />
              <FaFacebook className="cursor-pointer hover:text-blue-800" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-right">
            <h2 className="text-2xl font-bold mb-7 text-blue-700 mt-5">
              أرسل لنا رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold">*الاسم الكامل</label>
                <input
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">*رقم الهاتف</label>
                <input
                  type="text"
                  placeholder="+20 12 3333 2468"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">*البريد الإلكتروني </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">*الموضوع</label>
                <select className="w-full bg-white dark:bg-gray-800 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right">
                  <option>اختر الموضوع</option>
                  <option>طلب قطع غيار</option>
                  <option>الضمان و الصيانة</option>
                  <option>استفسار عام</option>
                  <option>طلب اكسسوارات</option>
                  <option>شكوي او اقتراح</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">*الرسالة </label>
                <textarea
                  placeholder="اكتب رسالتك هنا..."
                  rows="4"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white px-6 py-2 rounded-lg font-semibold mt-5"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6 text-right">
        <div className="container mx-auto flex flex-col gap-10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            موقعنا على الخريطة
          </h2>
          <div className="flex items-center justify-center">
            <img src={map} className="w-full h-66 md:h-[60vh] rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-blue-600 text-white rounded-lg p-6 text-center shadow-md hover:bg-blue-700 transition"
              >
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
