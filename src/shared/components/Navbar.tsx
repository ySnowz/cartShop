import { useShoppingCart } from "../context/ShoppingCartContext"

export const Navbar = () => {

    const {openCart, cartQuantity} = useShoppingCart()

    return (
        <>
            <header className="w-full h-min flex justify-between items-center px-2 py-4 bg-gray-50 drop-shadow-sm">
                <nav className="w-full flex flex-row justify-start items-start">
                    <ul className="flex flex-row justify-start items-start gap-2">
                        <li className="text-2xl text-gray-900"><a href="/">Home</a></li>
                        <li className="text-2xl "><a href="/store">Store</a></li>
                        <li className="text-2xl "><a href="/about">About</a></li>
                    </ul>
                </nav>
                <button onClick={openCart} className="relative py-2 px-4 bg-transparent border-2 border-blue-500 rounded
                 text-blue-500 uppercase font-bold tracking-wider ease-linear duration-100 hover:bg-blue-500 hover:text-white">Cart
                    <div className="absolute left-[-10px] flex items-center justify-center w-6 h-6 rounded bg-red-600">
                        <p className="text-medium text-white text-sm">{cartQuantity === undefined ? 0 : cartQuantity}</p>
                    </div>
                </button>
            </header>
        </>
    )
}