import './App.css'
import {CreatePool} from "./components/createPool"
import {BuyToken} from "./components/buyToken"
import { useState } from 'react';
import { BigNumber } from 'ethers';
import {CalculateContext} from "./context/calculate"

function App() {
  const [price, setPrice] = useState(0);
  const [ide, setIde] = useState(0)
  const [pde, setPde] = useState(0)

  const [rate, setRate] = useState(BigNumber.from('0'))
  const [de, setDe] = useState(0)

  const [purchaseAmount, setPurchaseAmount] = useState(0)
  const [IDOAmount, setIDOAmount] = useState(0)

  return (
    <CalculateContext.Provider value={{price, ide, pde, rate, de, setPrice, setIde, setPde, setRate, setDe, purchaseAmount, IDOAmount, setPurchaseAmount, setIDOAmount}}>
      <div style={{display: 'flex', gap: '50px', justifyContent:'center'}}>
        <CreatePool/>
        <BuyToken/>
      </div>
    </CalculateContext.Provider>
  )
}

export default App
