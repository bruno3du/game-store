import React from 'react'
import "./FooterMenu.css"

export default function FooterMenu() {
    return (
        <div className="FooterMenu">
            <div className="FooterMenu--logo">Logo</div>
            <div>
                <ul className="FooterMenu--menus">
                    <li className="FooterMenu--menu">CONTATO</li>
                    <li className="FooterMenu--menu">FAQ</li>
                    <li className="FooterMenu--menu">SITEMAP</li>
                </ul>
            </div>
        </div>
    )
}
