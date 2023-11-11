import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
//import {useData} from "./useData"
//import { Styled, styled } from 'styled-components';

export function HomeBar ({addedItems, setAddedItems, data, error, loading}) {
    console.log(addedItems)
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const url = 'https://fakestoreapi.com/products?limit=5';

    // useEffect(() => {
    //     if (data !== null) return;
    //     fetch(url)
    //     .then((response) => {
    //       if (response.status >= 400) {
    //         throw new Error("server error");
    //       }
    //       return response.json();
    //     })
    //     .then((response) => setData(response))
    //     .catch((error) => setError(error))
    //     .finally(() => setLoading(false));
    // }, []);
    // console.log(data);

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
    // const [fetchedData, setFetchedData] = useState(null);
    // if (fetchedData === null) {
    //     const url = 'https://fakestoreapi.com/products?limit=5';
    //     const {data, error, loading} = useData(url);
        
    //     setFetchedData(data);
    //     console.log(fetchedData)
    //     if (error) return <p>A network error was encountered</p>;
    //     if (loading) return <p>Loading...</p>;
    // }
   // console.log(data);
   //const stateData = {data, addedItems, setAddedItems};
    return (
        <div className='navBar'>
            <div className='title'>Your Go-To Store</div>
            <div className='navBarLinks'>
                <Link to="/">Home</Link>
                <Link to="/shop" state={{data, addedItems} }>Shop</Link>
                <Link to="/cart">Cart {addedItems === 0 ? null : `(${addedItems})`}</Link>
            </div>
      </div>
    )
}