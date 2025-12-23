import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    username: yup.string().min(3, "الحد الأدنى 3 أحرف").required("مطلوب"),
    email: yup.string().email("البريد غير صالح").required("مطلوب"),
    password: yup.string().min(6, "الحد الأدنى 6 أحرف").required("مطلوب"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة")
      .required("مطلوب"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, "أدخل رقم هاتف صحيح")
      .required("مطلوب"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      phone: values.phone,
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    toast.success("!التسجيل ناجح");
    resetForm();
    navigate("/login");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-blue-900 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative overflow-hidden text-right">
        <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-90 backdrop-blur-sm z-0 rounded-lg"></div>
        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🚙</div>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-600 mb-2">
              إنشاء حساب جديد
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-200">
              سجل الآن واحصل على أقوى العروض
            </p>
          </div>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              phone: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-1 font-semibold"
                  >
                    الاسم الكامل
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    autoComplete="name"
                    className="w-full border rounded px-4 py-2 text-right"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    البريد الإلكتروني
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    className="w-full border rounded px-4 py-2 text-right"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 font-semibold">
                    رقم الهاتف
                  </label>
                  <Field
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+20 10 5555 1234"
                    autoComplete="tel"
                    className="w-full border rounded px-4 py-2 text-right"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 font-semibold"
                  >
                    كلمة المرور
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="w-full border rounded px-4 py-2 text-right"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-1 font-semibold"
                  >
                    تأكيد كلمة المرور
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="w-full border rounded px-4 py-2 text-right"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
                >
                  إنشاء الحساب
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-6 text-sm text-center">
            لديك حساب بالفعل؟{" "}
            <a
              href="/login"
              className="text-blue-700 dark:text-blue-600 font-semibold hover:underline"
            >
              تسجيل الدخول
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
