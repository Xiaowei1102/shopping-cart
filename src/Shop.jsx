import { useState } from 'react'
import { Link } from "react-router-dom";
import {useData} from "./useData"

export function Shop () {
    const {data, error, loading} = useData('https://fakestoreapi.com/products/1')
    console.log(data)
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
    <>
        <div className='items'>This is a place holder for shopping items</div>
        <img src={data.image} alt={data.title} />

      </>
    )
}