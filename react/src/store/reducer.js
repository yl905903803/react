const reducer = (state,action)=>{
    let{type,payload} = action;
    switch(type){
        case 'VIEW_LOADING' :
            return Object.assign({},state,{bLoading: payload });
      
          case 'VIEW_NAV' :
            return Object.assign({},state,{bNav: payload });
      
          case 'VIEW_FOOT' :
            return Object.assign({},state,{bFoot: payload });

          case 'UPDATE_HSERVICE' :
              return Object.assign({},state,{hservice: payload});

         case 'UPDATE_PRODUCT' :
              return Object.assign({},state,{product: payload});

        case 'UPDATE_SERVICE' :
              return Object.assign({},state,{service: payload});
        
         case 'UPDATE_DETAIL' :
             return Object.assign({},state,{detail: payload });

        case 'UPDATE_USER' :
             return Object.assign({},state,{user: payload });
            
        default:    
           return state;
    }
    

}
export default reducer;