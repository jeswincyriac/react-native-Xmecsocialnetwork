export default function(state=0,actions={}){
    switch(actions.type) {
        case "nextbuttonclicked":{
            //console.log(state)
            return actions.payload
        }
            break;
        case "password":{
            //console.log(state)
            return {reg:"reg2"}
        }
            break;
        case "password2":{
            //console.log(state)
            return {reg:"reg2"}
        }
            break;
    default:
        return {reg:"reg1"}

    }
    }
