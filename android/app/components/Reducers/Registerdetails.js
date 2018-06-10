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
            password:state.password,
            password2:state.password2
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
            password:state.password,
            password2:state.password2
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
            password:state.password,
            password2:state.password2
        };
      }
        break;

    case "date":{
        // console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            date_of_birth:actions.payload,
            branch:state.branch,
            password:state.password,
            password2:state.password2
        };
      }
        break;
    case "branch":{
        // console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            date_of_birth:state.date_of_birth,
            branch:actions.payload,
            password:state.password,
            password2:state.password2
        };
      }
        break;
    case "password":{
        // console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            date_of_birth:state.date_of_birth,
            branch:state.branch,
            password:actions.payload,
            password2:state.password2
        };
      }
        break;
    case "password2":{
        // console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            date_of_birth:state.date_of_birth,
            branch:state.branch,
            password:state.password,
            password2:actions.payload
        };
      }
        break;

    default:
        return {
            name:null,
            email:null,
            roll_no:null,
            date_of_birth:null,
            branch:null,
            password:null
        };
   }


    }
