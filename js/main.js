var preloader = document.getElementById('load_icon');
function load__() {
  preloader.style.display = 'none';
}

{/* <script> */}
document.documentElement.style.setProperty(
    "--header-height",
    document.getElementById("shopify-section-header").offsetHeight +
    "px"
);
// </script>


{/* <script> */}
var frSwiper = new Swiper(".fr-swiper-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    observer: true,
    observeParents: true,
    spaceBetween: 120,

    pagination: {
    el: ".fr-swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    1360: {
        spaceBetween: 90,
    },
    768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumnFill: "column",

        spaceBetween: 0,
    },
    },
});
{/* </script> */}


{/* <script> */}
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
player = new YT.Player("fv-video-placeholder", {
    height: "360",
    width: "640",
    videoId: "zur8Viw1N6g",
    events: {
    onReady: onPlayerReady,
    onStateChange: onPlayerStateChange,
    },
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
}
}

function stopVideo() {
player.stopVideo();
}

$(".featured-video-container").on(
"click",
".fv-Video__PlayButton",
function () {
    var id = $(this).data("id");
    var index = $(this).data("index");
    var vid = $(this).data("vid");

    $(".FlexboxIeFix").removeClass("active");
    $(this).parents(".FlexboxIeFix").addClass("active");
    player.stopVideo();
    $(this)
    .parents(".FlexboxIeFix")
    .find(".VideoWrapper")
    .append($("#fv-video-placeholder-container"));

    //    console.log($('.fv-video-placeholder-container').html());
    setTimeout(() => {
    player.cueVideoById(vid);
    }, 600);
    setTimeout(() => {
    player.playVideo();
    }, 1000);
}
);
// </script>

{/* <script> */}
$("#section-footer .footer-Container").before(
$(".pc-footer-brand-container")
);
$("#section-footer .footer-Container").after(
$(".mb-footer-brand-container")
);
// </script>



//  <script>
 $("#section-footer .footer-aside-container").append(
   $(".fa-container")
 );
// </script>






























    // <!-- Hotjar Tracking Code for https://us.isoundpeats.com/ -->
      (function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = {
          hjid: 2697869,
          hjsv: 6,
        };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  jQuery(".animation-box").find(".animation-text").addClass("normalmove");

  //     jQuery(window).scroll(function(){

  //       jQuery(".animation-box").each(function(){

  //         if(jQuery(window).scrollTop() +(jQuery(window).height())*2/3 > jQuery(this).offset().top){

  //           jQuery(this).find(".animation-text").addClass("normalmove");
  //         }
  //         else
  //         {
  //           //jQuery(this).find(".animation-text").removeClass("normalmove");
  //         }
  //       });

  //       if(jQuery(window).scrollTop() < 100 ){
  //         jQuery(".animation-text").removeClass("normalmove");
  //       }
  //     });

  let hasCbbStatus = false,
    initBuildCbbTime = "",
    hasCbbTime = 500;
  $(document).ready(function () {
    initBuildCbbTime = window.setInterval(() => {
      hasCbbTime += 100;
      if (hasCbbTime == 4000) {
        window.clearInterval(initBuildCbbTime);
      }
      if ($("body").has(".weglot-container").length != 0) {
        $(".weglot-container ul ").append($(".custom-language-box").html());
        if ($(window).width() > 1140) {
          $("#language-box").append($(".weglot-container"));
        } else {
          $(".SidebarMenu__Nav.SidebarMenu__Nav--primary").after(
            $(".weglot-container")
          );
        }
        window.clearInterval(initBuildCbbTime);
      }
    }, 100);
  });

  $(window).resize(function () {
    if ($(window).width() > 1140) {
      $("#language-box").append($(".weglot-container"));
    } else {
      $(".SidebarMenu__Nav.SidebarMenu__Nav--primary").after(
        $(".weglot-container")
      );
    }
  });




