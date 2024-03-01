function menuToggle() {
    $("#menu-button").toggle("fast")
    $("#menu-button").toggleClass("hidden")
    $("#close-button").toggle("fast")
    $("#close-button").toggleClass("hidden")
    $("nav").toggleClass("-translate-y-80 shadow-gray-300")
}

$("#menu").click(() => {
    menuToggle()
})
$(".nav-link").click(() => {
    menuToggle()
})