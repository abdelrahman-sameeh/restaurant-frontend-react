document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('gear')  ){
    const sidebar = document.querySelector('.left-sidebar')//left-sidebar=>( user-sidebar || admin-sidebar )
    sidebar.classList.toggle('reset-transform');
  }
})