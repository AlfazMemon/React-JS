import { Decrement, Increment } from "./Actiontype";

const InitialState = {
     count : 0
}

function Reducer (state = InitialState,{type,payload})
{

    switch (type){
        case Increment :
            return {count : state.count + payload}

        case Decrement :
            return {count : state.count - payload}    

        default :
         return state    
    }

}

export default Reducer