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
        
        function hasNum() {
            if (fields.fName.match(/^[0-9]+$/)) { 
                alert('Names cannot have numbers!');
            }
        }

        function isEmpty() {
            if (fields.fName === "") { 
                alert('Please Enter Your Name');
            }
        }
        console.log(fields.fName + ' ' + fields.lName);
       //fields.fName + ' ' + fields.lName
        isEmpty();
        hasNum();
        event.preventDefault(); //keeps browser from submitting. Remove after testing 
    }
//}; //window load end


