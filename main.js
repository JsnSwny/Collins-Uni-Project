window.onscroll = function() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  nav = document.getElementById("nav");
  bookmark = document.querySelectorAll(".fa-bookmark");
  nav_a = document.querySelectorAll("nav a");
  nav_ul = document.querySelectorAll("nav ul");

  if (top > 120) {
    nav.className = "bar";

    for (var i = 0; i < nav_a.length; i++) {
      nav_a[i].className = "bar";
    }
    for (var i = 0; i < bookmark.length; i++) {
      bookmark[i].className = "fas fa-bookmark bar";
    }
    for (var i = 0; i < nav_ul.length; i++) {
      nav_ul[i].className = "bar";
    }
  } else {
    nav.className = "";

    for (var i = 0; i < nav_a.length; i++) {
      nav_a[i].className = "";
    }
    for (var i = 0; i < bookmark.length; i++) {
      bookmark[i].className = "fas fa-bookmark";
    }
    for (var i = 0; i < nav_ul.length; i++) {
      nav_ul[i].className = "";
    }
  }
};
