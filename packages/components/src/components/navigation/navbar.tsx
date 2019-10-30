import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuBar, MenuItem } from '../menu'

export default function Navbar () {
    const menuBarItems = [
        {
            name:'HOME',
            route:''
        },
        {
            name:'BLOG',
            route:'blog'
        },
        {
            name:'SHOP',
            route:'shop'
        },
        {
            name:'AVAILABILITY',
            route:'availabilty'
        }
    ]
  return (
    <MenuBar>
    {
        menuBarItems.map(item => {
            return <MenuItem label={item.name}> 
            <NavLink activeStyle={{fontWeight: 'bold'}} to={`/${item.route}`}>
            {item.name}
          </NavLink>
            </MenuItem>
        })
    }
    </MenuBar>
  )
}
