//acciones en Registro.html

const URL_API = "http://localhost:50783//api/Usuario/";

var editar = false;

        window.onload = function() {
           var id = $.urlParam('id');
           console.log(id);
           if(id != null){
               editar = true;
               $("#txtidusuario").val(id);
               PintarUsuario(id);
           }
        };

        $.urlParam = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null) {
            return null;
            }
            return decodeURI(results[1]) || 0;
        }

        function IrFormularioInicio(){
            window.location = "Inicio.html";
        }

        function PintarUsuario(idUsuario){

            $.get(URL_API + idUsuario)
            .done(function( response ) {
                console.log(response);
                $("#txtdocumento").val(response.DocumentoIdentidad),
                $("#txtnombres").val(response.Nombres),
                $("#txttelefono").val(response.Telefono),
                $("#txtcorreo").val(response.Correo),
                $("#txtciudad").val(response.Ciudad)
            });
        }


        function GuardarUsuario(){
            if(editar){
                
                var data = {
                    IdUsuario : $("#txtidusuario").val(),
                    DocumentoIdentidad : $("#txtdocumento").val(),
                    Nombres : $("#txtnombres").val(),
                    Telefono : $("#txttelefono").val(),
                    Correo : $("#txtcorreo").val(),
                    Ciudad : $("#txtciudad").val()
                }

                $.ajax({
                method: "PUT",
                url: URL_API,
                contentType: 'application/json',
                data: JSON.stringify(data), // access in body
                })
                .done(function( response ) {
                    console.log(response);
                    if(response){
                        alert("Se guardaron los cambios");
                        window.location = "Lista.html";
                    }else{
                        alert("Error al Modificar")
                    }
                });

            }else{

                var data = {
                    DocumentoIdentidad : $("#txtdocumento").val(),
                    Nombres : $("#txtnombres").val(),
                    Telefono : $("#txttelefono").val(),
                    Correo : $("#txtcorreo").val(),
                    Ciudad : $("#txtciudad").val()
                }

                $.post(URL_API, data)
                .done(function(response) {
                    console.log(response);
                    if(response){
                        alert("Usuario Creado");
                        window.location = "Lista.html";
                    }else{
                        alert("Error al crear");
                    }
                });
            }

        }