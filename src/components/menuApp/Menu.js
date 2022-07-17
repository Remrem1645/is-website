import React from "react"
import './Menu.css'

const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((item) => {
                const {id, title, price} = item;

                return (
                    <div key={id} className="menu-item">
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;