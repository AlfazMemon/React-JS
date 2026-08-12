import { Decrement, Increment } from "./Actiontype.jsx";

const intialState = {
    count : 0
}
function Reducer(state = intialState,{type,payload}) // action {type,payload}
{
    switch (type)
    {
        case Increment :
            return {count : state.count + payload}
 
        case Decrement :
            return {count : state.count - payload}    

        default :
        return state    
    }
}

export default Reducer