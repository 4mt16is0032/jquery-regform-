$(function () {
    
    if(localStorage.getItem("students") == null){
        localStorage.setItem("students",JSON.stringify([]));
    }
    
    showRegisteredStudents();
    
    dialog = $("#dialog").dialog({
        autoOpen:false,
        height:500,
        width:500,
        modal:true
    });
    
    $(".regstu").click(function(){
        dialog.dialog("open");
    })
    
    $("#dob").datepicker({
        changeYear : true,
        changeMonth :true,
        maxDate : "0d"
    });
    $(".submit").click(function () {
        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                },

                name: {
                    required: true,
                    minlength: 4,
                },

                email: {
                    required: true,
                    email: true,
                },

                mobile: {
                    required: true,
                    minlength: 10,
                },

                course: {
                    required: true,
                },

                percentage: {
                    required: true,
                    min: 55,
                    max: 100
                },
                
                dob:{
                    required:true
                }
            },

            messages: {
                usn: {
                    required: "USN cannot be empty",
                    minlength: "USN atleast have 10 characters",
                    maxlength: "USN have 10 characters"
                },

                name: {
                    required: "name cannot be empty",
                    minlength: "name atleast have 4 characters"
                },

                email: {
                    required: "Email cannot be empty",
                },

                mobile: {
                    required: "Mobile number cannot be empty",
                    minlegth: "mobile number atleast have 10 characters"
                },

                course: {
                    required: "course cannot be empty",
                },

                percentage: {
                    required: "percentage cannot be empty",
                    min: "student is not eligible",
                    max: "eligible",
                  
                },
                
                dob:{
                    required: "dob is cannot be empty"
                }
            }
        }).form();
        
        
        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var course = $("#course").val();
            var percentage = $("#percentage").val();
            var dob = $("#dob").val();
            $(".reset").click();

            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "course": course,
                "percentage": percentage,
                "dob": dob,
            }
            
            var students= getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            
            return false;

        }
    });
    
  
    
    function showRegisteredStudents(){
        var students = getDataFromLocalStorage();
        
        var data = "";
        
        if(students.length == 0){
            data = "<h3>No students registred yet....";
            
        }else{
            data += "<table id='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>usn</th>";
            data += "<th>name</th>";
            data += "<th>email</th>";
            data += "<th>mobile</th>";
            data += "<th>dob</th>";
            data += "<th>course</th>";
            data += "<th>percentage</th>";
            data += "</tr></thead>";
            
            for(var i=0;i<students.length;i++){
                var j = i+1;
                data += "<tr>";
                data += "<td>"+j+"</td>";
                data += "<td>"+students[i].usn+"</td>";
                data += "<td>"+students[i].name+"</td>";
                data += "<td>"+students[i].email+"</td>";
                data += "<td>"+students[i].mobile+"</td>";
                data += "<td>"+students[i].dob+"</td>";
                data += "<td>"+students[i].course+"</td>";
                data += "<td>"+students[i].percentage+"</td>";
                data += "</tr>";
            }
            data += "</table>";
        }
        
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength":2
        });
    }
    
    function getDataFromLocalStorage(){
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    }
    
    function updateLocalStorageData(updatedStudentsArr){
        localStorage.setItem("students",JSON.stringify(updatedStudentsArr));
    }

});
