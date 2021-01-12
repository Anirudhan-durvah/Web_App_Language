function validatenumber(){
      var number = document.getElementById("mobilenumber").value;
      var regex = /^[7-9]\d{9}$/;
      if(regex.test(number)){
            if(number.length< 10){
                  document.getElementById("numbercheck").style.visibility = "visible";
                  return false;
            }
            else{
                  return true;
            }
      }
      else{
            document.getElementById("numbercheck").style.visibility = "visible";
            return false;
      }
      
}
function validatename(){
      var name = document.getElementById("username").value;
      var regex = /^[A-Za-z]+$/;
      if(name.match(regex)){
            document.getElementById("checkname").style.visibility = "hidden"
            return true;
            
      }
      else{
            document.getElementById("checkname").style.visibility = "visible";
            return false;
      }
      
}


// function firstpopup(){
//       var thepopup =  document.getElementById('firstpopupscreen');
//       thepopup.style.display = "flex";
//       console.log(thepopup.style);
// }