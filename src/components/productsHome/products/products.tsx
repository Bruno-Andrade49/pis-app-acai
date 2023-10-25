import { produtosDeAcai } from '@/data/produtosAcai';
import { ImPriceTags } from "react-icons/im";
import { CgGlassAlt } from "react-icons/cg"

import React from 'react';

const Products = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-8">
            {produtosDeAcai.slice(0, 3).map((produto) => (
                <div key={produto.id} className="p-4 transform transition-transform duration-300 hover:scale-110">
                    <div className="bg-violet-100 rounded-[50px] flex flex-col h-full">
                        <div className="w-full h-[300px]">
                            <img
                                src={produto.imagem}
                                alt="Imagem do produto"
                                className="w-full h-full object-cover rounded-[50px]"
                            />
                        </div>
                        <div className="flex flex-col text-center justify-between p-4">
                            <div className="text-xl font-bold text-violet-950 hover:text-violet-600">{produto.nome}</div>
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <CgGlassAlt className="relative top-[0.30rem] text-violet-800 mr-2" />
                                    {produto.tamanho}
                                </div>
                                <div className="flex justify-center">
                                    <ImPriceTags className="relative top-[0.30rem] text-violet-800 mr-2" />
                                    R${produto.preco.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Products;
