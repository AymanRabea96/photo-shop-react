import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'
import useHover from '../hooks/useHover'

const Image = ({ className, img }) => {
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover(false)

    function heartIcon() {
        if (hovered && !img.isFavorite) {
            return < i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        } else if (img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div
            className={`image-container ${className}`}
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            ref={ref}

        >
            <img src={img.url} className='image-grid' />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}
Image.prototypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image