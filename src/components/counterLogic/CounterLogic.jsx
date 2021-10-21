import './CounterLogic.css';
function CounterLogic(props){
return(
    <div className="btnContainer">
            <button className="increment btn btn-primary mx-2" onClick={props.incre}>Increment</button>
            <button className="decrement btn btn-danger mx-2" onClick={props.decre}>decrement</button>
            <button className="reset btn btn-warning mx-2" onClick={props.reset}>reset</button>
        </div>

)
}
export default CounterLogic;