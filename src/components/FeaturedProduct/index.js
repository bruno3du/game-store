import React from 'react'
import './FeaturedProduct.css'
import BoxList from '../BoxList';


export default function index() {
    return (
        <div className="featured">
            <h2>Novos Produtos</h2>
            <BoxList />
        </div>
    )
}
