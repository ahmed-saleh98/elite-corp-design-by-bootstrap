$(document).ready(() => {
  // set height of slider and carousel-item
  let winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider .carousel-item").height(winH - (upperH + navH));

  // add active class to the active section
  $(".navbar .nav-link").on("click", (e) => {
    $(".navbar .nav-link").removeClass("active");
    $(e.target).addClass("active");
  });
  // featured work
  $(".featured-work ul li").on("click", (e) => {
    $(e.target).addClass("active").siblings().removeClass("active");
    if ($(e.target).data("class") === "all") {
      $(".featured-work .row img").css({
        opacity: 1,
      });
    } else {
      $(".featured-work .row img").css({
        opacity: 0.2,
      });
      $($(e.target).data("class")).css({
        opacity: 1,
      });
    }
  });
});
