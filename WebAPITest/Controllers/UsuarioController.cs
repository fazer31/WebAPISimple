using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPITest.Models;
using WebAPITest.Data;

namespace WebAPITest.Controllers
{
    public class UsuarioController : ApiController
    {

        //EL CONTROLADOR ES COMO LA INTERFAZ QUE SE EMPLEA PARA LLAMAR AL API

        //se modifican los metodos del controlador para adecuarlos a nuestros metodos creados de UsuarioData

        // GET api/<controller>
        public List<Usuario> Get() //listar datos
        {
            return UsuarioData.Listar();
        }

        // GET api/<controller>/5
        public Usuario Get(int id) //obtener un dato
        {
            return UsuarioData.Obtener(id);
        }

        // POST api/<controller>
        public bool Post([FromBody]Usuario oUsuario) //agregar datos
        {
            return UsuarioData.Registrar(oUsuario);
        }

        // PUT api/<controller>/5
        public bool Put([FromBody]Usuario oUsuario) //modificar datos
        {
            return UsuarioData.Modificar(oUsuario);
        }

        // DELETE api/<controller>/5
        public bool Delete(int id) //eliminar datos
        {
            return UsuarioData.Eliminar(id);
        }
    }
}