$(document).ready(function() {
    $('.lang-button').on('click', function() {
        var lang = $(this).data('lang');
        $('#content > div').each(function() {
            if ($(this).data('lang') === lang) {
                $(this).removeClass('d-none');
            } else {
                $(this).addClass('d-none');
            }
        });
    });

    // Set default language to Arabic
    $('#content > div[data-lang="ar"]').removeClass('d-none');
    $('#content > div[data-lang="en"]').addClass('d-none');
});
