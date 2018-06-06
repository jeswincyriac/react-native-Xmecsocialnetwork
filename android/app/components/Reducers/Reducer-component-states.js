export default function(state=0,actions={}){
    if (actions.type == "nextbuttonclicked") {
            return actions.payload
        }
    else {
        return {reg:"reg1"}

    }
    }
