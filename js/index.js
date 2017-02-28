//window.onload = function() {
    document.getElementById('submit').addEventListener("click", submit);
    
    function submit() { 
        function getFields() { 
            var firstName = document.querySelector('#firstName').value;
            var lastName = document.querySelector('#lastName').value;

            return firstName, lastName;
             //keeps browser from submitting. Remove after testing 
        }

        var fields = {
            fName: firstName.value,
            lName: lastName.value  
        }

        fields.fName = firstName.value;
        fields.lName = lastName.value;
        
        console.log(fields.fName + fields.lName);
        event.preventDefault();
    }
//}; //window load end


