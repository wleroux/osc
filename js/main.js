(function () {
  var videos = document.getElementsByTagName("iframe");

  // Initialize aspect ratio
  for (var i = 0; i < videos.length; i ++) {
    videos[i].aspectRatio = videos[i].width / videos[i].height;
  }

  function resizeVideos() {
    for (i = 0; i < videos.length; i ++) {
      var height = window.innerHeight * (3 / 4) - 20;
      var width = height * videos[i].aspectRatio;

      videos[i].style.width = width + "px";
      videos[i].style.height = height + "px";
    }
  }

  document.addEventListener('resize', resizeVideos);
  resizeVideos();

})();
