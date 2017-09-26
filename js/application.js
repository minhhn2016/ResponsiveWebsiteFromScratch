$(document).ready(function () {
    $('#services li').on('click', 'button', function () {
        $(this).closest('#services li').find('.specs').slideToggle();
    });
});
