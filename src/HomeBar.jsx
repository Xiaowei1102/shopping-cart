import { useState } from 'react'
import { Link } from "react-router-dom";
import {useData} from "./useData"

export function HomeBar () {
    return (
        <div className='navBar'>
            <div className='title'>Some title here</div>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
      </div>
    )
}