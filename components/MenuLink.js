import Link from 'next/link'

/**
 * Menu link element for the main navigation. Tracks current page
 * and highlights the "current" link accordingly
 */
const MenuLink = ({ href, active, children }) => (
    <React.Fragment>
        <Link href={href}>
            <a className={active ? "current": null }>{children}</a>
        </Link>
        <style jsx>{`
            a {
                color: #FFB90F;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                text-decoration: none;
            }

            a.current {
                color: #FF4500;
            }
        `}</style>
    </React.Fragment>
);

export default MenuLink

