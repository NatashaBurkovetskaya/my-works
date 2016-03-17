var slider = (function () {

    function init(options) {
        var counter = 1,
            numItems = options.slides.length;

        var showCurrent = function () {
            var itemToShow = Math.abs(counter % numItems);

            [].forEach.call(options.slides, function (el) {
                el.classList.remove('show');
                el.classList.add("no_show");
            });

            options.slides[itemToShow].classList.add('show');
            options.slides[itemToShow].classList.remove('no_show');

        };

        options.next.addEventListener('click', function () {
            counter++;
            if (counter === 1) {
                counter = 0;
            }
            showCurrent();
        }, false);

        options.prev.addEventListener('click', function () {
            counter--;
            if (counter === 0) {
                counter = 1;
            }
            showCurrent();
        }, false);
    }

    return {
        init: init
    };
})();