export const SearchButton = () => {
    return (
        <>
            <div className="max-[1024px]:hidden">
                <form className="w-auto bg-slate-100 rounded-full focus:border-green-700 transition-colors">
                    <label htmlFor="default-search" className="mb-2 pl-3 text-sm font-medium text-gray-900 sr-only"></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-violet-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input className="w-full p-4 pl-10 mr-24 sm:pr-24 text-sm rounded-full bg-gray-50 focus:ring-blue-500 focus:outline-none active:border-white text-green-600 font-custom" placeholder="Pesquise por nossos produtos..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm px-4 py-2 font-custom min-w-20">Pesquisar</button>
                    </div>
                </form>
            </div>
        </>

    )
}