const estado = document.getElementById("estado");

const perfilProveedor = document.getElementById("perfil-proveedor");

const imagenProveedor = document.getElementById("imagen-proveedor");

const nombreProveedor = document.getElementById("nombre-proveedor");

const categoriaProveedor = document.getElementById("categoria-proveedor");

const calificacionProveedor = document.getElementById("calificacion-proveedor");

const ciudadProveedor = document.getElementById("ciudad-proveedor");

const experienciaProveedor = document.getElementById("experiencia-proveedor");

const descripcionProveedor = document.getElementById("descripcion-proveedor");

const listaServicios = document.getElementById("lista-servicios");

const telefonoProveedor = document.getElementById("telefono-proveedor");



// Obtener ID desde la URL

const parametros = new URLSearchParams(window.location.search);

const idProveedor = Number(parametros.get("id"));



// Cargar proveedor

async function cargarProveedor() {

    try {

        estado.textContent = "⏳ Cargando información del proveedor...";

        const respuesta = await fetch("data/proveedores.json");

        if (!respuesta.ok) {

            throw new Error("No se pudo cargar el JSON.");

        }

        const proveedores = await respuesta.json();



        const proveedor = proveedores.find(

            proveedor => proveedor.id === idProveedor

        );



        if (!proveedor) {

            estado.textContent = "❌ Proveedor no encontrado.";

            return;

        }



        mostrarProveedor(proveedor);

    }

    catch (error) {

        estado.textContent = "❌ Error al cargar el proveedor.";

        console.error(error);

    }

}



// Mostrar información

function mostrarProveedor(proveedor) {

    estado.style.display = "none";

    perfilProveedor.hidden = false;



    imagenProveedor.src = proveedor.imagen;

    imagenProveedor.alt = proveedor.nombre;



    nombreProveedor.textContent = proveedor.nombre;



    categoriaProveedor.textContent =
        "🔧 " + proveedor.categoria;



    calificacionProveedor.textContent =
        `⭐ ${proveedor.calificacion} (${proveedor.opiniones} opiniones)`;



    ciudadProveedor.textContent =
        "📍 " + proveedor.ciudad;



    experienciaProveedor.textContent =
        "🛠 " + proveedor.experiencia;



    descripcionProveedor.textContent =
        proveedor.descripcion;



    telefonoProveedor.href =
        `tel:${proveedor.telefono}`;



    listaServicios.innerHTML = "";



    proveedor.servicios.forEach(servicio => {

        const item = document.createElement("li");

        item.textContent = servicio;

        listaServicios.appendChild(item);

    });

}

// Iniciar
cargarProveedor();