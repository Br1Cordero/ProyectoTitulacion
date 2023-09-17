
$(document).ready(() => {

    $(function () {
        setTimeout(
            () => {
                $(".cargando").hide();
            }, 50
        );
    });

    $('.menu__li a').on('click', function (event) {
        event.preventDefault();

        $('.menu__li').removeClass('active');
        $(this).parent().addClass('active');

        var url = $(this).attr('href');
        history.pushState(null, null, url);
        window.location.assign(url)
    });


    var currentUrl = window.location.pathname;
    console.log(currentUrl)
    $('.menu__li').find('.menu__li a[href="' + currentUrl + '"]').parent().addClass('active');


    $('#add-plague').click(() => {

        var input = $("<input>").attr({
            type: "text",
            name: "plague",
            required: true,
            class: "form__input",
            placeholder: " "
        });
        var label = $("<label > Plaga Agregada </label>").attr({
            class: "form__label"
        })
        var container = $(`<fieldset>`).attr({
            class: "form__group"
        })
        container.append(input, label);
        console.log(input.val())
        $("#plagas-container").append(container, "<br>");


    });

    $('details').on('toggle', function () {
        $('details').on('toggle', function () {
            const summaryElement = $(this).find('summary');
            const iconEye = summaryElement.find('i.fa-eye');
            const iconEyeSlash = summaryElement.find('i.fa-eye-slash');

            if (this.open) {
                iconEye.show();
                iconEyeSlash.hide();
            } else {
                iconEye.hide();
                iconEyeSlash.show();
            }
        });
    });

    $('#signup').click(() => {
        window.location.href = "/auth/signup"
    })

    $('#left-long').click(() => {
        window.location.href = "/auth/singing"
    })


});

$(document).on('click', '.close', () => {
    $('.alert').hide()
})