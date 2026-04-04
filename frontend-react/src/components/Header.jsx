import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav className="navbar container align-items-start">
                <Link className='navbar-brand text-light pt-2 pb-2' to="/">Stock Prediciton Portal</Link>

                <div>
                    <Button text='Login' class='btn-outline-info' url='/login/'/>
                    &nbsp;
                    <Button text='Register' class='btn-info' url='/register/'/>
                </div>
            </nav>
        </>
    )
}

export default Header