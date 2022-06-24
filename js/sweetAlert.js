(async () => {
  const {value: pais} = await Swal.fire({
    title: "Bienvenido!",
    // title:
    text: "bienvenido a mi pagina web, de donde eres?",
    // html: '<b class=rojo> Hello There! </b>'
    // ICONOS: 'success','warning','alert','info','question'
    icon: 'question',
    confirmButtonText: 'seleccionar',
    footer:'<span class="rojo">información importante</span>',
    // width: '50%',
    padding: '1rem',
    // background: '#000'
    // GROW: 'row','column','fullscreen'
    // grow: '',
    // BACKDROP: true, false
    backdrop:true,
    // CONTROL DE TIEMPO
    // timer: 5000,
    // timerProgressBar: true,
    // TOAST: true,flse
    // toast:true,
    // POSITION: 'top','top-end','center','bottom','bottom-end'
    position: 'center',
    // CONTROLES DE CLICK
    // allowOutsideClick: false,
    // allowEscapeKey: false,
    // allowEnterKey: false,
    // stopKeydownPropagation: false,

    input: 'select',
    inputPlaceholder: 'Pais',
    inputValue: '',
    inputOptions:
    {
      Mexico  : 'Mexico',
      Chile  : 'Chile',
      Colombia : 'Colombia',
      Argnetia : 'Argentina',
      Peru  : 'Peru',
      Uruguay : 'Uruguay'
    },

     customClass:
     {
      // 	container:
      // 	popup:
      // 	header:
      // 	title:
      // 	closeButton:
      // 	icon:
      // 	image:
      // 	content:
      // 	input:
      // 	actions:
      // 	confirmButton:
      // 	cancelButton:
      // 	footer:
     },

    showConfirmButton: true,
    confirmButtonColor: '#3E60E9',
    confirmButtonAriaLabel: 'Confirmar',

    // BOTON DE CANCELAR
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    // cancelButtonColor:
    cancelButtonAriaLabel: 'Cancelar',

    buttonsStyling: true,
    showCloseButton: true,
    closeButtonAriaLabel: 'cerrar ventana de Alert',

    imageUrl: 'img/4.png',
    imageWidth: '200px',
    // imageHeight:
    imageAlt: 'camara'
  });

  if (pais){
    // alert('Hola amigo de '+ pais);
    Swal.fire({
      title: `Seleccionaste ${pais}`
    });
  }

})()

