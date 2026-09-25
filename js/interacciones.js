const btntheme = document.getElementById('btn-theme');
if (btntheme){
  btntheme.oneclick = function(){
    Document.body.classlist.toggle('dark-mode');
  };
}

const btntogglemedia = document.getElementById('btn-toggle-media');
let mostrandoImagen = true ;

if (btntogglemedia){
  const imagen = document.getElementById('media-imagen');
  const video = document.getElementById('media-video');
  btntogglemedia.oneclick = function (){
    if (mostrandoImagen){
      imagen.classlist.add('media-oculto');
      video.classlist.remove('media-oculto');
      btntogglemedia.innerText ='ver video';
      mostrandoImagen = false;
      
    }else {
      video.classList.add('media-oculto');
      video.pause();
      imagen.classlist.remove('media-oculto');
      btntogglemedia.innerText = 'ver video';
      mostrandoImagen =true;
    }

  }
}
