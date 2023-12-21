import { createContext, ReactNode, useContext, useState } from "react"
import { Cart } from "../components/Cart"
import { useLocalStorage } from "../hooks/useLocalStorage"


const ShoppingCartContext = createContext({})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    const increaseCount = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCount = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity == 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCount,
            decreaseCount,
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
        }}>
            {children}
            <Cart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}