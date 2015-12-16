(function () {
  var s = skrollr.init({
    render: function(data) {
    }
  });

  // Full Screen sections
  var sections = ['slide-show', 'slide-venue'];
  for (var index in sections) {
    document.getElementById(sections[index]).style.height = window.innerHeight + "px";
  }
})();
