import { useState } from 'react'
import { Link } from "react-router-dom";
import {useData} from "./useData"
//import { Styled, styled } from 'styled-components';

export function HomeBar () {

    return (
        <div className='navBar'>
            <div className='title'>Some title here</div>
            <div className='navBarLinks'>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
      </div>
    )
}