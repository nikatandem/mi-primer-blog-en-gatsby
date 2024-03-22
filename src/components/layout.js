import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
<StaticImage
       alt="Un patito feliz"
       src="../images/icon.png" width={50}
     />
     <hr/>
            <nav>
                <ul className={navLinks}>

                    <li className={navLinkItem}>


                        <Link to='/' className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}>
                        <Link to='/sobremi' className={navLinkText}>Sobre mí</Link></li>
                    <li className={navLinkItem}>
                        <Link to='/blog' className={navLinkText}>Blog</Link></li>
                    <li className={navLinkText}>
                        <a href='https://github.com/nikatandem'>Github</a></li>
                </ul>
            </nav>
            <hr/>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
                <hr/>
                <footer className='footer'> &copy; Nikatandem {new Date().getFullYear()}</footer>
                {/* {new Date().getFullYear()} Para la fecha actualizada*/}
            </main>
        </div>
    )
}

export default Layout

