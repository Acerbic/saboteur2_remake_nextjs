/**
 * Component for displaying of a "burger" menu - a button and
 * a popup with links.
 * 
 * @property [string] active_path - id of the highlighted link
 */
import { bubble as Menu } from 'react-burger-menu'
import MenuItems from './MenuItems'
import MenuLink from './MenuLink'
import './MenuBurger.css' /* need actual css file for @media */

export default ({active_path}) =>
    <Menu 
        right
        customCrossIcon={ false }
        bodyClassName={ "bm-open" }
        width={ '' }
    >
        {
            MenuItems.map(item => (
                <div key={item.src}>
                    <MenuLink
                        active={item.src === active_path}
                        href={item.src}>

                        {item.name}
                    </MenuLink>
                </div>
            ))
        }
    </Menu>
