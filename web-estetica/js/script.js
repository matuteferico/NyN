// Función para solicitar turnos de tratamientos
function solicitarTurno(nombreTratamiento) {
    const telefonoEmpresa = "543516642537"; 
    const mensaje = `Hola! Estuve viendo la página web y me interesa solicitar un turno para el tratamiento de: *${nombreTratamiento}*. ¿Qué disponibilidad horaria tienen?`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsapp = `https://wa.me/${telefonoEmpresa}?text=${mensajeCodificado}`;
    window.open(urlWhatsapp, '_blank');
}

// NUEVA FUNCIÓN: Para consultar stock de productos en la tienda
function consultarStock(categoriaProducto) {
    const telefonoEmpresa = "543516642537"; 
    const mensaje = `Hola! Estuve viendo la tienda en su página web y quería consultar por los productos que tienen en stock dentro de la categoría: *${categoriaProducto}*.`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsapp = `https://wa.me/${telefonoEmpresa}?text=${mensajeCodificado}`;
    window.open(urlWhatsapp, '_blank');
}