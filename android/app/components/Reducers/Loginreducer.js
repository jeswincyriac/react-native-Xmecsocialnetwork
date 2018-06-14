export default function(state=0,actions={}){
   switch (actions.type) {
       case "Username":
       return{
           Username:actions.payload,
           password:state.password
       }
           break;
       case "passwordL":
       return{
           Username:state.Username,
           password:actions.payload
       }
           break;

       default:{
           return{
               username:null,
               password:null
           }
       }

   }

}
