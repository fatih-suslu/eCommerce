import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ bgColor }) {
  return (
    <footer>
      {/*ikonlar*/}
      <div
        className={`${
          bgColor ? "bg-white" : "bg-gray-100"
        } flex flex-col px-6 py-8 md:flex-row md:justify-between md:items-center md:px-24 gap-6`}
      >
        <h1 className="text-2xl font-bold md:text-4xl ">Bandage</h1>
        <div className="flex gap-3 ">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 md:w-8 md:h-8 p-0.5 text-white fill-white bg-blue-500 border border-blue-500 rounded-full " />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 md:w-8 md:h-8 text-blue-500 " />
          </Link>

          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 md:w-8 md:h-8 text-blue-500 fill-blue-500" />
          </Link>
        </div>
      </div>
      <section className="flex flex-col gap-8 px-6 py-8 md:px-24 md:flex-row">
        {/* Company Info */}
        <div className="flex flex-col gap-4 flex-1 font-semibold">
          <h2 className="text-lg font-bold">Company Info</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-gray-600 hover:text-blue-500">
                Career
              </Link>
            </li>
            <li>
              <Link to="/hiring" className="text-gray-600 hover:text-blue-500">
                We are hiring
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-blue-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4 flex-1 font-semibold">
          <h2 className="text-lg font-bold">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="text-gray-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-gray-600 hover:text-blue-500">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-gray-600 hover:text-blue-500">
                Cookies
              </Link>
            </li>
            <li>
              <Link
                to="/accessibility"
                className="text-gray-600 hover:text-blue-500"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4 flex-1 font-semibold">
          <h2 className="text-lg font-bold">Features</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/features/marketing"
                className="text-gray-600 hover:text-blue-500"
              >
                Business Marketing
              </Link>
            </li>
            <li>
              <Link
                to="/features/analytics"
                className="text-gray-600 hover:text-blue-500"
              >
                User Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/features/chat"
                className="text-gray-600 hover:text-blue-500"
              >
                Live Chat
              </Link>
            </li>
            <li>
              <Link
                to="/features/support"
                className="text-gray-600 hover:text-blue-500"
              >
                Unlimited Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-4 flex-1 font-semibold">
          <h2 className="text-lg font-bold">Resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/resources/mobile"
                className="text-gray-600 hover:text-blue-500"
              >
                iOS & Android
              </Link>
            </li>
            <li>
              <Link
                to="/resources/demo"
                className="text-gray-600 hover:text-blue-500"
              >
                Watch a Demo
              </Link>
            </li>
            <li>
              <Link
                to="/resources/customers"
                className="text-gray-600 hover:text-blue-500"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                to="/resources/api"
                className="text-gray-600 hover:text-blue-500"
              >
                API
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col mb-4 flex-1 ">
          <h2 className="text-lg font-bold">Get In Touch</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
            <p className="text-gray-400">Lore imp sum dolor Amit</p>
          </form>
        </div>
      </section>
      <div className="w-full bg-gray-50 text-center py-12 md:px-24">
        <p className="text-lg md:text-left text-gray-500 font-bold">
          Made With Love By <br className="md:hidden " /> Finland All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
