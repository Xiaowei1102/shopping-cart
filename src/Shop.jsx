import { useState } from 'react'
import { Link } from "react-router-dom";
import {useData} from "./useData"

function Shop () {
    const {data, error, loading} = useData('https://fakestoreapi.com/products')
    console.log(data)

    return (
        <>
        <div className='items'>This is a place holder for shopping items</div>

      </>
    )
}