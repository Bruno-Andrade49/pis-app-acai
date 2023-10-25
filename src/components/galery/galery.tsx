'use client'

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";


const Galery = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event: any, { photo, index }: any) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <style>
                {`
                .gallery-item {
                  position: relative;
                  transition: transform 0.2s;
                }

                .gallery-item:hover {
                  transform: scale(1.05);
                }

                .gallery-item img {
                  width: 100%;
                  height: auto;
                  display: block;
                }

                .gallery-item::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.5);
                  opacity: 0;
                  transition: opacity 0.2s;
                }

                .gallery-item:hover::before {
                  opacity: 1;
                }
              `}
            </style>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x) => ({
                                ...x,
                                srcset: x.src,
                                width: x.width,
                                height: x.height
                            }))}
                            styles={{
                                view: (base) => ({
                                    ...base,
                                    margin: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    width: "100vh",
                                })
                            }}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>

        </div>
    )
}

export default Galery;
