let users = []
let keys = []
async function getUsers(){
    const {username} = await fetch('https://random-data-api.com/api/v2/users').then(r => r.json() )
    users.push(username);
    console.log(users)
    alert(users)
 }

 async function getPassword(){
    const {password} = await fetch('https://random-data-api.com/api/v2/users').then(r => r.json() )
    keys.push(password);
    console.log(password)
    alert(password)
 }
 
 
function submit(){
    let user = document.getElementById('user').value
    let pass = document.getElementById('password').value
    if (users.includes(user) && keys.includes(pass)){
            alert('Acceso exitoso')
        }

    else{
        alert('Registrese para iniciar sesion')
    }
}


