export default function(state=0,actions={}){
switch (actions.type) {
    case "name":{
         //console.log(state)
        return {
            name:actions.payload,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:"reg1",
            otp:state.otp
        };
      }

        break;
    case "email":{
         //console.log(state)
        return {
            name:state.name,
            email:actions.payload,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:"reg1",
            otp:state.otp
        };
      }
        break;

    case "rollno":{
         //console.log(state)
        return {
            name:state.name,
            email:state.email,
            roll_no:actions.payload,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:"reg1",
            otp:state.otp
        };
      }
        break;

    case "dobdate":{

        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:actions.payload,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:"reg1",
            otp:state.otp
        };
      }
        break;
    case "branch":{
        // console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:actions.payload,
            password:state.password,
            password2:state.password2,
            reg:"reg1",
            otp:state.otp
        };
      }
        break;
    case "password":{
        // console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:actions.payload,
            password2:state.password2,
            reg:"reg2",
            otp:state.otp
        };
      }
        break;
    case "password2":{
        // console.log(action.payload)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:actions.payload,
            reg:"reg2",
            otp:state.otp
        };
      }
        break;
    case "nextbuttonclicked":{
        console.log(actions.payload.reg)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:actions.payload.reg,
            otp:state.otp
        }
    }
        break;

    case "otp":{
        //console.log(state)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:state.reg,
            otp:actions.payload
        }
    }
        break;
    case "dobmonth":{
        //console.log(state)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:actions.payload,
            dob_year:state.dob_year,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:state.reg,
            otp:state.otp
        }
    }
        break;
    case "dobyear":{
        //console.log(state)
        return {
            name:state.name,
            email:state.email,
            roll_no:state.roll_no,
            dob_date:state.dob_date,
            dob_month:state.dob_month,
            dob_year:actions.payload,
            branch:state.branch,
            password:state.password,
            password2:state.password2,
            reg:state.reg,
            otp:state.otp
        }
    }
        break;
    default:
        return {
            name:null,
            email:null,
            roll_no:null,
            dob_date:null,
            dob_month:null,
            dob_year:null,
            branch:null,
            password:null,
            password2:null,
            reg:"reg1",
            otp:null
        };
   }


    }
