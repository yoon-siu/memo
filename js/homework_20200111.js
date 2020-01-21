$(document).ready(function(){
    function phon_chk(q_phon){
        let phon_num = /(01)([0|1|6|7|8|9]{1})-([0-9]{3,4})-([0-9]{4})$/;
        if (phon_num.test(q_phon) == false){
            alert('Put your cell phone number in the same form as 01*-0000-0000 or 01*-000-0000.');
            $('#phone_number').focus();
            $('#phone_number').css({
                borderColor:'red',
                borderWidth:'0.2em',
                color:'red',
            });
            return false;
        }
        return true;
    }
    
    $('.send').click(function(){
        $('input').css({
            borderColor:'black', borderWidth:'0.1em',
        });
        $('select').css({
            borderColor:'black', borderWidth:'0.1em',
        })
        $('textarea').css({
            borderColor:'black', borderWidth:'0.1em',
        });
        let q_name = $('#name').val();
        let q_addr = $('#address').val();
        let q_quan = $('#quantity').val();
        let q_phon = $('#phone_number').val();
//        let q_email = $('#email').val();
        let new_order = '<tr><th>'+ q_name +'</th><th>'+ q_quan +'</th><th>'+ q_addr +'</th><th>'+ q_phon +'</th></tr>'
        
        
        
        if (q_name == ''){
            alert('Enter Orderer Name');
            $('#name').focus();
            $('#name').css({
                borderColor:'red',
                borderWidth:'0.2em',
            });
        } else if (q_quan == '0'){
            alert('Select Quantity');
            $('#quantity').focus();
            $('#quantity').css({
                borderColor:'red',
                borderWidth:'0.2em',
            });
        } else if (q_addr == '') {
            alert('Enter Sending Address');
            $('#address').focus();
            $('#address').css({
                borderColor:'red',
                borderWidth:'0.2em',
            });
        } else if (q_phon == '') {
            alert('Enter Mobile Numbers');
            $('#phone_number').focus();
            $('#phone_number').css({
                borderColor:'red',
                borderWidth:'0.2em',
                fontColor:'#000',
            });

        } else if (phon_chk(q_phon) !=false){
            $('#order_list').before(new_order);
            $('#order_sheet').css({
                color:'#eee',
            })

//            return false;
//        else if (q_email== '') {
//            alert('Enter Orderer E-Mail');
//            $('#email').focus();
//            $('#email').css({
//                borderColor:'red',
//                borderWidth:'0.2em',
//            });
        };
        if(q_name != '' && q_addr !='' && q_quan !='0' && phon_chk(q_phon) == true) {
            alert('SAVED Your Order');
        }
//        alert('Saved Order');
//        if (q_name !=''&& q_quan !='0'&& q_addr !=''&& q_phon !=''&& phone_chk(q_phon) !=true) {
//            alert('Saved Your Order');
//        }
    })
});