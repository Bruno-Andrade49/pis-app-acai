import Galery from '@/components/galery/galery';
import PMSections from '@/components/pm-sections/pmSections';
import TitleSection from '@/components/titleSection/titleSection';
import React from 'react'

const GalerySection = () => {
    return (
        <>
            <PMSections>

                <TitleSection title='Galeria' />
                <Galery />

            </PMSections>
        </>

    )
}

export default GalerySection;
