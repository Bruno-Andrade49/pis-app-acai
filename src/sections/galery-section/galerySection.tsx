import Galery from '@/components/galery/galery';
import { photos } from '@/components/galery/photos';
import PMSections from '@/components/pm-sections/pmSections';
import TitleSection from '@/components/titleSection/titleSection';
import React from 'react'

const GalerySection = () => {
    return (
        <>
            <PMSections>

                <TitleSection title='Galeria' />

            </PMSections>
            <Galery photos={photos} />
        </>

    )
}

export default GalerySection;
