import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4">
            
            {/* Logo */}
            <div className="flex-1">
                <a className="text-xl font-bold">
                    KeenKeeper
                </a>
            </div>

            {/* Links */}
            <div className="flex gap-2">
                
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/timeline"
                    className={({ isActive }) =>
                        isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Timeline
                </NavLink>

                <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                        isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Stats
                </NavLink>

            </div>
        </div>
    );
};

export default Navbar;