/**
 * Component for displaying of a "burger" menu - a button and
 * a popup with links.
 * 
 * @property [string] active_path - id of the highlighted link
 */
import { bubble as Menu } from 'react-burger-menu'
import MenuItems from './MenuItems'
import MenuLink from './MenuLink'

export default ({active_path}) =>
    <Menu right={ true } customCrossIcon={false} bodyClassName={"bm-open"}>
        {
            MenuItems.map(item => (
                <div className="menu-item" key={item.src}>
                    <MenuLink
                        active={item.src === active_path}
                        href={item.src}>

                        {item.name}
                    </MenuLink>
                </div>
            ))
        }
        <style jsx global>{`
            .bm-burger-button {
                position: absolute;
                width: 95%;
                margin-right: 5%;
                height: 100%;
            }
            .bm-open .bm-burger-button {
                visibility: hidden;
            }
            .bm-menu-wrap {
                top: 0;
                overflow: hidden;
            }
            .bm-burger-bars {
                background: #FFB90F;
            }
            .bm-burger-button > span > span:first-of-type {
                border-top-right-radius: 50%;
                border-top-left-radius: 50%;
            }
            .bm-burger-button > span > span:last-of-type {
                border-bottom-right-radius: 50%;
                border-bottom-left-radius: 50%;
            }
            .bm-burger-button > span > span:nth-child(2) {
                border-top: solid green;
                border-bottom: solid yellow;
                box-sizing: border-box;
                background: rgb(182, 70, 18);
                border-width: 0.4vw 0;
            }
            @media (orientation: landscape) {
                .bm-burger-button > span > span:nth-child(2) {
                    border-width: 0.4vh 0;
                }
            }
            .bm-overlay {
                left: 0; top: 0; bottom: 0; right: 0;
            }
            .bm-menu {
                padding: 2em;
                overflow: hidden;
            }
            .bm-morph-shape {
                fill: rgba(54, 54, 54, 0.9);;
            }
            .bm-item-list {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .bm-item:first-child {
                width: 100%;
                text-align: center;
                font-size: 2em;
            }
            .bm-item:nth-child(2n+2) {
                text-align: right;
                padding-right: 0.5em;
            }
            .bm-item:nth-child(2n+3) {
                text-align: left;
                padding-left: 0.5em;
            }
            .bm-item {
                font-size: 1.25em;
                display: block;
                width: 50%;
                box-sizing: border-box;
            }
        `}</style>

    </Menu>
