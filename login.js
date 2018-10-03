
list = []

function store(){
 // entered data from the login-form
 var name = document.getElementById('name').value;
 var pd = document.getElementById('password').value;

let jsonObj = JSON.stringify({
    username: name,
    password: pd
  });

  console.log(jsonObj);

/*
 fetch('http://localhost:3000/users/1', {
    method: 'PUT',
    body: {
      username: name,
      password: pd
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    console.log("Response was: ", response);  
    
    response.json()})
  .then(json => console.log(json))
}


fetch('http://localhost:3000/users/') 
  .then(response => response.json())
  .then(json => console.log(json))



// check if stored data from register-form is equal to entered data in the   login-form

*/