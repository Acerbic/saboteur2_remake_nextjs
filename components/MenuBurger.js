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

const styles = {
    bmCrossButton: {
        height: '3em',
        width: '3em'
    },
    bmCross: {
        background: '#555',
        height: '3em',
        width: '0.3em',
        right: '8px',
        top: '-4px'
    }
}

export default ({active_path}) =>
    <Menu 
        right
        // customCrossIcon={ false }
        bodyClassName={ "bm-open" }
        width={ '' }
        styles={ styles }
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
