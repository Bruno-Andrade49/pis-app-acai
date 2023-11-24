'use client'

// pages/produtos/[slug].tsx
import { produtosDeAcai } from '@/data/produtosAcai';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProdutoPage = ({ params }: any) => {

    const slugAsNumber = parseInt(params.slug, 10);
    const produtoEncontrado = produtosDeAcai.find((produto) => produto.id === slugAsNumber);

    return (
        <div>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    slidesPerView={4}
                >
                    {produtoEncontrado?.imagem.map(slide => (
                        <SwiperSlide key={produtoEncontrado.id}>
                            <img src={slide} alt={slide} style={{ height: "400px", width: "100%", objectFit: "cover" }} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            <h1>{produtoEncontrado?.nome}</h1>
            <h1>{produtoEncontrado?.descricao}</h1>
            <h1>{produtoEncontrado?.imagem}</h1>
            <h1>{produtoEncontrado?.tamanho}</h1>

        </div>
    );
};

export default ProdutoPage;
