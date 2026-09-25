const btntheme = document.getElementById('btn-theme');
if (btntheme){
  btntheme.onclick = function(){
    document.body.classList.toggle('dark-mode');
  };
}

const btntogglemedia = document.getElementById('btn-toggle-media');
let mostrandoImagen = true ;

if (btntogglemedia){
  const imagen = document.getElementById('media-imagen');
  const video = document.getElementById('media-video');
  btntogglemedia.onclick = function (){
    if (mostrandoImagen){
      imagen.classList.add('media-oculto');
      video.classList.remove('media-oculto');
      btntogglemedia.innerText = 'Ver imagen';
      mostrandoImagen = false;

    }else {
      video.classList.add('media-oculto');
      // Reasignar el src detiene el video de YouTube
      video.src = video.src;
      imagen.classList.remove('media-oculto');
      btntogglemedia.innerText = 'Ver video';
      mostrandoImagen =true;
    }

  }
}

const btnafinidad = document.getElementById('btn-afinidad');
if (btnafinidad){
  btnafinidad.onclick = function(){
  const contador = document.getElementById('afinidad');
  contador.innerText = parseInt(contador.innerText)+1;

  };
}
