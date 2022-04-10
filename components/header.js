import Link from 'next/link'
import HamburgerMenu from '../components/hamburger-menu'

export default function Header() {
    const links = [
        { name: 'HOME', url: '/' },
        { name: 'SSG', url: '/ssg' }
    ];

    return (
        <header>
            <h1>
                <Link href="/">
                    <a><b>Next.js</b> + <b>Preact</b> Example</a>
                </Link>
            </h1>
            <HamburgerMenu links={links} />
        </header>
    )
}
