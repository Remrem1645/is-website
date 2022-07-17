import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import data from './Data'
import desginerStyleDescription from './DesginerStyleDescription'
import './MenuApp.css'

const allCategories = ["all", ...new Set(data.map((data) => data.category))];

function MenuApp() {
    const [menuItems, setMenuItems] = useState(data);
    const [activeCategory, setActiveCategory] = useState("all");
    // eslint-disable-next-line
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setMenuItems(data);
            return;
        }
        const newItems = data.filter((data) => data.category === category);
        setMenuItems(newItems);
    };

    return (
        <main className='menu'>
            <section className='menu-section'>
                <Categories
                    className='menu-category'
                    categories={categories}
                    activeCategory={activeCategory}
                    filterItems={filterItems}
                />
                <div className='menu-category-items'>
                    <h3 className={`${(activeCategory === 'Full Set' || activeCategory === 'all') ? 'menu-item-active' : 'menu-item-inactive'}`}>
                        Full Set
                    </h3>
                    <Menu items={menuItems.filter((data) => data.category === 'Full Set')} />
                </div>
                <div className='menu-category-items'>
                    <h3 className={`${(activeCategory === 'Designer Style' || activeCategory === 'all') ? 'menu-item-active' : 'menu-item-inactive'}`}>
                        Designer Style
                    </h3>
                    <p className={`${(activeCategory === 'Designer Style' || activeCategory === 'all') ? 'menu-item-active-paragraph' : 'menu-item-inactive'}`}>
                        {desginerStyleDescription[0]}
                    </p>
                    <p className={`${(activeCategory === 'Designer Style' || activeCategory === 'all') ? 'menu-item-active-paragraph' : 'menu-item-inactive'}`}>
                        {desginerStyleDescription[1]}
                    </p>
                    <Menu items={menuItems.filter((data) => data.category === 'Designer Style')} />
                </div>
                <div className='menu-category-items'>
                    <h3 className={`${(activeCategory === 'Waxing' || activeCategory === 'all') ? 'menu-item-active' : 'menu-item-inactive'}`}>
                        Waxing
                    </h3>
                    <Menu items={menuItems.filter((data) => data.category === 'Waxing')} />
                </div>
                <div className='menu-category-items'>
                    <h3 className={`${(activeCategory === 'Refill' || activeCategory === 'all') ? 'menu-item-active' : 'menu-item-inactive'}`}>
                        Refill
                    </h3>
                    <Menu items={menuItems.filter((data) => data.category === 'Refill')} />
                </div>
                <div className='menu-category-items'>
                    <h3 className={`${(activeCategory === 'Refill By Weeks' || activeCategory === 'all') ? 'menu-item-active' : 'menu-item-inactive'}`}>
                        Refill By Weeks
                    </h3>
                    <Menu items={menuItems.filter((data) => data.category === 'Refill By Weeks')} />
                </div>
            </section>
        </main>
    )
}

export default MenuApp