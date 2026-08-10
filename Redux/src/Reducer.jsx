import { Decrement, Increment } from "./actiontype";

const intialState = {
    count : 0
}
function Reducer(state = intialState,action) // action {type,payload}
{
    switch (action.type)
    {
        case Increment :
            return {count : state.count + 1}

        case Decrement :
            return {count : state.count - 1}    
    }
}

export default Reducer