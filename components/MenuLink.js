/**
 * Menu link element for the main navigation. Tracks current page
 * and highlights the "current" link accordingly
 */
import Link from 'next/link'

const MenuLink = ({ href, active, children }) => (
    <React.Fragment>
        <Link href={href}>
            <a className={active ? "current": null }>{children}</a>
        </Link>
        <style jsx>{`
            a {
                color: #FFB90F;
                font-family: Impact, 'Oswald', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                text-decoration: none;
                font-size: 1em;
            }

            a.current {
                color: #FF4500;
                text-decoration: underline;
            }
        `}</style>
    </React.Fragment>
);

export default MenuLink

