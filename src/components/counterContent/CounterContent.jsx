import Counter from '../counter/Counter';
import CounterLogic from '../counterLogic/CounterLogic'
import "./CounterContent.css"
import { useState } from 'react';
function CounterContent(){
    const [count,setCount]= useState(0);
    const incrementFunc =() =>{
        setCount(count+1);
    }
    const decrementFunc = () =>{
        if(count>0){
          setCount(count-1);
        }else{
          alert("you reached 0")
        }
      }
      const resetFunc = () =>{
        setCount(0);
      }
    return(
        <section className="content">
        <Counter myCount={count}/>
        <CounterLogic incre={incrementFunc} decre={decrementFunc} reset={resetFunc}/>
        </section>
    )
}
export default CounterContent; 