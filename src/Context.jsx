import { React, createContext, useState, useEffect } from 'react'

const Context = createContext()


function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    function addToCart(img) {
        setCartItems(prev => [...prev, img])
    }
    function removeFromCart(id) {
        setCartItems(prev => {
            return prev.filter((photo) => {
                return photo.id !== id
            })
        })
    }
    function emptyCart() {
        setCartItems([])
    }
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArray = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(updatedArray)
    }

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart }}>
            {children}
        </Context.Provider>
    )
}
export { Context, ContextProvider }