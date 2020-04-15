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

    addListItem: function (item, type) {
      // Орлого зарлагын элементийг агуулсан html-ийг бэлтгэнэ

      var html, list;
      if (type === "inc") {
        list = ".income__list";
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><iclass="ion-ios-close-outline"></iclass="ion-ios-close-outline"></button></div></div></div>';
      } else {
        list = ".expenses__list";
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // Тэр HTML дотроо орлого зарлагын утгуудыг REPLACE ашиглаж өөрчилж өгнө
      html = html.replace("%id%", item.id);
      html = html.replace("$$DESCRIPTION$$", item.description);
      html = html.replace("$$VALUE$$", item.value);
      // Бэлтгэсэн HTML ээ DOM хийж өгнө
      document.querySelector(list).insertAdjacentHTML("beforeend", html);
    },
  };
})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    items: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };
  return {
    addItem: function (type, desc, val) {
      var item, id;
      if (data.items[type].length === 0) id = 1;
      else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        //type === 'expense'
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);

      return item;
    },

    seeData: function () {
      return data;
    },
  };
})();

//Програмын хологч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1. Oruulah ugugdliig delgetsees olj avna.
    var input = uiController.getInput();

    //2. Olj avsn ugugdluudee sanhuugiin controllert damjuulj tend hadgalna.
    var item = financeController.addItem(
      input.type,
      input.description,
      input.value
    );

    //3. Olj avsn ugugdluudiig web deeree tohiroh hesegt gargana.
    uiController.addListItem(item, input.type);
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
