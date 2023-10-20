'use client'

import SidebarContext from "@/context/sidebarContext";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"


export const Sidebar = () => {

    const { isOpen, toggleSidebar } = useContext(SidebarContext);

    return (
        <div className="lg:hidden block">
            <nav
                id="sidenav"
                className={`fixed right-0 top-0 z-[1035] h-screen w-64 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]`}
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-mode="side"
                data-te-sidenav-content="#content"
            >
                <div className="py-8 px-6">
                    <div className="flex justify-between text-violet-800">
                        <h4 className="font-bold">MAPA DO SITE</h4>
                        <div onClick={toggleSidebar} className="cursor-pointer">
                            {/* Certifique-se de importar corretamente o ícone, por exemplo, <AiOutlineClose /> */}
                            <AiOutlineClose />
                        </div>
                    </div>

                    <ul className="mt-8 space-y-8 font-light text-sm">
                        <li>HOME</li>
                        <li>PRODUTOS</li>
                        <li>CONTATOS</li>
                        <li>FALE CONOSCO</li>
                    </ul>

                    <div className="mt-8 justify-between text-violet-800">
                        <h4 className="font-bold">CONTATO</h4>
                        <div className="mt-4 flex space-x-4 text-violet-800 transition-colors text-lg">
                            <div className="hover:text-violet-500">
                                {/* Certifique-se de importar corretamente o ícone, por exemplo, <BsInstagram /> */}
                                <BsInstagram />
                            </div>
                            <div className="hover:text-violet-500">
                                {/* Certifique-se de importar corretamente o ícone, por exemplo, <BsWhatsapp /> */}
                                <BsWhatsapp />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};