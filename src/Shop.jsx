import { useState } from 'react'
import { Link } from "react-router-dom";
import {useData} from "./useData"

export function Shop () {
    const {data, error, loading} = useData('https://fakestoreapi.com/products?limit=5')
    console.log(data)
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
    <>
        <div className='items'>This is a place holder for shopping items</div>
        <div className='shoppingItems'>
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className='itemTitle'>{item.title}</div>
                        <div className='rating'>{item.rating.rate}({item.rating.count})</div>
                        <div className='price'>${item.price}</div>
                    </div>
                )
            })}
        </div>

      </>
    )
}