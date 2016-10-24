(function () {
    var navbarVisible = true;
    var interval = null;
    var started = false;
    var iframe;

    $('#nav-toggle-button').on('click', function (evt) {
        console.log(evt);
        $('#navbar').remove();
        navbarVisible = false;
    });

    $('#url-form').on('submit', function (evt) {
        interval = $('#interval').val() * 1000;
        started = true;
        evt.preventDefault();
        console.log(evt)

        getUrl($('#url').val());
        refresh();
    });

    function refresh() {
        if (started && interval) {
            setInterval(function () {
                getUrl($('#url').val());
            }, interval)
        }
    }

    function getUrl(url) {
        iframe = $('#url-iframe');

        if (!iframe[0]) {
            iframe = $('<iframe />');

            iframe.appendTo($('body'));
        }

        iframe.attr('src', url);

        var style = {
            'border-style': 'none',
            width: '100%',
            height: navbarVisible ? 'calc(100vh - 55px)' : '100vh'
        };

        iframe.css(style);

    }
})();