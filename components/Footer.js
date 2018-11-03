/**
 * Renders footer part of page layout - bottom of the page link
 */

import Link from 'next/link'

export default (props) => (
    <footer>
        <Link href="/">
            <a className="footer">
                {props.children}
            </a>
        </Link>
        <style jsx global>{`
            footer a {
                color: red;
                text-decoration: none;
                font-size: 0.9em;
                font-family: Arial, Helvetica, sans-serif;
            }
            footer {
                margin-top: 1em;
            }
        `}</style>
    </footer>
)