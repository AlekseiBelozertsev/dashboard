var sidebar = document.getElementById('sidebar');
var sidebarButtons = document.getElementById('sidebarButton').addEventListener("click", showSidebar);

function showSidebar() {
   if(sidebar.className != 'disabled') {
       sidebar.className = 'disabled';
   } else if (sidebar.className = 'disabled') {
        sidebar.classList.remove('disabled');
        sidebar.classList.add('sidebar');
   }
}