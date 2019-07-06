async function agregarCliente() {
    //console.log('entro al login')
    var nombre = document.agregarclientes.nombre.value;
    var numero = document.agregarclientes.numero.value;
    //console.log(nombre + " " + numero);
    const token = sessionStorage.getItem('token');
    let config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    //console.log(config)

    try {
        let res = await axios.post('https://historic-hot-springs-43698.herokuapp.com/cliente', {
            nombre,
            numero
        }, config);
        //location.replace('../index.html');
        document.getElementById('resultado').innerHTML = "Ingreso correcto";
        document.location.reload(true);
        //document.getElementById("agregarclientes").reset();
    } catch (e) {
        console.log(e)
        document.getElementById('resultado').innerHTML = "El numero ya existe o vuelva a logearse";
    }
}

async function cargarClientes() {
    const token = sessionStorage.getItem('token');
    let config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    console.log(config)

    try {
        let res = await axios.get('https://historic-hot-springs-43698.herokuapp.com/clientes', config);
        //location.replace('../index.html');
        console.log(res.data[0]._id);
        //document.getElementById('tablaclientes').innerHTML = "vuelva a logearse";
        var tabla = '<table style="width:100%"><tr><th>Nombre</th><th>Numero</th><th>Eliminar</th></tr>';
        for (i = 0; i < res.data.length; i++) {
            //var idObjeto = res.data[i]._id;
            sessionStorage.setItem('idCliente' + i, res.data[i]._id);
            tabla += '<tr><th>' + res.data[i].nombre + '</th><th>' + res.data[i].numero + '</th><th>';
            tabla += "<form name=\'eliminar\'><input value=\'eliminar\' type=\'button\' onclick=\'eliminarCliente(" + i + ")\' /> </form>";
            //console.log(idObjeto);
        }
        tabla += '</table>';
        document.getElementById('tablaclientes').innerHTML = tabla;
    } catch (e) {
        document.getElementById('tablaclientes').innerHTML = "vuelva a logearse";
    }
}

async function eliminarCliente(id) {
    console.log(id)
    const idCliente = sessionStorage.getItem('idCliente' + id);
    const token = sessionStorage.getItem('token');
    let config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    console.log('entro a eliminar clientes');

    try {
        let res = await axios.delete('https://historic-hot-springs-43698.herokuapp.com/tasks/' + idCliente, config);
        //location.replace('../index.html');
        document.getElementById('resultado').innerHTML = "eliminado correcto";
        document.location.reload(true);
    } catch (e) {
        console.log(e);
        document.getElementById('resultado').innerHTML = "no se pudo eliminar";
    }
}