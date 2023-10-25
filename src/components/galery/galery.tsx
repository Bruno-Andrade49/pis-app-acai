'use client'

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import ImageViewer from 'react-simple-image-viewer';



const Galery = () => {

    return (
        <div>
            <Gallery photos={photos} />                
        </div>
    )
}

export default Galery;
