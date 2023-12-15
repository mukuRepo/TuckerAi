import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-white bg-gray-800 ">
      <div className="container flex justify-between mx-auto">
        <div className="w-1/4">
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <p className="text-sm">
            Your ML & AI Services<br />
            123 Tech Street, City<br />
            Email: info@example.com<br />
            Phone: +123 456 7890
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm">
            <li>
              <Link href="/about" className="transition duration-300 hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <a href="/services" className="transition duration-300 hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <Link href="/contact" className="transition duration-300 hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="mb-4 text-lg font-semibold">Policies</h3>
          <ul className="text-sm">
            <li>
              <Link href="/policy/support" className="transition duration-300 hover:text-gray-300">
              Support
              </Link>
            </li>
            <li>
              <a href="/policy/PrivacyPolicy" className="transition duration-300 hover:text-gray-300">
              Privacy Policy
              </a>
            </li>
            <li>
              <Link href="/policy/Cancellation&RefundPolicy" className="transition duration-300 hover:text-gray-300">
              Cancellation & Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/policy/TermsofService" className="transition duration-300 hover:text-gray-300">
              Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-1/4 md:block">
          <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
          <p className="text-sm">
            Subscribe to our newsletter for the latest updates.
          </p>
          {/* Add a newsletter form or other call-to-action here if needed */}
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-sm">
          &copy; 2023 Your ML & AI Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
