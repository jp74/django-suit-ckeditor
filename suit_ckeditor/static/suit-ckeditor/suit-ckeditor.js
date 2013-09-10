jQuery(function () {

    function init_cke() {
        $('textarea[data-type=ckeditortype]').each(function () {
            if ($(this).data('processed') == "0" && $(this).attr('id').indexOf('__prefix__') == -1) {
                $(this).data('processed', "1");
                CKEDITOR.replace($(this).attr('id'), $(this).data('config'));
            }
        });
    }


    init_cke();
    $(document).on('click', '.add-row a', function (event) {
        init_cke();
        return true;
    });
    $(document).on('click', 'a.sortable', function (event) {
        $(this).closest('.form-row').find('textarea[data-type=ckeditortype]').each(function (index, element) {
            var id = $(element).attr('id');
            var instance = CKEDITOR.instances[id];
            if (instance) {
                $('.' + instance.id).remove()
                CKEDITOR.remove(instance);
            }
            CKEDITOR.replace(id, $(element).data('config'));

        });
        return true;
    });


});