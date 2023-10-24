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
        "https://images7.alphacoders.com/101/1010911.jpg"
        ,
        "https://wallpaperaccess.com/full/4136520.jpg"
        ,
    ]

    return (
        <div className="w-full m-auto relative">
            <Swiper
                modules={[Navigation]}
                navigation
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide}>
                        <img src={slide} alt={slide} style={{ height: "500px", width: "100%", objectFit: "cover" }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}