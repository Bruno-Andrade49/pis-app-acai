'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import "./slides.css"


export const Slide = () => {

    let slides = [
        {
            url: "https://images7.alphacoders.com/101/1010911.jpg",
            nome: "Sabor"

        }
        ,
        {
            url: "https://wallpaperaccess.com/full/4136520.jpg",
            nome: "Qualidade"
        }
        ,
    ]

    return (
        <div className="w-full m-auto relative">
            <Swiper
                modules={[Navigation]}
                navigation
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.url}>
                        <h1 className="absolute left-[5%] top-[70%] text-6xl font-extrabold text-violet-50">{slide.nome}</h1>
                        <img src={slide.url} alt={slide.nome} style={{ height: "500px", width: "100%", objectFit: "cover" }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}