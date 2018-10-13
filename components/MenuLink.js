import Link from 'next/link'
import { withRouter } from 'next/router'

const MenuLink = ({ children, router, href }) => {

    const active = router.pathname == href;

    return (
        <>
            <Link href={href}>
                <a className={active ? "current": null }>{children}
                    <style jsx>{`
                        a  {
                            color: #FFB90F;
                            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                            text-decoration: none;
                        }

                        a.current {
                            color: #FF4500;
                        }
                    `}</style>
                </a>
            </Link>
        </>
    );
}

export default withRouter(MenuLink)

