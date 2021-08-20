import React from 'react'
import './homepage.styles.scss'

export const Homepage = () => {
    return (
        <div className="homePage">
            <div className='directory-menu'>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">sneakers</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Women</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Men</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
