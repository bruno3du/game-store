import React from 'react'
import './ShowImgOnProduct.css'

export default function ShowImgOnProduct(props) {
    return (
        <div className='ShowImgOnProduct'>
            <img alt={props.product.name} src={`/assets/${props.product.image}`}/>
        </div>
    )
}
