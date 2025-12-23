import Nav from "../components/nav";
import cars from "../assets/cars.png";
import us from "../assets/us.png";
import aboutus from "../assets/aboutus.png";
import { FaTruck, FaHeadset, FaUserTie, FaShieldAlt } from "react-icons/fa";
import Footer from "../components/footer";
export default function about() {
  const values = [
    {
      icon: <FaTruck className="text-blue-600 text-3xl" />,
      title: "التوصيل السريع",
      description:
        "خدمة توصيل سريعة وموثوقة لجميع أنحاء المملكة مع إمكانية الاستلام من الفرع",
    },
    {
      icon: <FaHeadset className="text-blue-600 text-3xl" />,
      title: "خدمة العملاء",
      description:
        "دعم فني متخصص ومتاح دائماً لمساعدتك في اختيار القطع المناسبة لسيارتك",
    },
    {
      icon: <FaUserTie className="text-blue-600 text-3xl" />,
      title: "الخبرة والاحترافية",
      description:
        "فريق من الخبراء المتخصصين بخبرة تزيد عن 15 عاماً في مجال قطع غيار السيارات",
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      title: "الجودة والضمان",
      description:
        "نوفر فقط المنتجات الأصلية والبديلة عالية الجودة، مع ضمان شامل على جميع المنتجات",
    },
  ];
     const stats = [
  {
    value: "98%",
    label: "نسبة رضا العملاء",
  },
  {
    value: "+10,000",
    label: "منتج متوفر",
  },
  {
    value: "+50,000",
    label: "عميل راضٍ",
  },
  {
    value: "+15",
    label: "سنوات من الخبرة",
  },
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
            من نحن
          </h3>
          <h2 className="text-white text-xl opacity-100 text-shadow-lg/70">
            شريكك الموثوق في عالم قطع الغيار والإكسسوارات
          </h2>
        </div>
      </div>
      <section class="container mx-auto py-16 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={us}
              alt="فريق عمل يتناقش"
              class="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div class="text-right">
            <h2 class="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-700 mb-7">
              قصتنا
            </h2>
            <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              تأسست شركتنا في عام 2010 برؤية واضحة: توفير أفضل قطع الغيار
              والإكسسوارات لجميع أنواع السيارات بجودة عالية وأسعار تنافسية. على
              مدار أكثر من 15 عامًا، نجحنا في بناء سمعة قوية وثقة متينة مع
              عملائنا في جميع أنحاء المنطقة.
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              نحن نفخر بكوننا أكثر من مجرد متجر لقطع الغيار. نحن شركاء في رحلة
              صيانة سيارتك، نقدم لك الاستشارات المهنية والدعم الفني المتخصص
              لضمان حصولك على القطع المناسبة لسيارتك.{" "}
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              مع فريق من الخبراء المتخصصين ومخزون ضخم يضم آلاف المنتجات الأصلية
              والبديلة عالية الجودة، نضمن لك إيجاد ما تحتاجه بكل سهولة ويسر.{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 dark:bg-gray-900">
        <section className="container mx-auto py-12 px-6 text-center">
          <h2 className="text-2xl font-bold mb-2">قيمنا ومميزاتنا</h2>
          <p className="text-gray-600 dark:text-gray-200 mb-10">
            ما يميزنا عن الآخرين ويجعلنا الخيار الأمثل لعملائنا
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center"
              >
                {item.icon}
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
        <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutus})` }}
      >
    <section className="container mx-auto py-12 px-6 text-center">
      <h2 className="text-2xl text-white font-bold mb-2">إنجازاتنا بالأرقام</h2>
      <p className="text-gray-300 mb-10">
        أرقام تتحدث عن نفسها وتعكس ثقة عملائنا
      </p>
      <div className="grid grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg p-6 flex flex-col items-center"
          >
            <span className="text-2xl md:text-3xl font-medium text-blue-600">
              {item.value}
            </span>
            <p className="mt-2 text-gray-200 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
    <Footer />
    </>
  );
}
