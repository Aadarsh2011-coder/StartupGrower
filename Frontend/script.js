const profileIcon = document.getElementById('profileIcon');
const dropdownMenu = document.getElementById('dropdownMenu');

if (profileIcon && dropdownMenu) {
  profileIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (!dropdownMenu.contains(event.target) && event.target !== profileIcon) {
      dropdownMenu.classList.remove('show');
    }
  });
}
