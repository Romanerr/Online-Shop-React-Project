const INITTAL_STATE ={
    currentUser:null
}
const userReducer = (state= INITTAL_STATE,action) =>{
    switch(action.type){
        case'SETT_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
}
export default userReducer;