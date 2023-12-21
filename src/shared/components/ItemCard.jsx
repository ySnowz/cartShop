import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

export const ItemCard = ({ id, name, price, imgURL }) => {
    const {getItemQuantity, increaseCount, decreaseCount, removeFromCart} = useShoppingCart()
    
    const quantity = getItemQuantity(id)
    
    return (

        <div className="flex flex-col items-start p-2 bg-gray-100 rounded drop-shadow-sm">
            <img src={imgURL} alt="book" className="rounded" />
            <div className="w-full flex flex-row justify-between items-center mt-1 px-1">
                <h1 className="text-lg font-medium text-gray-700">{name}</h1>
                <p className="text-sm font-normal text-blue-500">{formatCurrency(price)}</p>
            </div>
            <div className="w-full flex items-center justify-between px-1 mt-2">
                <h2 className="text-sm font-medium tracking-wider">Quantity: </h2>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={() => decreaseCount(id)} className="bg-blue-500 text-white w-8 h-8 rounded ease-linear duration-100 active:scale-90 hover:bg-blue-600">-</button>
                    <p className="font-medium">{quantity || 0}</p>
                    <button onClick={() => increaseCount(id)} className="bg-blue-500 text-white w-8 h-8 rounded ease-linear duration-100 active:scale-90 hover:bg-blue-600">+</button>
                </div>
            </div>
            {quantity > 0 &&
                <button className="w-full mt-2 py-2 bg-red-500 uppercase font-bold text-white rounded duration-100 ease-linear
                hover:bg-red-600 active:scale-90" onClick={() => removeFromCart(id)}>Remove</button>
            }
            <button className="w-full mt-2 py-2 bg-blue-500 uppercase font-bold text-white rounded duration-100 ease-linear
             hover:bg-blue-600 active:scale-90" onClick={() => increaseCount(id)}>Add to cart</button>
        </div>
    )
}