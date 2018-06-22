export default function(state=0,actions={}){
 switch (actions.type) {
     case "edit":
     {   console.log(actions.payload)
         return{
             name:state.name,
             occupation:state.occupation,
             company:state.company,
             aboutstatement:state.aboutstatement,
             passoutyear:state.passoutyear,
             course:state.course,
             dob:state.dob,
             CurrentAddress:state.CurrentAddress,
             PermanentAddress:state.PermanentAddress,
             contact:state.contact,
             workExp:state.workExp,
             education:state.education,
             editable:true,
             branch:state.branch,
             imageurl:state.imageurl

         }
     }
         break;
     default:
     return{
         name:null,
         occupation:null,
         company:null,
         aboutstatement:"Express about yourself",
         passoutyear:"Eg:2012",
         course:"Mtech/Btech",
         dob:null,
         CurrentAddress:null,
         PermanentAddress:null,
         contact:null,
         workExp:null,
         education:null,
         editable:false,
         branch:null,
         imageurl:require("../images/profilepic.jpeg")


     }

 }

}
