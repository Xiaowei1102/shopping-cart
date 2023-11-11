import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import {useData} from "./useData"
import { useParams } from 'react-router-dom';

export function Item({addedItems, setAddedItems, cartList, setCartList}) {
    const {id} = useParams();
     const location = useLocation();
     const {data} = location.state;
     const item = data[id - 1];
     

    return (
        <div className='currItem'>
            <img src={item.image} alt={item.title} />
            <div className='itemTitle'>{item.title}</div>
            <div className='rating'>{item.rating.rate}({item.rating.count})</div>
            <div className='description'>{item.description}</div>
            <div className='price'>${item.price}</div>
            <div className='addingItemDiv'>
                <button className='addingItem' onClick={() => {
                    setAddedItems(addedItems + 1);
                    if(cartList.has(item.id)) {
                        setCartList(()=> {
                            let copyList = new Map(cartList);
                            copyList.set(item.id, copyList.get(item.id) + 1);
                            return copyList;
                        }) 
                    } else {
                        setCartList(()=> {
                            let copyList = new Map(cartList);
                            copyList.set(item.id, 1);
                            return copyList;
                        })
                    }
                    }}>Add to bag
                </button>
            </div>
        </div>
    )
}