$(document).ready(function () {
    let reportdeskemail = sessionStorage.getItem('reportdeskemail');
    if (reportdeskemail != null) {

        $(".wrapper").hide();
        $('#exampleFormControlTextarea1').show();
        $("#logoutbtn").show();
        $("#topmaindiv").show();
        $('.chatheading').removeClass("titlecenter");
        $("#sidebar").show();
        $("#gptbody").show();
        $('#exampleFormControlTextarea1').show();
        $("#userprofileid").val(reportdeskemail);
        $("#sidebarCollapse").show();
       
       


        $(".user_info").append('<h6>' + reportdeskemail + '</h6><p><span class="online_animation"></span> Online</p>')
        var formData = new FormData();

        userprofileid = sessionStorage.getItem('reportdeskemail');
        formData.append('question', $('#exampleFormControlTextarea1').val());
        formData.append('email', userprofileid);

        $.ajax({
            url: '/fetchhistory',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {


                $.each(data, function (index, value) {

                    console.log(data);
                    $('#questionappend').append('<li class="questionli" onclick="sendParagraphText(this)"> ' + value[1] + '</li>');
                    scrollToBottomPrompt()

                });
            }
        });
    } else {
        $(".wrapper").show();
        $("#sidebar").hide();
        $(".question").hide()
        $("#gptbody").hide();
        $(".answer").hide()
        $('.chatheading').addClass("titlecenter");
        $("#topmaindiv").show();
        $('#exampleFormControlTextarea1').hide();
        $('#exampleFormControlTextarea1').prop('readonly', true);
        $("#logoutbtn").hide();
        $("#sidebarCollapse").hide();
        $(".user_info").append('<h6>' + "User" + '</h6><p><span class="offline_animation"></span> Offline</p>')
    }

});
$(document).ready(function () {
    $("#searchq").click(function () {

        $('#questionappend').append('<li class="questionli" onclick="sendParagraphText(this)"> ' + $('#exampleFormControlTextarea1').val() + '</li>');
        $('#gptbody').append('<div class="footer question"><p>' + $('#exampleFormControlTextarea1').val() + '</p></div>');
        scrollToBottomPrompt()

        var formData = new FormData();

        userprofileid = sessionStorage.getItem('reportdeskemail');
        formData.append('question', $('#exampleFormControlTextarea1').val());
        formData.append('usersquestions', $('#usersquestions').val());
        formData.append('email', userprofileid);
        $('#exampleFormControlTextarea1').prop('readonly', true);

        $('.spinner').addClass("showspeaner");
        $('.spinner').removeClass("hidespeaner");

        scrollToBottom()

        $.ajax({
            url: '/anser',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {


                $('#gptbody').append('<div class="footer answer"><p>' + data + '</p></div>');
                $('#exampleFormControlTextarea1').val("")
                $("#topmaindiv").hide();
                $('#exampleFormControlTextarea1').prop('readonly', false);
                scrollToBottom()

                $('.spinner').addClass("hidespeaner");
                $('.spinner').removeClass("showspeaner");
                $('#usersquestions').val($('#usersquestions').val()+1)


            }
        });
    });
});

