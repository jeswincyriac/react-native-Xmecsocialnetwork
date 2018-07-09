export default function(state=0,actions={}){
switch (actions.type) {
    case "fliteroptionchange":
    {
        //console.log("hi")
        return{
            filter:!state.filter,
            branch:state.branch,
            year:state.year
        }
    }
        break;
    case "passoutyear":
    {
        //console.log("hi")
        return{
            filter:state.filter,
            branch:state.branch,
            year:actions.payload
        }
    }
        break;
    case "branch":
    {
        //console.log("hi")
        return{
            filter:true,
            branch:actions.payload,
            year:state.year
        }
    }
        break;


    default:
     return{
         filter:false,
         branch:""
     }

}

}
