import Link from 'next/link'
import styles from '../styles/Home.module.css'
import LocalImage from '../components/local-image'

export default function Home() {
  const links = [
    { name: 'SSG', url: '/ssg' }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        INDEX
      </h2>
      <section>
        <h3>Link</h3>
        <nav>
          <ul>
            {links.map((link) => (
              <li>
                <Link href={link.url}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="https://github.com/kittttttan/next-preact">
          <a rel="external noopener">kittttttan/next-preact</a>
        </Link>
      </section>
      <section>
        <h3>env</h3>
        <pre>NEXT_PUBLIC_KEY={process.env.NEXT_PUBLIC_KEY}</pre>
      </section>
      <section>
        <h3>Image</h3>
        <div>
          <LocalImage src="/img/660x360.png" width={660} height={360} alt="sample image" />
        </div>
      </section>
    </div>
  )
}
