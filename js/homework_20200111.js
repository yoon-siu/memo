$(document).ready(function(){
    
//    let q_quantity = $('#quantity').val();
    
//    $('.send').click(function(){
    let q_name = $('#name').val();
    let q_address = $('#address').val();
    let q_phone_numbr = $('#phone_number').val();
    let q_email = $('#email').val();
        
    if (q_name ==''){
        alert('Enter Orderer Name');
        $('#name').focus();
        return false;
    } else if (q_address =='') {
        alert('Enter Sending Address');
        $('#address').focus();
    } else if (q_phone_number =='') {
        alert('Enter Orderer Phone Numbers');
        $('#phone_number').focus();
    } else if (q_email =='') {
        alert('Enter Orderer E-Mail Address');
        $('#email').focus();
    } else {
        alert('Your Order Saved');
    }
        
    });
//});
//    try {
//        $('input[type=text]').focus(function(){
//            $(this).css('border-color','red');
//        });
//        $('input[type=text]').blur(function(){
//            $(this).css('border-color','#c0c0c0');
//        });
//        }
//        catch(e){
//            alert(e.message);
//    }