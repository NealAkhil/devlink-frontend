export default(state,action)=>{
    state={
        i_am: 'Software engineer, Node js developer, and Code poet',
        i_like: "Coffee and code, Guitar, logics and complex problem solving",
    }
    switch(action.type){
        case "SET_TECHNOLOGY":
            return{
                ...state,
                tech: action.text
            }
        default: 
            return state

    }
    // console.log('actions dispatched when clicked btn',action);
    
    // return state;
}