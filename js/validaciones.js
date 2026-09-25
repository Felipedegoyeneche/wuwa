const formulario = document.getElementById('form-contacto');

if (formulario) {
  const campoNombre = document.getElementById('nombre');
  const campoCorreo = document.getElementById('correo');
  const campoClave = document.getElementById('clave');
  const campoPersonaje = document.getElementById('personaje-favorito');
  const campoMensaje = document.getElementById('mensaje');
  const mensajeExito = document.getElementById('mensaje-exito');

  
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  // Muestra un error debajo del campo y marca el borde en rojo
  function mostrarError(campo, idError, texto) {
    campo.closest('.campo').classList.add('campo-error');
    document.getElementById(idError).innerText = texto;
  }

  
  function limpiarError(campo, idError) {
    campo.closest('.campo').classList.remove('campo-error');
    document.getElementById(idError).innerText = '';
  }

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); 
    mensajeExito.classList.remove('visible');

    let formularioValido = true;

    
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
    if (!regexNombre.test(campoNombre.value.trim())) {
      mostrarError(campoNombre, 'error-nombre', 'Ingresa un nombre válido (mínimo 3 letras).');
      formularioValido = false;
    } else {
      limpiarError(campoNombre, 'error-nombre');
    }

    
    if (!regexCorreo.test(campoCorreo.value.trim())) {
      mostrarError(campoCorreo, 'error-correo', 'Ingresa un correo con formato válido, ej: nombre@correo.com');
      formularioValido = false;
    } else {
      limpiarError(campoCorreo, 'error-correo');
    }

   
    const regexClave = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!regexClave.test(campoClave.value)) {
      mostrarError(
        campoClave,
        'error-clave',
        'La contraseña necesita mínimo 8 caracteres, 1 mayúscula y 1 número.'
      );
      formularioValido = false;
    } else {
      limpiarError(campoClave, 'error-clave');
    }

   
    if (campoPersonaje.value === '') {
      mostrarError(campoPersonaje, 'error-personaje', 'Selecciona una opción.');
      formularioValido = false;
    } else {
      limpiarError(campoPersonaje, 'error-personaje');
    }

    
    const largoMensaje = campoMensaje.value.trim().length;
    if (largoMensaje < 10) {
      mostrarError(campoMensaje, 'error-mensaje', 'Cuéntanos un poco más (mínimo 10 caracteres).');
      formularioValido = false;
    } else if (largoMensaje > 300) {
      mostrarError(campoMensaje, 'error-mensaje', 'Máximo 300 caracteres, resume un poco tu mensaje.');
      formularioValido = false;
    } else {
      limpiarError(campoMensaje, 'error-mensaje');
    }

    
    if (formularioValido) {
      mensajeExito.classList.add('visible');
      formulario.reset();
    }
  });

  
  campoClave.addEventListener('input', function () {
    const errores = [];
    if (campoClave.value.length < 8) errores.push('8+ caracteres');
    if (!/[A-Z]/.test(campoClave.value)) errores.push('1 mayúscula');
    if (!/[0-9]/.test(campoClave.value)) errores.push('1 número');

    const ayuda = document.getElementById('error-clave');
    if (campoClave.value.length === 0) {
      ayuda.innerText = '';
    } else if (errores.length > 0) {
      ayuda.innerText = 'Falta: ' + errores.join(', ');
    } else {
      ayuda.innerText = '';
    }
  });
}
