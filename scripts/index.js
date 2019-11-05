$(function() {
    $(".btnSelecionar").click(function() {
        window.location = "simulacao.html?Oferta=" + this.id
    });
});