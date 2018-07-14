export default function(state=0,actions={}){
switch (actions.type) {
    case "fliteroptionchange":
    {
        //console.log("hi")
        return{
            filter:!state.filter,
            branch:state.branch,
            year:state.year,
            value:state.value
        }
    }
        break;
    case "passoutyear":
    {
        //console.log("hi")
        return{
            filter:state.filter,
            branch:state.branch,
            year:actions.payload,
            value:state.value
        }
    }
        break;
    case "searchchange":
    {
        //console.log("hi")
        return{
            filter:state.filter,
            branch:state.branch,
            year:state.year,
            value:action.payload
        }
    }
        break;
    case "branch":
    {
        //console.log("hi")
        return{
            filter:true,
            branch:actions.payload,
            year:state.year,
            value:state.value
        }
    }
        break;


    default:
     return{
         filter:false,
         branch:"",
         year:"",
         value:""

     }

}

}
