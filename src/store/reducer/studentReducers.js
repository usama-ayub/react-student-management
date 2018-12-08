const initialState = {
    students:[],
    student :{},
    DStudent:false,
    UStudent:false
}

export default function(state = initialState , action){
    switch(action.type){
        case 'FETCH_STUDENTS':
        return {
            ...state,
            students:action.payload
        };
        case 'DELETE_STUDENT':
        return {
            ...state,
            DStudent:action.payload
        }
        case 'CREATE_STUDENT':
        return {
            ...state,
            student:action.payload
        }
        case 'UPDATE_STUDENT':
        return {
            ...state,
            UStudent:action.payload
        }
      default:
      return state;
    }
}