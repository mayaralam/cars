export default function footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-6 px-6 text-right">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-lg font-bold mb-4">قطع غيار السيارات</h3>
          <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
            نحن متخصصون في توفير قطع غيار أصلية وإكسسوارات عالية الجودة لجميع
            أنواع السيارات بأسعار تنافسية.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
            <li>
              <a href="#">
                عن الشركة
              </a>
            </li>
            <li>
              <a href="#">
                المنتجات
              </a>
            </li>
            <li>
              <a href="#">
                العروض الخاصة
              </a>
            </li>
            <li>
              <a href="#">
                المدونة
              </a>
            </li>
            <li>
              <a href="#">
                سياسة الإرجاع
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">خدمة العملاء</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
            <li>
              <a href="#">
                الأسئلة الشائعة
              </a>
            </li>
            <li>
              <a href="#">
                تتبع الطلب
              </a>
            </li>
            <li>
              <a href="#">
                الشحن والتوصيل
              </a>
            </li>
            <li>
              <a href="#">
                الشروط والأحكام
              </a>
            </li>
            <li>
              <a href="#">
                سياسة الخصوصية
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">
            الرياض، المملكة العربية السعودية، حي الماز، شارع الأمير عبدالرحمن
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">+966 50 123 4567</p>
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-4">info@carparts.sa</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-wrap justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex gap-4 mb-4 md:mb-0">
          <span> Apple Pay</span>
          <span>مدى</span>
          <span>Mastercard</span>
          <span>VISA</span>
        </div>
        <p>© 2024 قطع غيار السيارات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
