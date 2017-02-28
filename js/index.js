//window.onload = function() {
    document.getElementById('submit').addEventListener("click", submit);
    
    function submit() { //submit form
        function getFields() { //get the input from all fields
            
            var firstName = document.querySelector('#firstName').value;
            var lastName = document.querySelector('#lastName').value;

            return firstName, lastName;
             
        }
        
        //object creation of user
        var fields = {
            fName : firstName.value,
            lName : lastName.value  
        }
        
        console.log(fields.fName + ' ' + fields.lName);
       //fields.fName + ' ' + fields.lName
        
        event.preventDefault(); //keeps browser from submitting. Remove after testing 
    }
//}; //window load end


