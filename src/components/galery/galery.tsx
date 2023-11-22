'use client'

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const Gallery = ({ photos }: { photos: Array<{ src: string }> }) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index: any) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const prevSlide = () => {
        if (slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
        } else {
            setSlideNumber(photos.length - 1)
        }
    }

    const nextSlide = () => {
        if (slideNumber < photos.length - 1) {
            setSlideNumber(slideNumber + 1)
        } else {
            setSlideNumber(1)
        }
    }

    return (
        <>
            {openModal && (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-slate-950 bg-opacity-80 flex flex-col items-center justify-center w-full h-full">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="absolute top-5 right-5 cursor-pointer opacity-60 text-slate-100 z-[9999] hover:opacity-100"
                        onClick={handleCloseModal}
                    />

                    <div className="relative w-full h-full flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faCircleChevronLeft}
                            className="absolute left-5 bottom-1/2 transform -translate-y-1/2 cursor-pointer opacity-60 text-slate-100 z-[9999] hover:opacity-100"
                            onClick={prevSlide}
                        />

                        <FontAwesomeIcon
                            icon={faCircleChevronRight}
                            className="absolute right-5 bottom-1/2 transform -translate-y-1/2 cursor-pointer opacity-60 text-slate-100 z-[9999] hover:opacity-100"
                            onClick={nextSlide}
                        />

                        <img src={photos[slideNumber].src} alt="" className="max-w-full max-h-full pointer-events-none select-none" />
                    </div>
                </div>
            )}

            <div className="flex flex-wrap gap-3 justify-center max-w-[1500px] m-auto">
                {
                    photos && photos.map((slide, index) => {
                        return (
                            <div className="w-52 cursor-pointer" key={index}
                                onClick={() => handleOpenModal(index)}>
                                <img src={slide.src} alt="" className="hover:scale-125 max-w-full transition-all object-fill" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Gallery;

