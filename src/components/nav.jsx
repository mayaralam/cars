import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function nav() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
    <div className="sticky top-0 bg-white shadow z-50">
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start md:pl-20 pl-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-black text-white dark:bg-white dark:text-black"
            >
              <li>
                <Link to="../contact">تواصل معنا</Link>
              </li>
              <li>
                <Link to="../about"> من نحن</Link>
              </li>
              <li>
                <Link to="../shop">قطع الغيار و الإكسسوارات</Link>
              </li>
              <li>
                <Link to="/"> الرئيسية</Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="relative">
              <Link to="../cart">
                <AiOutlineShoppingCart className="size-6" />
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <Link to="../contact">تواصل معنا</Link>
            </li>
            <li>
              <Link to="../about"> من نحن</Link>
            </li>
            <li>
              <Link to="../shop">قطع الغيار و الإكسسوارات</Link>
            </li>
            <li>
              <Link to="/"> الرئيسية</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:pr-20 pl-0 ">
          <div className=" flex items-center">
            <div className="flex flex-col items-center">
              <a className="btn btn-ghost text-lg">قطع غيار السيارات </a>
              <p className="text-xs">جودة عالية وأسعار منافسة</p>
            </div>
            <div className="shadow-md">
              <svg
              className="text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M11 11L6 6" />
                  <path
                    stroke-linejoin="round"
                    d="M5 7.5L7.5 5l-3-1.5l-1 1zm14.975 1.475a3.5 3.5 0 0 0 .79-3.74l-1.422 1.422h-2v-2l1.422-1.422a3.5 3.5 0 0 0-4.529 4.53l-6.47 6.471a3.5 3.5 0 0 0-4.53 4.529l1.421-1.422h2v2l-1.422 1.422a3.5 3.5 0 0 0 4.53-4.528l6.472-6.472a3.5 3.5 0 0 0 3.738-.79Z"
                  />
                  <path
                    stroke-linejoin="round"
                    d="m11.797 14.5l5.604 5.604a1.35 1.35 0 0 0 1.911 0l.792-.792a1.35 1.35 0 0 0 0-1.911L14.5 11.797"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
