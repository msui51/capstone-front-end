import React from 'react'
import icon from '../../Assets/Icons/icons8-dance-60.png'
import './header.scss';
import { useLocation, useParams, Link} from 'react-router-dom';
import HeaderLogInButton from '../HeaderLogInButton/HeaderLogInButton';
import HeaderContactButton from '../HeaderContactButton/HeaderContactButton';
import HeaderLeaveChatButton from '../HeaderLeaveChatButton/HeaderLeaveChatButton';


function Header() {

//grabbing the url path

  const location = useLocation();

//grabbing the dynamic url param

  const {id, dj} = useParams();

  return (
    <div className={location.pathname=== `/${dj}` ? 'header__no-border' : 'header'}>
        <div className="header__wrapper">
            <div className="header__wrapper--left">
              <Link className='header__home-link' to='/'>
                <h1 className='header__title'>Find Your <span className='header__title--different'>Crew</span></h1>
              </Link>
                <img className='header__icon' src={icon} alt='figures dancing'></img>
            </div>
            <div className="header__wrapper--right">
              {location.pathname === '/about' ? <HeaderLogInButton/>
                : location.pathname === '/selections' ? <HeaderContactButton/> 
                : location.pathname === `/selections/${id}` ? <HeaderContactButton/>
                : location.pathname === `/${dj}` ? <HeaderLeaveChatButton/>
                : null }
            </div>
        </div>
    </div>
  )
}

export default Header