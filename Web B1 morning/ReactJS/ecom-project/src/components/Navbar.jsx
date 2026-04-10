export const Navbar = () => {
    return (
        <nav className="fixed top-4 right-4 z-50 flex items-center gap-3">
            <button
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shadow-lg backdrop-blur-md ${currentPage === 'login' ? 'bg-white text-indigo-900 border-indigo-200 border' : 'bg-black/20 text-white hover:bg-black/40'}`}
            >
                Login
            </button>
            <button
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shadow-lg backdrop-blur-md ${currentPage === 'products' ? 'bg-indigo-600 text-white' : 'bg-black/20 text-white hover:bg-black/40'}`}
            >
                Shop
            </button>
            <button
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all shadow-lg backdrop-blur-md ${currentPage === 'cart' ? 'bg-pink-600 text-white' : 'bg-black/20 text-white hover:bg-black/40'}`}
            >
                Cart
                {/* {cartCount > 0 && ( */}
                <span className="absolute -top-1 -right-1 bg-white text-pink-600 text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-pink-600 animate-bounce">
                    {/* {cartCount} */}0
                </span>
                {/* )} */}
            </button>
        </nav>
    )
}