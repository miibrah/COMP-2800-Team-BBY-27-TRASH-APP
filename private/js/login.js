// const { post } = require("../../API/routes");

$(document).ready(function () {

    console.log("hello");
    // $("#submit").click(function () {

    //     $.ajax({
    //         url: "/authenticate",
    //         type: "POST",
    //         dataType: "JSON",
    //         data: {
    //             email: $("#email").val(),
    //             password: $("#password").val()
    //         },
    //         success: function (data) {

    //             if (data['status'] == "success") {
    //                 window.location.replace("/landing");
    //             } else {
    //                 $("#errorMsg").html(data['msg']);
    //             }

    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("body").text(jqXHR.statusText);
    //             console.log("asdasdasjaskdjhaksdhakjdshakjdh");
    //         }
    //     });

    // });

    const form = document.getElementById('reg-form');
    form.addEventListener('submit', registerUSER);

    async function registerUSER(event) {
        event.preventDefault();
        const username = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const result = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                username, 
                password
            })
        }).then((res) => res.json())

        if(result.status === 'ok') {
            //everything went fine
            alert('Success');
            document.getElementById('alerts').style.color = "lightGreen";
            document.getElementById('alerts').innerHTML = "Success";

            window.location.replace("/landing.html");
        } else {
            alert(result.error);
            
            // let message = "<p>";
            // message += result['error'];
            // message += "</p>"

            // var txt = '{"name":"John", "age":30, "city":"New York"}'
            // var obj = JSON.parse(txt);
            // document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;

            // let message = result.error;

            // let testM = JSON.parse(message);
            // let testM = JSON.parse(result);
            let tryMe = 'try again';
            document.getElementById('alerts').innerText = tryMe;
        }
        console.log(result)
    }


    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', login);

    async function login(event) {
        event.preventDefault();
        const username = document.getElementById('emailLogin').value;
        const password = document.getElementById('passwordLogin').value;

        const result = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                username, 
                password
            })
        }).then((res) => res.json())

        if(result.status === 'ok') {
            //everything went fine
            console.log('Got the token: ', result.data);
            alert('Success');
            window.location.replace("/landing.html");
        } else {
            alert(result.error);
            
            let tryMe = 'try again';
            document.getElementById('alerts').innerText = tryMe;
        }
        console.log(result)
    }

    // $('#hello').click(myFunc());

    // function myFunc() {
    //     console.log('hello');
    // }

    $( "#hello" ).click(function() {
        console.log("hello");
      });
});