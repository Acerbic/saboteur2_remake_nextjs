import Link from 'next/link'

export default (props) => (
    <Link href="/">
        <a className="footer">
            {props.children}
            <style jsx>{`
                .footer {
                    color: red;
                    text-decoration: none;
                    font-size: 0.9em;
                }
            `}</style>
        </a>
    </Link>
)