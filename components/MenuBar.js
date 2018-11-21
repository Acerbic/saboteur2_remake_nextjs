/**
 * Component to display a "flat" menu - just an
 * arrangement of links.
 * 
 * @property [string] active_path - id of the highlighted link
 */

import MenuItems from './MenuItems'
import MenuLink from './MenuLink'

export default ({active_path}) =>
    <ul id="navigation">
        {
            MenuItems.map(item => (
                <li key={item.src}>
                    <MenuLink href={item.src} active={item.src === active_path}>
                        {item.name}
                    </MenuLink>
                </li>
            ))
        }
        <style jsx>{`
            ul#navigation {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }

            ul#navigation li {
                padding: 0 1em;
            }
        `}</style>
    </ul>
