const initialState = {
    GCourses:[],
    CCourse :{},
    DCourse:false,
    UCourse:false
}

export default function(state = initialState , action){
    switch(action.type){
        case 'FETCH_COURSES':
        return {
            ...state,
            GCourses:action.payload
        };
        case 'DELETE_COURSE':
        return {
            ...state,
            DCourse:action.payload
        }
        case 'CREATE_COURSE':
        return {
            ...state,
            CCourse:action.payload
        }
        case 'UPDATE_COURSE':
        return {
            ...state,
            UCourse:action.payload
        }
      default:
      return state;
    }
}