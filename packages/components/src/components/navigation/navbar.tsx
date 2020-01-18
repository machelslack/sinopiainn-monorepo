import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuBar, MenuItem } from '../menu'

export default function Navbar () {
    const menuBarItems = [
        {
            name:'HOME',
            route:'/'
        },
        {
            name:'THINGS TO DO',
            route:'things-to-do'
        },
        // {
        //     name:'BLOG',
        //     route:'blog'
        // },
        // {
        //     name:'SHOP',
        //     route:'shop'
        // },
        {
            name:'RESERVE',
            route:'reserve'
        }
    ]
  return (
    <MenuBar>
    {
        menuBarItems.map(item => {
            return <MenuItem label={item.name} href={item.route}> 
            </MenuItem>
        })
    }
    </MenuBar>
  )
}
