import Galery from '@/components/galery/galery';
import TitleSection from '@/components/titleSection/titleSection';
import React from 'react'

const GalerySection = () => {
    return (
        <>
            <div className="max-w-7xl py-12 px-12 m-auto">

                <TitleSection title='Galeria' />
                <Galery />

            </div>
        </>

    )
}

export default GalerySection;
