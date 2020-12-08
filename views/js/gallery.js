$(document).ready(function(){
   
    $(".btn-filt").click(function(){
        const value = $(this).attr('data-filter');
        if(value == "all")
        {
            // $(".filt1").removeClass('container');
            // $(".filt2").removeClass('row');
            // $(".filt3").removeClass('col-md-12 col-sm-12');
            // $(".filt4").removeClass('testi-carousel owl-carousel owl-theme');
            $('.filter').show('100');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            
            $(".filter").not('.' + value).hide('100');
            $('.filter').filter('.' + value).show('100');
            
        }
    });
    
    if ($(".btn-filt").removeClass("active")) { $(this).removeClass("active"); }
    $(this).addClass("active");

});