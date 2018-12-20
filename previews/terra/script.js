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
        videoId: 'zS3rdqU9d50',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}


var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
            $("#thumbnail_container").fadeIn();
        }
}  

$(document).on('click', '.start-video', function () {
    $("#player").show();
    $("#thumbnail_container").fadeOut();
    player.playVideo();
});

