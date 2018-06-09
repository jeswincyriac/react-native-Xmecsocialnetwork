export default function(state=0,actions={}){
switch (actions.type) {
    case "name":{
         //console.log(state)
        return {
            name:actions.payload,
            email:state.email,
            roll_no:state.roll_no,
            date_of_birth:state.date_of_birth,
            branch:state.branch,
            password:state.password
        };
      }

        break;
    case "email":{
         //console.log(state)
        return {
            name:state.name,
            email:actions.payload,
            roll_no:state.roll_no,
            date_of_birth:state.date_of_birth,
            branch:state.branch,
            password:state.password
        };
      }
        break;

    case "rollno":{
         //console.log(state)
        return {
            name:state.name,
            email:state.email,
            roll_no:actions.payload,
            date_of_birth:state.date_of_birth,
            branch:state.branch,
            password:state.password
        };
      }
        break;

    case "date":{
         console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            date_of_birth:actions.payload,
            branch:state.branch,
            password:state.password
        };
      }
        break;

    default:
        return {
            name:"",
            email:"",
            roll_no:"",
            date_of_birth:"",
            branch:"",
            password:""
        };
   }


    }
