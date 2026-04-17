import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        {/* logo */}
        <div>
          <h2 className="text-xl font-bold">KeenKeeper</h2>
          <p className="mt-2 text-sm text-gray-200 max-w-xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social icons */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Social Links</h3>

          <div className="flex justify-center gap-4 text-2xl">
            <a className="hover:text-gray-300 transition">
              <FaTwitter />
            </a>

            <a className="hover:text-gray-300 transition">
              <FaLinkedin />
            </a>

            <a className="hover:text-gray-300 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="divider my-6"></div>

        {/* bottom */}
        <div className="flex flex-col items-center gap-3 text-sm">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <Link className="link link-hover text-white">Privacy Policy</Link>
            <Link className="link link-hover text-white">Terms of Service</Link>
            <Link className="link link-hover text-white">Cookies</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;