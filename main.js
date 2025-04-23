$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');

    $('#form-contato').on('submit', function (event) {
        event.preventDefault(); 
        this.reset(); 
    });
});