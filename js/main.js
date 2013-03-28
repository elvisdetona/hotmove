$(document).ready(function(){
     $('a[rel="external"]').click(function () {
        window.open($(this).attr('href'));
        return false;
    });
    $('#content a.oque').click(function (e) {
        $('#anima').slideDown('slow');
    });
    $('#anima a.oque').click(function (e) {
        $('#anima').slideUp('slow');
    });
});