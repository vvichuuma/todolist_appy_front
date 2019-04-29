window.onload = function(){

  
  
axios.get('http://localhost:3000/allusers')
  .then(function (response) {
    // handle success
    console.log(response);
  })


}