import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency";

export const Cart = ({ isOpen }) => {
    const cartClasses = isOpen === true
        ? 'fixed inset-y-0 right-0 w-1/2 bg-white shadow-lg transform translate-x-0 ease-out transition-transform duration-300'
        : 'fixed inset-y-0 right-0 w-1/2 bg-white shadow-lg transform translate-x-full ease-in transition-transform duration-300';


    const { closeCart, cartItems } = useShoppingCart()

    return (
        <div className={cartClasses}>
            <div className="p-4 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                <div className="w-full h-[450px] flex flex-col gap-2 items-start justify-start py-4 overflow-y-scroll">
                    {cartItems.map(item => (<CartItem key={item.id} {...item} />))}
                </div>

                <h2 className="mt-2 font-bold text-2xl">Total Price: {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                )}
                </h2>
            </div>
            <button
                onClick={closeCart}
                className="absolute text-2xl bg-blue-500 py-1 px-3 rounded text-white top-2 right-2 hover:bg-blue-600 focus:outline-none"
            >
                X
            </button>
        </div>
    );
};