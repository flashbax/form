//window.onload = function() {
    document.getElementById('submit').addEventListener("click", submit);
    
    function submit() { //submit form
        function getFields() { //get the input from all fields
            var firstName = document.querySelector('#firstName').value;
            var lastName = document.querySelector('#lastName').value;

            return firstName, lastName;
             
        }

        var fields = {
            fName: firstName.value,
            lName: lastName.value  
        }

        //add form input to fields object
        fields.fName = firstName.value;
        fields.lName = lastName.value;
        
        console.log(fields.fName + fields.lName);
        event.preventDefault(); //keeps browser from submitting. Remove after testing 
    }
//}; //window load end


