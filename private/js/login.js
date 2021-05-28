// const { post } = require("../../API/routes");

$(document).ready(function () {

    console.log("hello");
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

    $( "#hello" ).click(function() {
        console.log("hello");
      });
});