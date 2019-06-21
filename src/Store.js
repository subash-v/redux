import * as redux from 'redux';

//Action
export const INCREMENT='increment';
export const DECREMENT='decrement';

//reducer
const intialState={
  count:0
}
const reducer =(state=intialState,action)=>{
  switch(action.type){
    case INCREMENT:{
      return({...state,count:state.count+1})
    }
     case DECREMENT:{
      return({...state,count:state.count-1})
    }
    default:{
      return state;
    }
  }
}
//store
const store = redux.createStore(reducer);

export default store;