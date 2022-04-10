import Link from 'next/link'
import styles from '../styles/HamburgerMenu.module.css'
import { useState } from "react"

export default function HamburgerMenu({ links }) {
    const [isChecked, setChecked] = useState(false)

    return (
        <div className={styles['hamburger-menu']}>
            <input type="checkbox" checked={isChecked} id={styles['menu-btn-check']} />
            <label className={styles['menu-btn']} onClick={e => setChecked(!isChecked)}>
                <span></span>
            </label>
            <div className={styles['menu-content']}>
                <ul>
                    {links.map((link) => (
                        <li>
                            <Link href={link.url}>
                                <a onClick={e => setChecked(false) }>{link.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
