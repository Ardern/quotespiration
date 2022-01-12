$(document).ready(() => {
    $('#checkoutBtn').click((e) => {
        e.preventDefault();

        const type = parseInt($('#type').val());
        const toppins = parseInt($('#toppins').val());
        const crust = parseInt($('#crust').val());
        const number = $('#numberPizza').val();
        const estate = $('#estate').val();
        const city = $('#city').val();
        // alert(number);

        if (type == '') {
            alert('choose pizza type');
        } else if (toppins == '') {
            alert('Select prefered toppin')
        } else if (estate == '') {
            return false;
        } else if (city == '') {
            alert('enter city')
        };

        alert(`Thank you! We will contact you on ${estate} & delivery your package at ${city}. Check the totals`)

        const totPrice = (type + toppins + crust) * number;
        $('#total').html(totPrice);
    })
})