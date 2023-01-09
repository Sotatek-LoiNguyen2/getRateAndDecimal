import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BigNumber } from "ethers";

function main(price: number, IDODecimal: number, purchaseDecimal: number){
  if(price === 0){
      return {rate: BigNumber.from('0'),de: 0}
  }
  const MAX_DEX_LENGTH = 18
  const invert = 1/price
  const invertInArr = invert.toString().split(".");
  let dex: number = invertInArr.length === 1 ? 0 : invertInArr[1].length;
  dex = dex > MAX_DEX_LENGTH ? MAX_DEX_LENGTH : dex
  let intergralPartLength = invert.toString().split('.')[0].length
  const ratex: string = invert.toString().replace('.','').slice(0, intergralPartLength + dex)

  let rate: BigNumber;
  let de: number;
  if(IDODecimal < purchaseDecimal){
      rate = BigNumber.from(ratex);
      de = dex + purchaseDecimal - IDODecimal
  }else{
      de = dex
      rate = BigNumber.from(ratex).mul(BigNumber.from("10").pow(IDODecimal - purchaseDecimal))
  }
  return {rate, de}
}



function App() {
  const [price, setPrice] = useState(0);
  const [ide, setIde] = useState(0)
  const [pde, setPde] = useState(0)

  const [rate, setRate] = useState(BigNumber.from('0'))
  const [de, setDe] = useState(0)

  const reRender = () =>{
    const {rate, de} = main(price, ide, pde);
    setRate(rate);
    setDe(de);
  }
  return (
    <>
      Price: <input placeholder='price' onChange={e => setPrice(Number(e.target.value))}></input>
      <br/>
      <br/>
      IDO decimal: <input placeholder='ide' onChange={e => setIde(Number(e.target.value))}></input>
      <br/>
      <br/>
      Purchase decimal: <input placeholder='pde' onChange={e => setPde(Number(e.target.value))}></input>
      <br/>
      <br/>
      <button onClick={()=>reRender()} style={{backgroundColor: 'orange'}}>Calculate</button>
      <br/>
      <hr/>
      rate: {rate.toString()}
      <hr/>
      de: {de}
    </>
  )
}

export default App
