
    function validate() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      if (username == "123" && password == "123") {
        // alert("login Successfully!!");
        window.open("music/index.html", "_self");
        return false;
      }
    
       else {
        // alert("Login failed");
        document.getElementById("message").innerHTML = "Enter valid username and password!!!";  
      }
    }
    function done(){
      document.getElementById("message2").innerHTML = "Enter successfully!!!";  
    }
    
    
    
 
