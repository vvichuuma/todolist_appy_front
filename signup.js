

function zigs(){
   
  var name = document.getElementById("name").value; 
   var email = document.getElementById("email").value; 
   var password = document.getElementById("pass").value;
   var password_confirmation = document.getElementById("pass_c").value;


   var params = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
   } 
 
 console.log(params);

 axios.get("http:localhost:3000/allusers").then(function(response){
    console.log(response);
 })


 axios.post("http://localhost:3000/cUser" , params).then(function(response){
     console.log(response);
 })


}