$(document).ready(function(){

$.ajax({

    type:'get',
    url:'http://spartacodingclub.shop/order',
    data:{},
    success:function(response){
        let orders = response['orders']
        console.log(response['orders'])
        
        for (i = 0; i < orders.length; i++){
            let name = orders[i]['name'];
            let quan = orders[i]['count'];
            let addr = orders[i]['address'];
            let phon = orders[i]['phone'];
            
            let temp_html = '<tr><th>' + name + '</th><th>' + quan + '</th><th>' + addr + '</th><th>' + phon + '</th></tr>'
            $('#order_list').append(temp_html)
            
        }
    }

});
});