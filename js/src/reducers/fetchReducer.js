import * as types from '../constant/actionTypes'

const initialState={
  data:[],
  isFetching:false,
  isFetched:false,
  hasError:false,
};

export default function fetcher(state=initialState,action={}){
  switch(action.type){
    case types.FETCHING:
      console.log("fetching reducer");
      return{
        ...state,
        data:[],
        isFetching:true,
        isFetched:false,
        hasError:false
       };

    case types.FETCH_SUCCESS:
      console.log("fetch success reducer");
      return{
        ...state,
        data:action.data,
        isFetching:false,
        isFetched:true,
        hasError:false
       };

    case types.FETCH_FAILURE:
    console.log("fetch failure reducer");
      return{
        ...state,
        data:[],
        isFetching:false,
        isFetched:false,
        hasError:true
       };
    
    default:return state;


  }
}