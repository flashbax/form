//window.onload = function() {
    
    //object 
    // var formEntry = {
    //      firstName: first,
    //      lastName: last
    //  }
    
    //document.getElementById("firstName").innerHTML = formEntry.firstName;
    //document.getElementById("lastName").innerHTML = formEntry.lastName;
    
    document.getElementById('submit').addEventListener("click", submit);
    
    function submit() { 
        var firstName = document.querySelector('#firstName').value;
        alert(firstName);
    }
    


//}; //window load end


    