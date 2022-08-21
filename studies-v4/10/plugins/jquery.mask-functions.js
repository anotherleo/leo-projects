// Máscaras

$(document).ready(function () {
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }, spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
        };

    var options = {
        onKeyPress: function (cpf, ev, el, op) {
            var masks = ['000.000.000-000', '00.000.000/0000-00'];
            $('.cpfcnpj-mask').mask((cpf.length > 14) ? masks[1] : masks[0], op);
        }
    }

    $('.cpfcnpj-mask').length > 11 ? $('.cpfcnpj-mask').mask('00.000.000/0000-00', options) : $('.cpfcnpj-mask').mask('000.000.000-00#', options);

    if ($(".cep-mask").length > 0) {
        $(".cep-mask").mask('99.999-999');
    }

    if ($(".date-mask").length > 0) {
        $(".date-mask").mask('99/99/9999');
    }

    if ($(".number-mask").length > 0) {
        $(".number-mask").mask('00000');
    }

    if ($(".cvv-mask").length > 0) {
        $(".cvv-mask").mask('999');
    }

    if ($(".cpf-mask").length > 0) {
        $(".cpf-mask").mask('999.999.999-99');
    }

    if ($(".rg-mask").length > 0) {
        $(".rg-mask").mask('99.999.999-9');
    }

    if ($(".cnpj-mask").length > 0) {
        $(".cnpj-mask").mask('99.999.999/9999-99');
    }

    if ($(".phone-mask").length > 0) {
        $('.phone-mask').mask(SPMaskBehavior, spOptions);
    }

    if ($(".ie-mask").length > 0) {
        $(".ie-mask").mask('999999999-0');
    }
    
    if ($(".cpfcnpj-mask").length > 0) {
        $('.cpfcnpj-mask').mask(SPMaskBehaviorCPFCNPJ, spOptionsCPFCNPJ);
    }
});