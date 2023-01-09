import '../App.css'

import { useContext, useState } from "react"
import { CalculateContext } from '../context/calculate'

export const BuyToken = () => {

    const {purchaseAmount, IDOAmount, setPurchaseAmount, setIDOAmount, price} = useContext(CalculateContext)

    const reRender = () => {
        const idoAmount = purchaseAmount / price
        setIDOAmount(idoAmount)
    }
    return (
        <div className="buy-token">
            Purchase Amount: <input placeholder='purchase-amount' onChange={e => setPurchaseAmount(Number(e.target.value))}></input>
            <br />
            <button style={{ backgroundColor: 'orange' }} onClick={() => reRender()}>Calculate (purchase amount / price)</button>
            <hr />
            IDO Amount: {IDOAmount}
        </div>
    )
}