// Get the input field
var input = document.getElementById("exampleFormControlTextarea1");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        let questionstring = $('#exampleFormControlTextarea1').val()
        let more = questionstring.search("more");
        let additionals = questionstring.search("additional");

        if ($('#exampleFormControlTextarea1').val() == '') {
            alert("Please provide question");

        } else if (additionals != -1) {
          
            var formData = new FormData();

            userprofileid = sessionStorage.getItem('reportdeskemail');
            formData.append('question', $('#exampleFormControlTextarea1').val());
            
            
            formData.append('email', userprofileid);
            $('#exampleFormControlTextarea1').prop('readonly', true);

            $('.spinner').addClass("showspeaner");
            $('.spinner').removeClass("hidespeaner");

            scrollToBottom()

            $.ajax({
                url: '/more',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {

                    $('#gptbody').append('<div class="footer answer"><p>' + data + '</p></div>');
                    $('#exampleFormControlTextarea1').val("")
                    $('#exampleFormControlTextarea1').prop('readonly', false);
                    scrollToBottom()

                    $('.spinner').addClass("hidespeaner");
                    $('.spinner').removeClass("showspeaner");
                   


                }
            });

        } else if (more != -1) {
          
            var formData = new FormData();

            userprofileid = sessionStorage.getItem('reportdeskemail');
            formData.append('question', $('#exampleFormControlTextarea1').val());
            formData.append('email', userprofileid);
            $('#exampleFormControlTextarea1').prop('readonly', true);

            $('.spinner').addClass("showspeaner");
            $('.spinner').removeClass("hidespeaner");

            scrollToBottom()

            $.ajax({
                url: '/more',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {

                    $('#gptbody').append('<div class="footer answer"><p>' + data + '</p></div>');
                    $('#exampleFormControlTextarea1').val("")
                    $('#exampleFormControlTextarea1').prop('readonly', false);
                    scrollToBottom()

                    $('.spinner').addClass("hidespeaner");
                    $('.spinner').removeClass("showspeaner");
                   


                }
            });
        }
        else {


            $('#questionappend').append('<li class="questionli" onclick="sendParagraphText(this)"> ' + $('#exampleFormControlTextarea1').val() + '</li>');
            $('#gptbody').append('<div class="footer question"><p>' + $('#exampleFormControlTextarea1').val() + '</p></div>');
            scrollToBottomPrompt()

            var formData = new FormData();

            userprofileid = sessionStorage.getItem('reportdeskemail');
            formData.append('question', $('#exampleFormControlTextarea1').val());
            formData.append('usersquestions', $('#usersquestions').val());
            formData.append('email', userprofileid);
            $('#exampleFormControlTextarea1').prop('readonly', true);

            $('.spinner').addClass("showspeaner");
            $('.spinner').removeClass("hidespeaner");

            scrollToBottom()

            $.ajax({
                url: '/anser',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {


                    $('#gptbody').append('<div class="footer answer"><p>' + data + '</p></div>');
                    $('#exampleFormControlTextarea1').val("")
                    $('#exampleFormControlTextarea1').prop('readonly', false);
                    $("#topmaindiv").hide();
                    scrollToBottom()

                    $('.spinner').addClass("hidespeaner");
                    $('.spinner').removeClass("showspeaner");
                    $('#usersquestions').val($('#usersquestions').val()+1)


                }
            });
        }
    }
});
$(document).ready(function () {
    $("#signupformsubmit").click(function () {

        // Get session data
        var email = sessionStorage.getItem('reportdeskemail');
        if (email != null) {
            console.log("User Exits Please login");
        } else {

            sessionStorage.setItem('reportdeskemail', $('#signupemail').val());

            var formData = new FormData();

            formData.append('email', $('#signupemail').val());
            formData.append('password', $('#signuppassword').val());
            // formData.append('name', $('#signupname').val());
            // formData.append('phone', $('#signupphone').val());
            // formData.append('Orgnization', $('#Orgnization').val());



            $.ajax({
                url: '/saveCustomer',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    $("#userprofileid").val(reportdeskemail);

                    $(".wrapper").hide();
                    $('.chatheading').removeClass("titlecenter");
                    $("#logoutbtn").show();
                    $("#sidebar").show();
                    $("#topmaindiv").show();
                    $('#exampleFormControlTextarea1').show();
                    $(".question").show()
                    $("#gptbody").show();
                    $(".answer").show()
                    $("#sidebarCollapse").show();
                    $('#exampleFormControlTextarea1').prop('readonly', false);
                    console.log()
                    $.each(data, function (index, value) {

                        console.log(data);
                        $('#questionappend').append('<li><a href="#"> <span>' + value[1] + '</span></a></li>');
                        scrollToBottomPrompt()

                    });

                }
            });
        }
    });
});


