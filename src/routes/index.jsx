import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Store } from '../pages/store'
import { AboutUs } from '../pages/about'
import { NotFound } from '../pages/notFound'
import { Navbar } from '../shared/components/Navbar'
import { ShoppingProvider } from '../shared/context/ShoppingCartContext'

export const AppRoutes = () => {
    return (
        <>
            <ShoppingProvider>
                <Navbar />
                <Routes>
                    <Route path="/cartShop" element={<Home />} />
                    <Route path="/cartShop/store" element={<Store />} />
                    <Route path="/carttShop/about" element={<AboutUs />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </ShoppingProvider>
        </>
    )
}