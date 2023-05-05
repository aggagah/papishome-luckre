import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.png";
function Navbar() {
    return (
        <nav className="h-18 lg:h-auto bg-navbarBg w-full px-7 py-5 flex justify-center lg:justify-between absolute top-0">
            <div className="flex gap-5 items-center justify-center m-auto">
                <a href="/">
                    <img src={logo} className="w-40 lg:w-60" />
                </a>
                <ul className=" hidden gap-2 text-navbarTitle text-lg">
                    <li>Semua Produk</li>
                    <li>Kategori</li>
                </ul>
            </div>
            <div className="hidden gap-5 items-center">
                <ul className="flex gap-2 text-navbarTitle text-lg">
                    <li>Tentang Kami</li>
                    <li>Kontak Kami</li>
                </ul>
                <div className="flex gap-5">
                    <AiOutlineSearch
                        className="text-navbarIcon"
                        size={"1.5em"}
                    />
                    <CgProfile className="text-navbarIcon" size={"1.5em"} />
                    <AiOutlineShoppingCart
                        className="text-navbarIcon"
                        size={"1.5em"}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
