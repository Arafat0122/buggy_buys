import { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`navbar fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-white bg-opacity-70 shadow-md text-black' : 'bg-blue-600 bg-opacity-0 text-white'
                }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars className="h-5 w-5" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link className='flex items-center gap-3' to={'/'}>
                    <img className="w-10 md:w-14" src="/buggy_buys_logo.png" alt="" />
                    <h4 className='text-2xl font-greatVibes font-bold hidden md:flex'>Buggy Buys</h4>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center">
                <div className="relative hidden lg:block">
                    <div className="relative hidden lg:block text-white">
                        <FaSearch className="absolute left-3 top-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered pl-10 pr-3 bg-gray-50 text-white"
                        />
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaShoppingCart className="h-5 w-5" />
                            <span className="badge badge-sm bg-blue-600 text-white indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                    >
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <FaUserCircle className="h-10 w-10" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;