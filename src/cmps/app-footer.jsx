import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'
import Facebook from '../assets/img/icon-facebook.svg'
import Pinterest from '../assets/img/icon-pinterest.svg'
import Twitter from '../assets/img/icon-twitter.svg'

export function AppFooter() {

    return (
        <footer className='main-footer'>
            <div className='main-details'>
                <div className='link-panel'>
                    <Link className="logo" to="/">
                        <img src={Logo} alt="myteam" />
                    </Link>
                    <nav className='main-nav'>
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/about">about</NavLink>
                    </nav>
                </div>
                <div className='address'>
                    <p>987  Hillcrest Lane</p>
                    <p>Irvine, CA</p>
                    <p>California 92714</p>
                    <p>Call Us : 949-833-7432</p>
                </div>
            </div>
            <div className='social-links'>
                <div className='social-media'>
                    <a href="#"><img src={Facebook} alt="facebook" /></a>
                    <a href="#"><img src={Pinterest} alt="pinterest" /></a>
                    <a href="#"><img src={Twitter} alt="twitter" /></a>
                </div>
                <p>Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
    )
}