$(document).ready(function () {
    $("#signinformsubmit").click(function () {
        var formData = new FormData();


        formData.append('email', $('#signinemail').val());
        formData.append('password', $('#signinpassword').val());


        $.ajax({
            url: '/signin',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data)

                
                if (data != 'User does not exist' && data != 'Password is incorrect') {
                   
                    $("#userprofileid").val($("#signinemail").val());
                    $("#sidebar").show();
                    $(".wrapper").hide();
                    $('.chatheading').removeClass("titlecenter");
                    $(".question").show()
                    $("#gptbody").show();
                    $("#sidebarCollapse").show();
                    $("#topmaindiv").hide();
                    $('#exampleFormControlTextarea1').show();
                    $("#logoutbtn").show();
                    $(".answer").show()
                    $('#exampleFormControlTextarea1').prop('readonly', false);
                    $(".user_info").html('<h6>' + $("#signinemail").val() + '</h6><p><span class="online_animation"></span> Online</p>')
                    $.each(data, function (index, value) {

                        console.log(data);
                        $('#questionappend').append('<li class="questionli" onclick="sendParagraphText(this)"> ' + value[1] + '</li>');
                        scrollToBottomPrompt()

                    });
                    var email = sessionStorage.getItem('email');
                    if (email != null) {
                        console.log("User Exits");
                    } else {

                        sessionStorage.setItem('reportdeskemail', $('#signinemail').val());
                    }


                } 
                //else if (data == 'No User Find' && data != 'User does not exist') {
                //     alert(data)
                //     $("#userprofileid").val(reportdeskemail);
                //     $(".wrapper").hide();
                //     $(".question").show()
                //     $(".answer").show()
                //     $('#exampleFormControlTextarea1').prop('readonly', false);
                //     $.each(data, function (index, value) {

                //         console.log(data);
                //         $('#questionappend').append('<li class="questionli" onclick="sendParagraphText(this)"> ' + value[1] + '</li>');
                //         scrollToBottomPrompt()

                //     });
                //     var email = sessionStorage.getItem('email');
                //     if (email != null) {
                //         console.log("User Exits");
                //     } else {

                //         sessionStorage.setItem('reportdeskemail', $('#signinemail').val());
                //     }
                // }
                else {

                    alert(data);
                    $(".wrapper").show();

                    $(".question").hide()
                    $(".answer").hide()
                    $('#exampleFormControlTextarea1').hide();
                }
            }
        });
    });
});

$("#logoutbtn").click(function () {

    // Get session data
    var email = sessionStorage.getItem('reportdeskemail');
    if (email != null) {
        sessionStorage.removeItem("reportdeskemail")
        console.log("User Exits");
        $(".wrapper").show();
        $('.chatheading').addClass("titlecenter");
        $("#sidebarCollapse").hide();
        $("#gptbody").hide();
        $("#sidebar").hide();
        $("#logoutbtn").hide();
        $(".user_info").html('')
        $('#exampleFormControlTextarea1').hide();
        $('#questionappend').html('');
    } else {
        sessionStorage.removeItem("reportdeskemail")
        $("#sidebarCollapse").hide();
        $(".wrapper").show();
        $(".user_info").html(' ')

        $('#questionappend').html('');
    }



});

$(document).ready(function () {
    // Get Data

    $.ajax({
        url: '/allquestion',
        type: 'GET',
        headers: {

            'Access-Control-Allow-Origin': '*'
        },
        success: function (response) {

        },
        error: function (error) {
            console.log(error);
        }
    });


});
//SighUp JS
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

function scrollToBottom() {
    var container = document.getElementById("gptbody");
    container.scrollTop = container.scrollHeight;
}

function scrollToBottomPrompt() {
    var container = document.getElementById("questionappend");
    container.scrollTop = container.scrollHeight;
}



function sendParagraphText(element) {
    var text = element.textContent.trim();
   
        scrollToBottomPrompt()

        var formData = new FormData();

        userprofileid = sessionStorage.getItem('reportdeskemail');
        formData.append('question', text);
        formData.append('email', userprofileid);
        $('#exampleFormControlTextarea1').prop('readonly', true);
        $('#gptbody').append('<div class="footer question"><p>' + text + '</p></div>');
        $('.spinner').addClass("showspeaner");
        $('.spinner').removeClass("hidespeaner");

        scrollToBottom()

        $.ajax({
            url: '/anser',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {


                $('#gptbody').append('<div class="footer answer"><p>' + data + '</p></div>');
                $('#exampleFormControlTextarea1').val("")
                $('#exampleFormControlTextarea1').prop('readonly', false);
                $("#topmaindiv").hide();
                $("#sidebarCollapse").hide();
                scrollToBottom()

                $('.spinner').addClass("hidespeaner");
                $('.spinner').removeClass("showspeaner");


            }
        });
}



