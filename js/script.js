$(document).ready(function () {
    // Get/obtener datos del servidor con jQuery
    $('#llenarTabla').on('click', function () {
        $.ajax({
            url: '/sugerencia',
            method: 'GET',
            contentType: 'application/json',
            success: function (response) {
                dibujarTabla(response);
            }
        });
    
    });
     //Funcion para borrar
     $('#borrar').on('click', function (event) {
        //Prevenimos que se envie el formulario y recargue la pagina
        event.preventDefault();

        //let borrar = $('col');
        //Validar formulario antes de armar JSON
        //if (validarFormulario(borrar)) {
            //Metodo jQuery para DELETE con Ajax
            $.ajax({
                url: '/sugerencia',
                method: 'DELETE',
                contentType: 'application/json',
                data: JSON.stringify({
                    nombre: input[0].value,
                    apellido: input[1].value,
                    correo: input[2].value,
                    telefono: input[3].value,
                    sugerencia: input[4].value                                       
                }),
                success: function (response) {
                    console.log(response);
                    limpiar(input);
                    $('#borrar').click();
                }
            });
            
        //};
    });
   
    

    //Enviar datos al servidor
    $('#nuevoRegistro').on('click', function (event) {
        //Prevenimos que se envie el formulario y recargue la pagina
        event.preventDefault();

        let input = $('input');
        //Validar formulario antes de armar JSON
        if (validarFormulario(input)) {
            //Metodo jQuery para POST con Ajax
            $.ajax({
                url: '/sugerencia',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    nombre: input[0].value,
                    apellido: input[1].value,              
                    correo: input[2].value,
                    telefono: input[3].value,
                    sugerencia: input[4].value                                 
                }),
                success: function (response) {
                    console.log(response);
                    limpiar(input);
                    $('#llenarTabla').click();
                }
            });
            
        };
    });

    $('#borrar').on('click', function (event) {
        //Prevenimos que se envie el formulario y recargue la pagina
        event.preventDefault();

        //let borrar = $('col');
        //Validar formulario antes de armar JSON
        //if (validarFormulario(borrar)) {
            //Metodo jQuery para DELETE con Ajax
            $.ajax({
                url: '/sugerencia',
                method: 'DELETE',
                contentType: 'application/json',
                data: JSON.stringify({
                    nombre: input[0].value,
                    apellido: input[1].value,
                    correo: input[2].value,
                    telefono: input[3].value,
                    sugerencia: input[4].value                                       
                }),
                success: function (response) {
                    console.log(response);
                    limpiar(input);
                    $('#borrar').click();
                }
            });
            
        //};
    });

    //Función para dibujar la tabla
    function dibujarTabla(res) {
        //Obtenemos el cuerpo de la tabla
        var tableBody = $('#tableBody');
        //Limpiamos el html interno
        tableBody.html('');

        //Ciclo for para llenar la tabla
        for (let i = 0; i < res.sugerencia.length; i++) {
            //Con jQuery podemos crear un elemento utilzando
            //$('descripcion del elemento completo')
            let tr = $('<tr class="filas"></tr>');
            //Id
            let tdId = $('<td class="col"></td>').html(res.sugerencia[i].id);
            tr.append(tdId); //append es similar a appendChild en JavaScript Vainilla
            //Nombre
            let tdNom = $('<td class="col"></td>').html(res.sugerencia[i].nombre);
            tr.append(tdNom);
            //Apellido
            let tdApe = $('<td class="col"></td>').html(res.sugerencia[i].apellido);
            tr.append(tdApe);

            //Correo
            let tdCo = $('<td class="col"></td>').html(String(res.sugerencia[i].correo));
            tr.append(tdCo);
            //Telefono
            let tdTel = $('<td class="col"></td>').html(String(res.sugerencia[i].telefono));
            tr.append(tdTel);
            //Sugerencia
            let tdSug = $('<td class="col"></td>').html(res.sugerencia[i].sugerencia);
            tr.append(tdSug);
           
            //Agregarmos el tr al tbody
            tableBody.append(tr);
        }
    };

    //Funcion para limpiar el formulario
    function limpiar(input) {
        input.each(function() {
            //Limpiamos los campos
            input.val('');
            //Removemos las clases utilizadas en el validar
            input.removeClass("is-valid", "is-invalid")
        })
    };

});