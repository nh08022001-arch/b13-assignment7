import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Top section */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Brand text */}
                    <div>
                        <h2 className="text-xl font-bold">KeenKeeper</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>

                    {/* Social links */}
                    <div>
                        <h3 className="font-semibold mb-2">Social Links</h3>
                        <div className="flex gap-4 text-sm">
                            <a className="link link-hover">Twitter</a>
                            <a className="link link-hover">LinkedIn</a>
                            <a className="link link-hover">GitHub</a>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="divider my-6"></div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-4">
                        <Link className="link link-hover">Privacy Policy</Link>
                        <Link className="link link-hover">Terms of Service</Link>
                        <Link className="link link-hover">Cookies</Link>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;