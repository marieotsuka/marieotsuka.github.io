//youtube script

var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        width: '600',
        height: '400',
        videoId: 'EnyfHTJVzh8',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            // 'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// function onPlayerReady(event) {
//   event.target.playVideo();
// }

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
            $("#thumbnail_container").fadeIn();
            // $('.start-video').fadeIn('normal');
        }
}  
// function stopVideo() {
//     player.stopVideo();
//     $("#player").show();
// }

$(document).on('click', '.start-video', function () {
    $("#player").show();
    $("#thumbnail_container").fadeOut();
    player.playVideo();
});


// var p = document.getElementById ("player");
// $(p).hide();

// onPlayerStateChange = function (event) {
//     if (event.data == YT.PlayerState.ENDED) {
//         $('.start-video').fadeIn('normal');
//     }
// }

// $(document).on('click', '.start-video', function () {
//     $(this).hide();
//     $("#player").show();
//     $("#thumbnail_container").hide();
//     player.playVideo();
// });

