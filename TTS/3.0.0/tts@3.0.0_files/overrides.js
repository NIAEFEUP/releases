(function () {
  document.addEventListener('DOMContentLoaded', function () {
    if (window.hotspotsService) {
      var hpService = window.hotspotsService;
      hpService.activate();
    }
  })

})();
