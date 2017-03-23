/**
 * Created by nlangloi10 on 2/16/17.
 */


$(document).ready(function() {

    //alert("jQuery is active on page load");

    $("form#my_form").submit(function(e) {


        //loop through each required field and simply change border color to red for invalid fields



        $(" #my_form input[doJsValidate=true], " +
            "#my_form select[doJsValidate=true], " +
            "#my_form textarea[doJsValidate=true]").each(function(){


        /*
        $("#my_form input").each(function() {
        */

            var proceed = true;                     // this is called a "boolean" type of variable
                                                    // as it is either true or false (1 or 0)


            $(this).css('border-color','');         // reset border color
            if(!$.trim($(this).val())){             // if this field is empty
                $(this).css('border-color','red');  // change border color to red
                //alert("Field is empty!");
                proceed = false;                    // set do not proceed flag
            }









            //check for invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {

                $(this).css('border-color','red');  // change border color to red
                alert("Email is invalid!");
                proceed = false;                    // set do not proceed flag

            }




            //if (proceed == true) {
            if (proceed) {        // everything looks good (proceed == TRUE)
                
                return;          // submit form
            }







            e.preventDefault();  // otherwise prevent the "submit" action on the form from taking place

        });
    });
});