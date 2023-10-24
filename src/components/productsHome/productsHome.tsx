import React from 'react'
import Products from './products/products';

const ProductsHome = () => {
    return (
        <>
            <div className="max-w-7xl py-12 px-12 m-auto">

                <div className="flex justify-between w-full ">

                    <div className="text-5xl font-bold opacity-80 text-violet-950">
                        Produtos
                    </div>

                    <div>
                        <button className="bg-violet-800 text-slate-200 px-5 py-2 rounded-full shadow-2xl hover:opacity-80">
                            Ver tudo
                        </button>
                    </div>

                </div>

                <Products />
            </div>
        </>
    )
}

export default ProductsHome;