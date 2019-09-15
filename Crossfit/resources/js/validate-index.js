
$("#button-contact-form-info").click(function () {

    var email = $('#input-contact-form-email').val();
    var name = $('#input-contact-form-name').val();
    var phone = $('#input-contact-form-phone').val();

    if (name == "") {
        toastr.warning('Campo nombre vacio!');
        return;
    }
    if (email == "") {
        toastr.warning('Campo email vacio!');
        return;
    }
    if (phone == "") {
        toastr.warning('Campo telefono vacio!');
        return;
    }

    if (validateEmail(email)) {
        if (validateString(name, 'nombre')) {
            if (validatePhone(phone)) {
                toastr.success('llamar operacion asincrona: ajax o axios;');
                toastr.success('data: email: ' + email + ', nombre: ' + name + ', phone: ' + phone);
            }
        }
    }

});


// alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height);

//formulario contacto header:
$("#button-email-header").click(function () {

    var email = $('#email-input-header').val();

    if (email != "") {
        $('#block-contact-2').each(function () {

            if (validateEmail(email)) {
                $('#block-contact-1').hide();
                $("#block-contact-2").removeClass("visibility-contact-none");
                animationScrollLeft('#block-contact-2');
            }
        });
    } else {
        toastr.warning('Campo email vacio!');
    }

});

$("#button-name-header").click(function () {

    var name = $('#name-input-header').val();

    if (name != "") {

        if (validateString(name, 'nombre')) {

            $('#block-contact-3').each(function () {
                $('#block-contact-2').hide();
                $("#block-contact-3").removeClass("visibility-contact-none");
                animationScrollLeft('#block-contact-3');

                var width = screen.width;

                if (width < 769) {
                    $("#block-contact-3").removeClass("input-group");
                    $("#button-box-header-box").removeClass("visibility-contact-none");
                    animationScrollLeft('#button-box-header-box');
                }

            });
        }
    } else {
        toastr.warning('Campo nombre vacio!');
    }

});

//enviar pantallas pequeñas:

$("#button-box-header-box").click(function () {

    var email = $('#email-input-header').val();
    var name = $('#name-input-header').val();
    var box = $('#box-input-header').val();

    if (box != "") {
        //llamada a ajax o axios;        
        toastr.success('llamar operacion asincrona: ajax o axios;');
        toastr.success('data: email: ' + email + ', nombre: ' + name + ', box: ' + box);
  
        let valoresCheck = [];

        $("input[type=checkbox]:checked").each(function () {
            if (this.value != '') {
                valoresCheck.push(this.value);
            }
        });

        for (i in valoresCheck) {
            toastr.success('checkbox: ' + valoresCheck[i]);
        }
    } else {
        toastr.warning('Campo box vacio!');
    }

});

// enviar pantallas grandes:
$("#button-box-header").click(function () {

    var email = $('#email-input-header').val();
    var name = $('#name-input-header').val();
    var box = $('#box-input-header').val();

    if (box != "") {
        //llamada a ajax o axios;        
        toastr.success('llamar operacion asincrona: ajax o axios;');
        toastr.success('data: email: ' + email + ', nombre: ' + name + ', box: ' + box);
  
        let valoresCheck = [];

        $("input[type=checkbox]:checked").each(function () {
            if (this.value != '') {
                valoresCheck.push(this.value);
            }
        });

        for (i in valoresCheck) {
            toastr.success('checkbox: ' + valoresCheck[i]);
        }
    } else {
        toastr.warning('Campo box vacio!');
    }

});

function validateEmail(email) {

    // var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    // var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    // var regex2 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regex.test(email)) {
        return true;

    } else {
        toastr.warning('Por favor coloque un correo valido!');
        return false;
    }

}

function validateString(string, input) {

    var regex = /^[a-zA-Z]{4,}$/;

    if (regex.test(string)) {
        return true;
    } else {
        toastr.warning('El campo ' + input + ' tiene caracteres invalidos, solo letras y mayor a 4 caracteres, sin espacios en blanco');
        return false;
    }
}

function validatePhone(string) {

    var regex = /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/;

    if (regex.test(string)) {
        return true;
    } else {
        toastr.warning('El campo telefono deberia ser un telefono valido, ejemplo +56 90000000');
        return false;
    }
}



$(document).ready(function () {
    $('#check-form-input-1').click(function () {
        if ($('#check-form-input-1').prop("checked") == true) {
            checkAllInputs();
        } else if ($('#check-form-input-1').prop("checked") == false) {
            uncheckAllInputs();
        }
    });


    $(window).resize(function () {

        var width = $(window).width();
        if (width > 769) {
            $("#button-box-header-box").addClass("visibility-contact-none");
            $("#block-contact-3").addClass("input-group");
            animationScrollLeft('#block-contact-3');
        } 
    })

});

function checkAllInputs() {

    $('#check-form-input-2').prop('checked', true);
    $('#check-form-input-3').prop('checked', true);
    $('#check-form-input-4').prop('checked', true);
    $('#check-form-input-5').prop('checked', true);
    $('#check-form-input-6').prop('checked', true);
    $('#check-form-input-7').prop('checked', true);
    $('#check-form-input-8').prop('checked', true);
    $('#check-form-input-9').prop('checked', true);
    $('#check-form-input-10').prop('checked', true);

}

function uncheckAllInputs() {

    $('#check-form-input-2').prop('checked', false);
    $('#check-form-input-3').prop('checked', false);
    $('#check-form-input-4').prop('checked', false);
    $('#check-form-input-5').prop('checked', false);
    $('#check-form-input-6').prop('checked', false);
    $('#check-form-input-7').prop('checked', false);
    $('#check-form-input-8').prop('checked', false);
    $('#check-form-input-9').prop('checked', false);
    $('#check-form-input-10').prop('checked', false);

}