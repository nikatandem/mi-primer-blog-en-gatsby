import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`query MyQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            iconUrl
          }
        }
      }
      `)
    return (
        <div className={container}>
            <header>
                <h1>{data.site.siteMetadata.title}</h1>
                <h2>{data.site.siteMetadata.description}</h2>

            </header>
            <StaticImage
                alt="Un patito feliz"
                src="../images/icon.png" width={50}
            />
            <hr />
            <nav>
                <ul className={navLinks}>

                    <li className={navLinkItem}>


                        <Link to='/' className={navLinkText}>Inicio</Link></li>
                    <li className={navLinkItem}>
                        <Link to='/sobremi' className={navLinkText}>Sobre mí</Link></li>
                    <li className={navLinkItem}>
                        <Link to='/blog' className={navLinkText}>Blog</Link></li>
                    <li className={navLinkText}>
                        <a href='https://github.com/nikatandem'>Github</a></li>
                </ul>
            </nav>
            <hr />
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
                <hr />
                <footer className='footer'> &copy; Nikatandem {new Date().getFullYear()}</footer>
                {/* {new Date().getFullYear()} Para la fecha actualizada*/}
            </main>
        </div>
    )
}

export default Layout

