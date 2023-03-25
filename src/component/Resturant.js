import React, { useState } from 'react'
import "./Basics/style.css"
import Menu from './Basics/menuApi'
import MenuCard from './Basics/MenuCard';
import Navbar from './Navbar';


const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})
),
"All"
]

console.log(uniqueList)

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    // console.log(menuData)

    const filterItem = (category) => {

        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedlist = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedlist);

    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />

            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant