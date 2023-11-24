'use client'

import Image from "next/image"
import logo from "../../assets/img/logo_2a0f2d4a-5522-4102-a053-40ff3821c224-removebg-preview.png"
import { SearchButton } from "../searchButton/searchButton"
import { AiOutlineMenu } from "react-icons/ai"
import { useContext } from "react";
import SidebarContext from "@/context/sidebarContext";
import Link from "next/link"

// eslint-disable-next-line react/display-name
export const Navbar = () => {

    const { toggleSidebar } = useContext(SidebarContext);

    const handleClickHome = () => {

    }

    return (
        <>
            <div className="w-full bg-slate-300 py-4 h-auto flex flex-col sm:flex-row">
                <div className="flex m-auto w-5/6 justify-between items-center">

                    <Link href="/">
                        <Image
                            src={logo}
                            width={150}
                            height={60} // Ajuste a altura conforme necessário
                            alt="Picture of the author"
                        />
                    </Link>

                    <section className="hidden lg:block items-center font-custom font-medium text-sm">
                        <ul className="flex space-x-4 text-violet-800">
                            <li>
                                <a href="/home" className="hover:text-violet-500 transition-all">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/produtos" className="hover:text-violet-500 transition-colors">
                                    Produtos
                                </a>
                            </li>
                            <li>
                                <a href="/contatos" className="hover:text-violet-500 transition-colors">
                                    Contatos
                                </a>
                            </li>
                            <li>
                                <a href="/fale-conosco" className="hover:text-violet-500 transition-colors">
                                    Fale Conosco
                                </a>
                            </li>
                        </ul>
                    </section>

                    <div className="flex items-center mt-4 sm:mt-0">
                        <SearchButton />
                    </div>

                    <div className="text-2xl text-violet-800 lg:hidden cursor-pointer" onClick={toggleSidebar}>
                        <AiOutlineMenu />
                    </div>

                </div>
            </div>

        </>
    )
}