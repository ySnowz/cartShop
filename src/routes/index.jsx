import { Routes, Route } from 'react-router-dom'
import { Store } from '../pages/store'
import { NotFound } from '../pages/notFound'
import { Navbar } from '../shared/components/Navbar'
import { ShoppingProvider } from '../shared/context/ShoppingCartContext'

export const AppRoutes = () => {
    return (
        <>
            <ShoppingProvider>
                <Navbar />
                <Routes>
                    <Route path="/cartShop" element={<Store />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </ShoppingProvider>
        </>
    )
}