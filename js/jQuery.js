
// hambaerger-nav

$(function(){
    $('.menu-btn').on('click', function(){
      $('.header-gnav').toggleClass('is-active');
    });
  }());

  $(function () {
    setTimeout('header-gnav-logo()');
});

// top-image-content

$(function(){
    $(window).scroll(function (){
        $('.left-to-right, .down-to-top').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50){
                $(this).addClass('scrollin');
            }
        });
    });
});

// main-history

$(function(){
    　$(window).scroll(function (){
        $('.main-history').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    　});
    });

    // main-news-content-open

    $(function(){
        $('.js-modal-open').each(function(){
            $(this).on('click',function(){
                var target = $(this).data('target');
                var modal = document.getElementById(target);
                $(modal).fadeIn();
                return false;
            });
        });
        $('.js-modal-close').on('click',function(){
            $('.js-modal').fadeOut();
            return false;
        }); 
    });


    jQuery(function( $ ) {
        $( 'tr.delivery td input.plus' ).on( 'click', function(){
            var itemid = $(this).parents("tr").attr('itemid');
            var count = $('tr.delivery td input#oder_itemid'+itemid).val();
            if (count<99){ count++; }
            $('tr.delivery td input#oder_itemid'+itemid).val(count) ;
            calTotal();
            return false;
        });
    
        $( 'tr.delivery td input.minus' ).on( 'click', function(){
            var itemid = $(this).parents("tr").attr('itemid');
            var count = $('tr.delivery td input#oder_itemid'+itemid).val();
            if (count>0){ count--; }
            $('tr.delivery td input#oder_itemid'+itemid).val(count) ;
            calTotal();
            return false;
        });
        
        function calTotal() {
             var oderTotalPrice = 0;
             var oderTotalNum = 0;
             $( 'tr.delivery' ).each(function(i, val) {
                $item =$(this).find('td .item_price');
                var price = parseInt($(this).find('.item_price').html());
                var num = $(this).find("input[class='itemid[]']").val();
                oderTotalPrice += price * num;
                oderTotalNum += num;
            });
            $( 'span#totalPrice' ).html(oderTotalPrice.toString());
         } 
        
        calTotal();
    });







