
$(document).ready(function(){

    $(".btn-filt").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('300');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('300');
            $('.filter').filter('.' + value).show('300');
            
        }
    });
    
    if ($(".btn-filt").removeClass("active")) { $(this).removeClass("active"); }
    $(this).addClass("active");

});