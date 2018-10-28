import Link from 'next/link'

export default (props) => (
    <Link href="/">
        <a className="footer">
            {props.children}
            <style jsx global>{`
                a.footer {
                    color: red;
                    text-decoration: none;
                    font-size: 0.9em;
                    font-family: Arial, Helvetica, sans-serif;
                }
            `}</style>
        </a>
    </Link>
)