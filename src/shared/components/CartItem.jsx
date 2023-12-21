import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

export const CartItem = ({ id, quantity }) => {
    const { removeFromCart } = useShoppingCart()

    const item = storeItems.find(i => i.id === id)
    if (item == null) return null


    return (
        <div className="flex flex-row justify-start items-start gap-2">
            <img src={item.imgURL} alt={item.name} width={100} height={100} />
            <div className="flex flex-col justify-start items-start gap-1">
                <h1 className="text-xl font-bold capitalize text-gray-800">{item.name}</h1>
                <h2 className="text-lg font-medium text-gray-800">Quantity: {quantity}</h2>
                <p className="text-lg text-gray-800">${item.price * quantity}</p>
                <button className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded uppercase text-white font-bold" onClick={() => removeFromCart(id)}>Remove</button>
            </div>
        </div>
    )
}