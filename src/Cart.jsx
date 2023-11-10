import { useState } from 'react'
import { Link } from "react-router-dom";
import {useData} from "./useData"

export function Cart ({addedItems, setAddedItems, cartList, setCartList, data}) {
    //const [total, setTotal] = useState(0);
    if (cartList.size === 0) {
      return <div className='emptyCart'>Please add itmes to check out ^-^</div>
    }
    function handleReduce(e) {
      let copyList = new Map(cartList);
      const targetId = Number(e.target.id);
      if (copyList.get(targetId) > 0) {
        copyList.set(targetId, copyList.get(targetId) - 1)
        setAddedItems(addedItems - 1);
      } else {
        copyList.delete(targetId);
      }
      setCartList(copyList);
    }
    
    function handleIncrease(e) {
      let copyList = new Map(cartList);
      const targetId = Number(e.target.id);
      copyList.set(targetId, copyList.get(targetId) + 1);
      setAddedItems(addedItems + 1);
      setCartList(copyList);
    }

    const calAmount = data.reduce((total, curValue, curIndex) => {
      if (cartList.has(curIndex + 1)) {
        return total + cartList.get(curIndex + 1) * curValue.price;
      } else {
        return total;
      }
    }, 0)
    const totalAmount = calAmount.toFixed(2);
    console.log(totalAmount);
    return (
      <div className='cartItems'>
        {
          data.map((item, index)=> {
            if(cartList.has(index + 1)) {
              return(
                <div className='singleItem' key={item.id}>
                  <div className='itemInfo'>
                    <img src={item.image} alt={item.title} />
                    <div className='singleItemTitle'>{item.title}</div>
                    <div className='price'>${item.price}</div>
                  </div>
                  <div className='buttonAndSub'>
                    <div className='buttons'>
                      <button className='reduce' onClick={handleReduce} id={item.id}>-</button>
                      <span>  {cartList.get(index + 1)}  </span>
                      <button className='increase' onClick={handleIncrease} id={item.id}>+</button>
                    </div>
                      <div className='subTotal'>Subtotal: ${(item.price * cartList.get(index + 1)).toFixed(2)}</div>
                  </div>
                </div>
              )
            }
          })
        }
        <div className='total'>Total: ${totalAmount}</div>
        <div className='checkout'>
          <button>CHECKOUT</button>
        </div>
       

      </div>
    )
}