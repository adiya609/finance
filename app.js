//дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMstrings = {
    addStrings: ".add__type",
    descStrings: ".add__description",
    valueStrings: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.addStrings).value,
        description: document.querySelector(DOMstrings.descStrings).value,
        value: document.querySelector(DOMstrings.valueStrings).value,
      };
    },

    getDomStrings: function () {
      return DOMstrings;
    },
  };
})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {
  var Income = function (id, description, value) {
    this.aid = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

//Програмын хологч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1. Oruulah ugugdliig delgetsees olj avna.
    console.log(uiController.getInput());
    //2. Olj avsn ugugdluudee sanhuugiin controllert damjuulj tend hadgalna.
    //3. Olj avsn ugugdluudiig web deeree tohiroh hesegt gargana.
    //4. Tusuviig tootsoolno.
    //5. Etssiin uldegdel tootsoog delgetsend gargana.
  };

  var setUpEventlistener = function () {
    var DOM = uiController.getDomStrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Application starting...");
      setUpEventlistener();
    },
  };
})(uiController, financeController);

appController.init();
