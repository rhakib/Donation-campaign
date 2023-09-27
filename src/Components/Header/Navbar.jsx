/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <nav>
            <div className="navbar bg-base-100 px-4 md:px-16 lg:pl-2 py-5">
                <div className="navbar-start flex items-center justify-between">
                    <img className='w-28 md:w-44' src="/Logo.png" alt="" />
                    <div className="dropdown">
                        <div className='flex justify-end' onClick={() => setOpen(!open)}>
                            
                            {
                                open? <AiOutlineClose className='text-2xl md:hidden'></AiOutlineClose> : <CiMenuFries className='text-2xl md:hidden'> </CiMenuFries>
                            }
                        </div>
                        <ul tabIndex={0} className="menu hidden md:flex  dropdown-content mt-3 z-[1] p-2 w-52  items-center font-semibold gap-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="allDonatedItems"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="statictics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="navbar-center md:hidden ">
                    <ul className={`menu menu-horizonta duration-500 flex gap-3 absolute
                    ${open ? 'top-12' : '-top-20'}
                    left-[130px] p-2 rounded-md bg-gray-200 z-10 font-semibold md:mr-24`}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="allDonatedItems"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="statictics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};
export default Navbar;