//дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

//Програмын хологч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1. Oruulah ugugdliig delgetsees olj avna.
    console.log("Delgetsees ugugdluu avah heseg...");
    //2. Olj avsn ugugdluudee sanhuugiin controllert damjuulj tend hadgalna.
    //3. Olj avsn ugugdluudiig web deeree tohiroh hesegt gargana.
    //4. Tusuviig tootsoolno.
    //5. Etssiin uldegdel tootsoog delgetsend gargana.
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
