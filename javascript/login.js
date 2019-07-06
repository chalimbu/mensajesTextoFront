async function Login() {
    //console.log('entro al login')
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;

    try {
        let res = await axios.post('https://historic-hot-springs-43698.herokuapp.com/users/login', {
                "name": usuario,
                "password": password
            })
            //console.log(res.data.token)
        sessionStorage.setItem('token', res.data.token); //And retrieve it using: sessionStorage.getItem('token');
        //console.log(sessionStorage.getItem('token'))
        console.log(res.data);
        location.replace('./pages/menu.html');
    } catch (e) {
        console.log(e)
        alert('Logeo incorrecto');
        console.log('login incorrecto');
    }

}