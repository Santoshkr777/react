import {createStore} from 'redux';
export const login = (uname)=>{
    return{type:'login',uname:uname}
};
export const logout = ()=>{
    return {type:'logout'}
};
export const reducer = (initialState='logout',action)=>{
    switch (action.type) {
        case 'login':
            initialState=`${action.uname},logged in successfully.........`;
            break;
        case 'logout':
            initialState='logout';
            break;
    }
    return initialState;
}
export var store = createStore(reducer);
store.subscribe(()=>console.log(store.getState()));
