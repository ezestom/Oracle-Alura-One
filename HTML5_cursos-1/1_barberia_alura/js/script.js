window.addEventListener('load', function () {
   const check = document.querySelector('#checkbox');
   const formulario = document.querySelector("nav ul");
   const main  = document.querySelector('main');

   check.addEventListener('change', function () {


      if (check.checked) {
         formulario.style.top = '0';
         main.style.filter = 'blur(3px)';
      } else {
         formulario.style.top = '-500px';
         main.style.filter = 'blur(0)';
      }
      
   })
      

});