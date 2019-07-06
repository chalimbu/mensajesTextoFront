async function enviarMensaje() {

    var mensaje = document.enviarmensaje.mensaje.value;

    //console.log(nombre + " " + numero);
    const token = sessionStorage.getItem('token');
    let config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    //console.log(config)

    try {
        let res = await axios.post('https://historic-hot-springs-43698.herokuapp.com/enviarMensaje', {
            mensaje
        }, config);
        //location.replace('../index.html');
        document.getElementById('resultado').innerHTML = res;
        var tabla = '<table style="width:100%"><tr><th>id</th><th>Resultado</th></tr>';
        for (i = 0; i < res.data.length; i++) {
            tabla += '<tr><th>' + res.data[i].id + '</th><th>' + res.data[i].mensaje + '</th><th></tr>';
        }
        tabla += '</table>';
        document.getElementById('resultado').innerHTML = tabla;
    } catch (e) {
        console.log(e)
        document.getElementById('resultado').innerHTML = "Error en el envio";
    }
}