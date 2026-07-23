const contenedorDestacado = document.getElementById("proveedor-destacado");

async function cargarProveedorDestacado() {

    try {

        const respuesta = await fetch("data/proveedores.json");

        if (!respuesta.ok) {

            throw new Error("No se pudo cargar el JSON.");

        }

        const proveedores = await respuesta.json();

        proveedores.sort((a, b) => {

            if (b.calificacion !== a.calificacion) {

                return b.calificacion - a.calificacion;

            }

            return b.opiniones - a.opiniones;

        });

        const proveedor = proveedores[0];

        mostrarProveedorDestacado(proveedor);

    }

    catch (error) {

        contenedorDestacado.innerHTML = "<p>No se pudo cargar el proveedor destacado.</p>";

        console.error(error);

    }

}

function mostrarProveedorDestacado(proveedor) {

    contenedorDestacado.innerHTML = `

        <article class="tarjeta-destacado">

            <img
                src="${proveedor.imagen}"
                alt="${proveedor.nombre}"
                class="imagen-destacado">

            <div class="info-destacado">

                <h3>${proveedor.nombre}</h3>

                <p><strong>${proveedor.categoria}</strong></p>

                <p>⭐ ${proveedor.calificacion} (${proveedor.opiniones} opiniones)</p>

                <p>📍 ${proveedor.ciudad}</p>

                <p>${proveedor.descripcion}</p>

                <a
                    href="proveedor.html?id=${proveedor.id}"
                    class="boton-principal">

                    Ver perfil

                </a>

            </div>

        </article>

    `;

}

cargarProveedorDestacado();