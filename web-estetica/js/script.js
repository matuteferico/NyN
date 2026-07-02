function solicitarTurno(nombreTratamiento) {
    const telefonoEmpresa = "543516642537"; 
    const mensaje = `Hola! Estuve viendo la página web y me interesa solicitar un turno para el tratamiento específico de: *${nombreTratamiento}*. ¿Qué disponibilidad horaria tienen?`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsapp = `https://wa.me/${telefonoEmpresa}?text=${mensajeCodificado}`;
    window.open(urlWhatsapp, '_blank');
}