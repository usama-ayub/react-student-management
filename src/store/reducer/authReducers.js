const initialState = {
    isLogin:{},
}

export default function(state = initialState , action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
        return {
            ...state,
            isLogin:action.payload
        };
      default:
      return state;
    }
}