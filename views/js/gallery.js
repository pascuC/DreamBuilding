$(document).ready(function(){

    $(".btn-filt").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('100');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('100');
            $('.filter').filter('.'+value).show('100');
            
        }
    });
    
    if ($(".btn-filt").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});