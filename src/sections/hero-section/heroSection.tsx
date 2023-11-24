import { Navbar } from "@/components/navbar/Navbar"
import ProductsHome from "@/components/productsHome/productsHome"
import { Sidebar } from "@/components/sidebar/sidebar"
import { Slide } from "@/components/slide/slides"

export const HeroSection = () => {
    return (
        <>
            <Sidebar />
            <Slide />
            <ProductsHome />
        </>
    )
}