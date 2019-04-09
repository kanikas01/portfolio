
$(document).ready(function () {

  // Initialize Materialize Components ---------- //

  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
  $('.dropdown-trigger').dropdown();
  $('.tap-target').tapTarget();

  // Show contact info elegantly on mobile
  function closeNavOpenTap() {
    $('.sidenav').sidenav('close'); 
    $('.tap-target').tapTarget('open');
  }

  // Add event listener to the "Contact" link in sidebar
  $("#sidebar-contact").on("click", closeNavOpenTap);
  
});
