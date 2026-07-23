const contenedorProveedores = document.getElementById("contenedor-proveedores");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtro-categoria");
const ordenarProveedores = document.getElementById("ordenar-proveedores");
const estado = document.getElementById("estado");
const contadorProveedores = document.getElementById("contador-proveedores");


let proveedores = [];


// Cargar proveedores desde JSON

async function cargarProveedores() {

    try {

        estado.textContent = "⏳ Cargando proveedores...";


        const respuesta = await fetch("data/proveedores.json");


        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo");
        }


        proveedores = await respuesta.json();


        estado.textContent = "";


        mostrarProveedores(proveedores);


    } catch (error) {

        estado.textContent = "❌ Error al cargar los proveedores.";

        console.error(error);

    }

}



// Crear tarjetas

function mostrarProveedores(lista) {


    contenedorProveedores.innerHTML = "";


    contadorProveedores.textContent =
        `${lista.length} proveedores encontrados`;



    if (lista.length === 0) {

        estado.textContent =
            "🚫 No se encontraron proveedores.";

        return;

    }


    estado.textContent = "";



    lista.forEach(proveedor => {


        const tarjeta = document.createElement("article");


        tarjeta.classList.add("tarjeta-proveedor");



        tarjeta.innerHTML = `


            <img 
                src="${proveedor.imagen}"
                alt="Foto de ${proveedor.nombre}"
                class="imagen-proveedor">


            <h2>
                ${proveedor.nombre}
            </h2>


            <p class="categoria">

                ${proveedor.categoria}

            </p>


            <p>

                ⭐ ${proveedor.calificacion}
                (${proveedor.opiniones} opiniones)

            </p>


            <p>

                📍 ${proveedor.ciudad}

            </p>


            <p>

                🛠 ${proveedor.experiencia}

            </p>



            <div class="acciones-proveedor">


                <a 
                    href="proveedor.html?id=${proveedor.id}"
                    class="boton-secundario">

                    Ver perfil

                </a>



                <a 
                    href="tel:${proveedor.telefono}"
                    class="boton-principal">

                    📞 Llamar

                </a>


            </div>


        `;


        contenedorProveedores.appendChild(tarjeta);


    });


}



// Buscar y filtrar

function filtrarProveedores() {


    const textoBusqueda =
        buscador.value.toLowerCase();



    const categoriaSeleccionada =
        filtroCategoria.value;



    let resultado = proveedores.filter(proveedor => {



        const coincideNombre =
            proveedor.nombre
            .toLowerCase()
            .includes(textoBusqueda);



        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            proveedor.categoria === categoriaSeleccionada;



        return coincideNombre && coincideCategoria;


    });



    ordenarLista(resultado);


}



// Ordenamiento

function ordenarLista(lista) {


    const orden =
        ordenarProveedores.value;



    if (orden === "mejor") {


        lista.sort((a, b) =>
            b.calificacion - a.calificacion
        );


    }


    if (orden === "menor") {


        lista.sort((a, b) =>
            a.calificacion - b.calificacion
        );


    }


    if (orden === "az") {


        lista.sort((a, b) =>
            a.nombre.localeCompare(b.nombre)
        );


    }


    if (orden === "za") {


        lista.sort((a, b) =>
            b.nombre.localeCompare(a.nombre)
        );


    }


    mostrarProveedores(lista);


}



// Eventos

buscador.addEventListener(
    "input",
    filtrarProveedores
);


filtroCategoria.addEventListener(
    "change",
    filtrarProveedores
);


ordenarProveedores.addEventListener(
    "change",
    filtrarProveedores
);



// Iniciar aplicación

cargarProveedores();