using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPITest
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web

            //se le agrego un paquete NuGet al proyecto de la API llamado " Microsoft.Asp.Net.Cors 5.2.7 "
            //esto para que cualquiera pueda ejecutar nuestra API

            //para activar la configuracion del paquete NuGet se emplean estas lineas de codigo
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);






            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
