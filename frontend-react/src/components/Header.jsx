import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <>
            <nav className="navbar container align-items-start">
                <a className='navbar-brand text-light pt-2 pb-2' href="">Stock Prediciton Portal</a>

                <div>
                    <Button text='Login' class='btn-outline-info'/>
                    &nbsp;
                    <Button text='Register' class='btn-info'/>
                </div>
            </nav>
        </>
    )
}

export default Header