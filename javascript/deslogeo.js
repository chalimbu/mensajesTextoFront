async function deslogeoApp() {
    console.log('entro a la funcion desloge');
    const token = sessionStorage.getItem('token');
    console.log(token)

    let config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }
    console.log(config)

    try {
        let res = await axios.post('https://historic-hot-springs-43698.herokuapp.com/users/logout', {}, config);
        location.replace('../index.html');
    } catch (e) {
        console.log(e)
        location.replace('../index.html');
    }


}