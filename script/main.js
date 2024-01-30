// Oculta els últims 5 elements del menú de navegació en producció
(function(){
  var host=window.location.hostname;
  var isLocal=host.indexOf("localhost")===0||host.indexOf("127.0.0.1")===0;
  if(isLocal)return;
  var navList=document.querySelector("header nav ul");
  if(!navList)return;
  var items=navList.querySelectorAll("li");
  var start=Math.max(0,items.length-5);
  for(var i=start;i<items.length;i++){
    if(items[i])items[i].style.display="none";
  }
})();

// Funció per copiar al porta-retalls l'ordre d'instal·lació
function myFunction(){
  navigator.clipboard.writeText('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/rbuj-UOC/rbuj-UOC.github.io/refs/heads/main/init.sh)"');
}

// Generar el copyright dinàmicament
(function(){
  var copyrightYear=new Date().getFullYear();
  var copyrightText='© '+copyrightYear+' Robert Buj';
  var copyrightElement=document.getElementById('copyright-year');
  if(copyrightElement){
    copyrightElement.textContent=copyrightText;
  }
})();

// Inicialitzar els botons per commutar la visibilitat de les assignatures
document.addEventListener('DOMContentLoaded',function(){
  // Botons per expandir/col·lapsar totes les assignatures d'un curs
  const courses=document.querySelectorAll('.course');
  courses.forEach(course=>{
    const dashboard=course.querySelector('.dashboard');
    if(dashboard){
      const h2=course.querySelector('h2');
      if(h2){
        const expandBtn=document.createElement('button');
        expandBtn.className='course-expand-btn';
        expandBtn.textContent='⥥';
        expandBtn.setAttribute('aria-label','Expandeix/col·lapsa totes les assignatures');
        h2.appendChild(expandBtn);
        expandBtn.addEventListener('click',function(e){
          e.preventDefault();
          e.stopPropagation();
          const subjectBodies=course.querySelectorAll('.subject-body');
          const allVisible=Array.from(subjectBodies).every(body=>body.classList.contains('visible'));
          subjectBodies.forEach((body)=>{
            if(allVisible){
              body.classList.remove('visible');
            }else{
              body.classList.add('visible');
            }
          });
          if(allVisible){
            expandBtn.classList.remove('expanded');
          }else{
            expandBtn.classList.add('expanded');
          }
        });
      }
    }
  });
});
