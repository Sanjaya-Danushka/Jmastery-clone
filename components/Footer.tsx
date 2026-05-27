// components/Footer.jsx
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-black-200 bg-black-100 px-20 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-y-10 md:flex-row">
        {/* Brand Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="mb-2 text-lg font-semibold text-white">
            JS Mastery Pro
          </h3>
          <p className="text-sm text-gray-400">
            Copyright &copy; {new Date().getFullYear()} JS Mastery Pro | All
            rights reserved.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link
            href="/terms-of-use"
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            Terms of Conditions
          </Link>

          <Link
            href="/privacy-policy"
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/about"
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icons - Optional */}
        <div className="flex items-center gap-x-4">
          {/* You can add social media icons here if needed */}
        </div>
      </div>

      {/* Divider for copyright */}
      <div className="mt-8 border-t border-black-200"></div>
    </footer>
  )
}

export default Footer
