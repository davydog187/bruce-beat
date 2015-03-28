
function onButtonClick(){
    $('button').click( function(){
       var query = $('input').val();
        $.ajax({
            type: "GET",
            url: "serverscript.",
            data: query,
            cache: false,
            success: function(data){
                $("#resultarea").text(data);
            }
        }); 
    });    
    
}

$(function(){
    onButtonClick();
});
