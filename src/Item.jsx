import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import {useData} from "./useData"
import { useParams } from 'react-router-dom';

export function Item() {
    const {id} = useParams();
     const location = useLocation();
     const {data} = location.state;
     const item = data[id - 1];

    return (
        <div className='singleItem'>
            <img src={item.image} alt={item.title} />
            <div className='itemTitle'>{item.title}</div>
            <div className='rating'>{item.rating.rate}({item.rating.count})</div>
            <div className='description'>{item.description}</div>
            <div className='price'>${item.price}</div>
        </div>
    )
}