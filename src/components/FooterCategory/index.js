import React from 'react';
import './FooterCategory.css'

export default function FooterCategory() {
    return (
        <div className="FooterCategory">
            <div className="FooterCategory--title">
                Main Category
            </div>
            <div className="FooterCategory--categories">
                <ul>
                    <li className="FooterCategory--list">Category 01</li>
                    <li className="FooterCategory--list">Category 02</li>
                    <li className="FooterCategory--list">Category 03</li>
                    <li className="FooterCategory--list">Category 04</li>
                </ul>
            </div>
        </div>
    )
}

