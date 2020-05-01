if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'algovis-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'algovis-js'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'algovis-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'algovis-js'.");
}
this['algovis-js'] = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Unit = Kotlin.kotlin.Unit;
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.experimental.delay_za3lpa$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.experimental.launch_35c74u$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwUPAE = Kotlin.throwUPAE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var numberToInt = Kotlin.numberToInt;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var max = Kotlin.kotlin.collections.max_pbinho$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var getCallableRef = Kotlin.getCallableRef;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  NullAlgorithm.prototype = Object.create(Algorithm.prototype);
  NullAlgorithm.prototype.constructor = NullAlgorithm;
  ArrayAlgorithm.prototype = Object.create(Algorithm.prototype);
  ArrayAlgorithm.prototype.constructor = ArrayAlgorithm;
  BinarySearch.prototype = Object.create(ArrayAlgorithm.prototype);
  BinarySearch.prototype.constructor = BinarySearch;
  BogoSort.prototype = Object.create(ArrayAlgorithm.prototype);
  BogoSort.prototype.constructor = BogoSort;
  BubbleSort.prototype = Object.create(ArrayAlgorithm.prototype);
  BubbleSort.prototype.constructor = BubbleSort;
  BufferArrayAlgorithm.prototype = Object.create(Algorithm.prototype);
  BufferArrayAlgorithm.prototype.constructor = BufferArrayAlgorithm;
  CocktailSort.prototype = Object.create(ArrayAlgorithm.prototype);
  CocktailSort.prototype.constructor = CocktailSort;
  InlineMergeSort.prototype = Object.create(ArrayAlgorithm.prototype);
  InlineMergeSort.prototype.constructor = InlineMergeSort;
  InsertionSort.prototype = Object.create(ArrayAlgorithm.prototype);
  InsertionSort.prototype.constructor = InsertionSort;
  LinearSearch.prototype = Object.create(ArrayAlgorithm.prototype);
  LinearSearch.prototype.constructor = LinearSearch;
  MergeSort.prototype = Object.create(BufferArrayAlgorithm.prototype);
  MergeSort.prototype.constructor = MergeSort;
  ParMergeSort.prototype = Object.create(BufferArrayAlgorithm.prototype);
  ParMergeSort.prototype.constructor = ParMergeSort;
  ParQuickSort.prototype = Object.create(ArrayAlgorithm.prototype);
  ParQuickSort.prototype.constructor = ParQuickSort;
  QuickSort.prototype = Object.create(ArrayAlgorithm.prototype);
  QuickSort.prototype.constructor = QuickSort;
  SelectionSort.prototype = Object.create(ArrayAlgorithm.prototype);
  SelectionSort.prototype.constructor = SelectionSort;
  AddAlgorithm.prototype = Object.create(Algorithm.prototype);
  AddAlgorithm.prototype.constructor = AddAlgorithm;
  BSTAlgorithm.prototype = Object.create(Algorithm.prototype);
  BSTAlgorithm.prototype.constructor = BSTAlgorithm;
  RemoveAlgorithmPredecessor.prototype = Object.create(BSTAlgorithm.prototype);
  RemoveAlgorithmPredecessor.prototype.constructor = RemoveAlgorithmPredecessor;
  RemoveAlgorithmSuccessor.prototype = Object.create(BSTAlgorithm.prototype);
  RemoveAlgorithmSuccessor.prototype.constructor = RemoveAlgorithmSuccessor;
  ArrayStructure.prototype = Object.create(Structure.prototype);
  ArrayStructure.prototype.constructor = ArrayStructure;
  BSTStructure.prototype = Object.create(Structure.prototype);
  BSTStructure.prototype.constructor = BSTStructure;
  NullStructure.prototype = Object.create(Structure.prototype);
  NullStructure.prototype.constructor = NullStructure;
  function DrawController(model) {
    this.model = model;
    var tmp$;
    this.canvas_0 = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var tmp$_0;
    this.renderContext_0 = Kotlin.isType(tmp$_0 = this.canvas_0.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    this.drawer_0 = new Drawer(false);
  }
  function DrawController$invoke$lambda(this$DrawController_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DrawController$invoke$lambda(this$DrawController_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DrawController$invoke$lambda(this$DrawController_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$DrawController = this$DrawController_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DrawController$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DrawController$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DrawController$invoke$lambda.prototype.constructor = Coroutine$DrawController$invoke$lambda;
  Coroutine$DrawController$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$$receiver.isActive) {
              this.state_0 = 4;
              continue;
            }

            var receiver = this.local$this$DrawController.model;
            var this$DrawController = this.local$this$DrawController;
            var tmp$, tmp$_0, tmp$_1;
            var tmp$_2, tmp$_3, tmp$_4;
            var controlsStyle = window.getComputedStyle(receiver.controls);
            var mainAreaStyle = window.getComputedStyle(receiver.mainArea);
            var tmp$_5 = this$DrawController.canvas_0;
            var tmp$_6 = receiver.mainArea.clientWidth;
            var $receiver = mainAreaStyle.paddingLeft;
            var endIndex = mainAreaStyle.paddingLeft.length - 2 | 0;
            var tmp$_7 = toInt($receiver.substring(0, endIndex));
            var $receiver_0 = mainAreaStyle.paddingRight;
            var endIndex_0 = mainAreaStyle.paddingRight.length - 2 | 0;
            tmp$_5.width = tmp$_6 - (tmp$_7 + toInt($receiver_0.substring(0, endIndex_0))) | 0;
            tmp$_0 = this$DrawController.canvas_0;
            var tmp$_8 = window.innerHeight - roundToInt((Kotlin.isType(tmp$ = receiver.controls, Element) ? tmp$ : throwCCE()).getBoundingClientRect().height);
            var $receiver_1 = controlsStyle.marginTop;
            var endIndex_1 = controlsStyle.marginTop.length - 2 | 0;
            var tmp$_9 = toInt($receiver_1.substring(0, endIndex_1));
            var $receiver_2 = controlsStyle.marginBottom;
            var endIndex_2 = controlsStyle.marginBottom.length - 2 | 0;
            tmp$_0.height = tmp$_8 - (7 * (tmp$_9 + toInt($receiver_2.substring(0, endIndex_2)) | 0) | 0) | 0;
            this$DrawController.drawer_0.context = this$DrawController.renderContext_0;
            this$DrawController.drawer_0.rWidth = this$DrawController.canvas_0.width;
            this$DrawController.drawer_0.rHeight = this$DrawController.canvas_0.height;
            this$DrawController.drawer_0.clear();
            if (((tmp$_1 = receiver.algorithm) != null ? (tmp$_1.initDraw_xogw00$(this$DrawController.drawer_0), Unit) : null) == null) {
              receiver.structure.initDraw_xogw00$(this$DrawController.drawer_0);
            }

            receiver.structure.draw_xogw00$(this$DrawController.drawer_0);
            (tmp$_2 = receiver.algorithm) != null ? (tmp$_2.doDraw_xogw00$(this$DrawController.drawer_0), Unit) : null;
            if (((tmp$_3 = receiver.job) != null ? tmp$_3.isActive : null) != receiver.lastActive) {
              receiver.lastActive = (tmp$_4 = receiver.job) != null ? tmp$_4.isActive : null;
              receiver.completionCallback(receiver.lastActive);
            }

            this.state_0 = 3;
            this.result_0 = delay(33, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DrawController.prototype.invoke = function () {
    return launch(void 0, void 0, void 0, void 0, DrawController$invoke$lambda(this));
  };
  DrawController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawController',
    interfaces: []
  };
  function Drawer(useDots) {
    Drawer$Companion_getInstance();
    this.useDots = useDots;
    this.width = 0;
    this.height = 0;
    this.rWidth = 0;
    this.rHeight = 0;
    this.context_sfz7o9$_0 = this.context_sfz7o9$_0;
  }
  Object.defineProperty(Drawer.prototype, 'context', {
    get: function () {
      if (this.context_sfz7o9$_0 == null)
        return throwUPAE('context');
      return this.context_sfz7o9$_0;
    },
    set: function (context) {
      this.context_sfz7o9$_0 = context;
    }
  });
  Drawer.prototype.beginDraw = function () {
    this.context.setTransform(this.rWidth / this.width, 0.0, 0.0, this.rHeight / this.height, 0.0, 0.0);
  };
  Drawer.prototype.clear = function () {
    this.context.fillStyle = 'white';
    this.context.fillRect(0.0, 0.0, this.width, this.height);
  };
  Drawer.prototype.fill_4qozqa$ = function (selection, x, y, w, h) {
    this.context.fillStyle = Drawer$Companion_getInstance().colors[selection % Drawer$Companion_getInstance().colors.length];
    if (this.useDots) {
      this.context.fillRect(x, y, w, w);
    }
     else {
      this.context.fillRect(x, y, w, h);
    }
  };
  Drawer.prototype.line_tjonv8$ = function (x1, y1, x2, y2) {
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 0.05;
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  };
  Drawer.prototype.text_ewpgoy$ = function (string, x, y, w, h) {
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.resetTransform();
    var xScreen = x * (this.rWidth / this.width) + 4;
    var yScreen = y * (this.rHeight / this.height) + 4;
    var wScreen = w * (this.rWidth / this.width) - 8;
    var hScreen = h * (this.rHeight / this.height) - 8;
    this.context.font = this.fitFontToRect_0(string, wScreen, hScreen, 10, 20.0, 10.0).toString() + 'px sans-serif';
    this.context.fillStyle = 'white';
    this.context.fillText(string, xScreen + wScreen / 2, yScreen + hScreen / 2);
    this.context.setTransform(this.rWidth / this.width, 0.0, 0.0, this.rHeight / this.height, 0.0, 0.0);
  };
  Drawer.prototype.fitFontToRect_0 = function (string, w, h, remaining, size, step, lastDir) {
    if (lastDir === void 0)
      lastDir = null;
    var tmp$;
    if (size < 0) {
      return size;
    }
    this.context.font = size.toString() + 'px sans-serif';
    var width = this.context.measureText(string).width;
    if (remaining === 0) {
      if (w > width) {
        return size;
      }
       else {
        return size - step;
      }
    }
    if (w === width) {
      return size;
    }
    if (w > width) {
      if (lastDir == null) {
        tmp$ = this.fitFontToRect_0(string, w, h, remaining - 1 | 0, size + step, step, 1);
      }
       else {
        if (lastDir === 1) {
          tmp$ = this.fitFontToRect_0(string, w, h, remaining - 1 | 0, size + step, step, 1);
        }
         else {
          tmp$ = this.fitFontToRect_0(string, w, h, remaining - 1 | 0, size + step / 2, step / 2, 1);
        }
      }
    }
     else {
      if (lastDir == null) {
        tmp$ = this.fitFontToRect_0(string, w, h, remaining - 1 | 0, size - step, step, -1);
      }
       else {
        if (lastDir === -1) {
          tmp$ = this.fitFontToRect_0(string, w, h, remaining - 1 | 0, size - step, step, -1);
        }
         else {
          tmp$ = this.fitFontToRect_0(string, w, h, remaining - 1 | 0, size - step / 2, step / 2, -1);
        }
      }
    }
    return tmp$;
  };
  function Drawer$Companion() {
    Drawer$Companion_instance = this;
    this.colors = ['black', 'red', 'yellow', 'green', 'cyan', 'blue', 'orange'];
  }
  Drawer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Drawer$Companion_instance = null;
  function Drawer$Companion_getInstance() {
    if (Drawer$Companion_instance === null) {
      new Drawer$Companion();
    }
    return Drawer$Companion_instance;
  }
  Drawer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Drawer',
    interfaces: []
  };
  function main$lambda$lambda$lambda(closure$initializationSize, this$) {
    return function (it) {
      closure$initializationSize.v = it;
      this$.dataSizeMenu.innerText = 'Initialization Size: ' + closure$initializationSize.v;
      return Unit;
    };
  }
  function main$lambda$lambda(closure$initializationSize, this$) {
    return function (f) {
      promptInt('Data Size', 1, 1048576, closure$initializationSize.v, main$lambda$lambda$lambda(closure$initializationSize, this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_0(closure$operationTime, this$) {
    return function (it) {
      closure$operationTime.v = it;
      this$.structure.delayMillis = closure$operationTime.v;
      this$.opTimeMenu.textContent = 'Operation Time: ' + closure$operationTime.v + ' ms';
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$operationTime, this$) {
    return function (f) {
      promptDouble('Operation Time (ms)', 0.0, 1048576, closure$operationTime.v, main$lambda$lambda$lambda_0(closure$operationTime, this$));
      return Unit;
    };
  }
  function main$lambda$updateSimulationMenu$lambda(it) {
    return Unit;
  }
  function main$lambda$updateSimulationMenu$lambda$lambda(closure$alg_0, closure$updateSimulationMenu_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$updateSimulationMenu$lambda$lambda(closure$alg_0, closure$updateSimulationMenu_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$updateSimulationMenu$lambda$lambda(closure$alg_0, closure$updateSimulationMenu_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$alg = closure$alg_0;
    this.local$closure$updateSimulationMenu = closure$updateSimulationMenu_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda.prototype.constructor = Coroutine$main$lambda$updateSimulationMenu$lambda$lambda;
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$alg.run_u332lz$(getPropertyCallableRef('isActive', 0, function ($receiver) {
              return $receiver.isActive;
            }.bind(null, this.local$$receiver)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$updateSimulationMenu(), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$updateSimulationMenu$lambda$lambda_0(closure$updateSimulationMenu_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_0(closure$updateSimulationMenu_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_0(closure$updateSimulationMenu_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$updateSimulationMenu = closure$updateSimulationMenu_0;
  }
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_0;
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(50, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$updateSimulationMenu(), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$updateSimulationMenu$lambda_0(this$, closure$alg, closure$updateSimulationMenu) {
    return function (it) {
      var tmp$;
      (tmp$ = this$.job) != null ? tmp$.cancel_dbl4no$() : null;
      this$.job = launch(void 0, void 0, void 0, void 0, main$lambda$updateSimulationMenu$lambda$lambda(closure$alg, closure$updateSimulationMenu));
      return launch(void 0, void 0, void 0, void 0, main$lambda$updateSimulationMenu$lambda$lambda_0(closure$updateSimulationMenu));
    };
  }
  function main$lambda$updateSimulationMenu$lambda$lambda_1(closure$alg_0, closure$updateSimulationMenu_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_1(closure$alg_0, closure$updateSimulationMenu_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_1(closure$alg_0, closure$updateSimulationMenu_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$alg = closure$alg_0;
    this.local$closure$updateSimulationMenu = closure$updateSimulationMenu_0;
  }
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_1.prototype.constructor = Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_1;
  Coroutine$main$lambda$updateSimulationMenu$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(50, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$alg.running = false;
            return this.local$closure$updateSimulationMenu(), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$updateSimulationMenu$lambda_1(this$, closure$alg, closure$updateSimulationMenu) {
    return function (it) {
      var tmp$;
      (tmp$ = this$.job) != null ? tmp$.cancel_dbl4no$() : null;
      return launch(void 0, void 0, void 0, void 0, main$lambda$updateSimulationMenu$lambda$lambda_1(closure$alg, closure$updateSimulationMenu));
    };
  }
  function main$lambda$updateSimulationMenu(this$) {
    return function closure$updateSimulationMenu() {
      var tmp$, tmp$_0;
      var alg = this$.algorithm;
      var eventHandlers = this$.simulation;
      eventHandlers.onclick = main$lambda$updateSimulationMenu$lambda;
      tmp$_0 = this$.simulation;
      if (alg == null) {
        tmp$ = 'No Algorithm Selected';
      }
       else if (!alg.complete) {
        if (!alg.running) {
          eventHandlers.onclick = main$lambda$updateSimulationMenu$lambda_0(this$, alg, closure$updateSimulationMenu);
          tmp$ = 'Start Algorithm';
        }
         else {
          eventHandlers.onclick = main$lambda$updateSimulationMenu$lambda_1(this$, alg, closure$updateSimulationMenu);
          tmp$ = 'Stop Algorithm';
        }
      }
       else if (alg.running) {
        tmp$ = 'Algorithm Finished';
      }
       else {
        tmp$ = 'Algorithm Aborted';
      }
      tmp$_0.textContent = tmp$;
    };
  }
  function main$lambda$lambda_1(closure$updateSimulationMenu) {
    return function (it) {
      closure$updateSimulationMenu();
      return Unit;
    };
  }
  function main$lambda$updateStructureMenu$lambda$lambda$lambda(this$, closure$initializionCondition, closure$initializationSize, closure$updateStructureMenu) {
    return function (it) {
      var tmp$;
      (tmp$ = this$.job) != null ? tmp$.cancel_dbl4no$() : null;
      closure$initializionCondition.invoke_za3lpa$(closure$initializationSize.v);
      closure$updateStructureMenu();
      return Unit;
    };
  }
  function main$lambda$updateStructureMenu$lambda$lambda$lambda_0(this$, closure$creator, closure$name, closure$algorithmName, closure$updateStructureMenu) {
    return function (it) {
      var tmp$;
      (tmp$ = this$.job) != null ? tmp$.cancel_dbl4no$() : null;
      this$.algorithm = closure$creator(new Int32Array([]));
      closure$algorithmName.v = closure$name;
      closure$updateStructureMenu();
      return Unit;
    };
  }
  function main$lambda$updateStructureMenu$lambda$lambda$lambda$lambda$lambda(closure$paramVals, closure$i, closure$params, this$) {
    return function (it) {
      closure$paramVals[closure$i] = it;
      this$.textContent = closure$params.get_za3lpa$(closure$i).name + ': ' + closure$paramVals[closure$i];
      return Unit;
    };
  }
  function main$lambda$updateStructureMenu$lambda$lambda$lambda$lambda(closure$params, closure$i, closure$paramVals, this$) {
    return function (f) {
      promptInt(closure$params.get_za3lpa$(closure$i).name, closure$params.get_za3lpa$(closure$i).min, closure$params.get_za3lpa$(closure$i).max, closure$paramVals[closure$i], main$lambda$updateStructureMenu$lambda$lambda$lambda$lambda$lambda(closure$paramVals, closure$i, closure$params, this$));
      return Unit;
    };
  }
  function main$lambda$updateStructureMenu$lambda$lambda$lambda$lambda_0(this$, closure$creator, closure$paramVals, closure$name, closure$algorithmName, closure$updateStructureMenu) {
    return function (it) {
      var tmp$;
      (tmp$ = this$.job) != null ? tmp$.cancel_dbl4no$() : null;
      this$.algorithm = closure$creator(closure$paramVals);
      closure$algorithmName.v = closure$name;
      closure$updateStructureMenu();
      return Unit;
    };
  }
  function main$lambda$updateStructureMenu(this$, closure$initializationSize, closure$algorithmName, closure$updateSimulationMenu) {
    return function closure$updateStructureMenu() {
      var tmp$;
      while (this$.structureMenu.lastElementChild != null) {
        this$.structureMenu.removeChild(Kotlin.isType(tmp$ = this$.structureMenu.lastElementChild, Node) ? tmp$ : throwCCE());
      }
      var tmp$_0 = this$.structureMenu;
      var $receiver = this$.structureMenuItem.cloneNode(true);
      closure$updateStructureMenu;
      var this$_0 = this$;
      var closure$initializationSize_0 = closure$initializationSize;
      var closure$updateStructureMenu_0 = closure$updateStructureMenu;
      var tmp$_1;
      ensureNotNull($receiver.firstChild).textContent = this$_0.structure.initialized ? 'Reinitialize' : 'Initialize';
      tmp$_1 = this$_0.structure.initializationConditions.iterator();
      while (tmp$_1.hasNext()) {
        var initializionCondition = tmp$_1.next();
        var tmp$_2 = ensureNotNull(get_lastElementChild($receiver));
        var $receiver_0 = this$_0.structureMenuSubItem.cloneNode(true);
        $receiver_0.textContent = initializionCondition.name;
        $receiver_0.onclick = main$lambda$updateStructureMenu$lambda$lambda$lambda(this$_0, initializionCondition, closure$initializationSize_0, closure$updateStructureMenu_0);
        tmp$_2.appendChild($receiver_0);
      }
      tmp$_0.appendChild($receiver);
      if (this$.structure.initialized) {
        var tmp$_3 = this$.structureMenu;
        var $receiver_1 = this$.structureMenuItem.cloneNode(true);
        closure$updateStructureMenu;
        var this$_1 = this$;
        var closure$algorithmName_0 = closure$algorithmName;
        var closure$updateStructureMenu_1 = closure$updateStructureMenu;
        var tmp$_4;
        ensureNotNull($receiver_1.firstChild).textContent = 'Algorithm';
        tmp$_4 = this$_1.structure.algorithms.iterator();
        while (tmp$_4.hasNext()) {
          var tmp$_5 = tmp$_4.next();
          var name = tmp$_5.component1()
          , params = tmp$_5.component2()
          , creator = tmp$_5.component3();
          if (params.isEmpty()) {
            var tmp$_6 = ensureNotNull(get_lastElementChild($receiver_1));
            var $receiver_2 = this$_1.structureMenuSubItem.cloneNode(true);
            $receiver_2.textContent = name;
            if (equals(closure$algorithmName_0.v, name)) {
              get_classList($receiver_2).add('active');
            }
            $receiver_2.onclick = main$lambda$updateStructureMenu$lambda$lambda$lambda_0(this$_1, creator, name, closure$algorithmName_0, closure$updateStructureMenu_1);
            tmp$_6.appendChild($receiver_2);
          }
           else {
            var tmp$_7 = ensureNotNull(get_lastElementChild($receiver_1));
            var $receiver_3 = this$_1.structureMenuSubListItem.cloneNode(true);
            var tmp$_8;
            ensureNotNull($receiver_3.firstChild).textContent = name;
            if (equals(closure$algorithmName_0.v, name)) {
              get_classList($receiver_3).add('active');
            }
            var array = new Int32Array(params.size);
            var tmp$_9;
            tmp$_9 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_9; i++) {
              array[i] = params.get_za3lpa$(i).default;
            }
            var paramVals = array;
            tmp$_8 = params.size;
            for (var i_0 = 0; i_0 < tmp$_8; i_0++) {
              var tmp$_10 = ensureNotNull(get_lastElementChild($receiver_3));
              var $receiver_4 = this$_1.structureMenuSubSubItem.cloneNode(true);
              $receiver_4.textContent = params.get_za3lpa$(i_0).name + ': ' + paramVals[i_0];
              $receiver_4.onclick = main$lambda$updateStructureMenu$lambda$lambda$lambda$lambda(params, i_0, paramVals, $receiver_4);
              tmp$_10.appendChild($receiver_4);
            }
            var tmp$_11 = ensureNotNull(get_lastElementChild($receiver_3));
            var $receiver_5 = this$_1.structureMenuSubSubItem.cloneNode(true);
            $receiver_5.textContent = '------';
            tmp$_11.appendChild($receiver_5);
            var tmp$_12 = ensureNotNull(get_lastElementChild($receiver_3));
            var $receiver_6 = this$_1.structureMenuSubSubItem.cloneNode(true);
            $receiver_6.textContent = 'Select';
            $receiver_6.onclick = main$lambda$updateStructureMenu$lambda$lambda$lambda$lambda_0(this$_1, creator, paramVals, name, closure$algorithmName_0, closure$updateStructureMenu_1);
            tmp$_12.appendChild($receiver_6);
            tmp$_7.appendChild($receiver_3);
          }
        }
        tmp$_3.appendChild($receiver_1);
      }
      closure$updateSimulationMenu();
    };
  }
  function main$lambda$lambda$lambda_1(closure$generator, this$, closure$operationTime, closure$algorithmName, closure$updateStructureMenu) {
    return function (it) {
      var tmp$;
      this$.structure = closure$generator();
      (tmp$ = this$.job) != null ? tmp$.cancel_dbl4no$() : null;
      this$.structure.delayMillis = closure$operationTime.v;
      this$.algorithm = null;
      closure$algorithmName.v = null;
      closure$updateStructureMenu();
      return Unit;
    };
  }
  function main(args) {
    var model = new Model();
    (new DrawController(model)).invoke();
    var operationTime = {v: 5.0};
    var initializationSize = {v: 100};
    var algorithmName = {v: null};
    var tmp$;
    model.dataSizeMenu.innerText = 'Initialization Size: ' + initializationSize.v;
    model.dataSizeMenu.id = '';
    model.dataSizeMenu.onclick = main$lambda$lambda(initializationSize, model);
    model.opTimeMenu.textContent = 'Operation Time: ' + operationTime.v + ' ms';
    model.opTimeMenu.id = '';
    model.opTimeMenu.onclick = main$lambda$lambda_0(operationTime, model);
    model.simulation.id = '';
    model.structureMenu.id = '';
    model.structureMenuSubSubItem.remove();
    model.structureMenuSubSubItem.id = '';
    model.structureMenuSubItem.remove();
    model.structureMenuSubItem.id = '';
    model.structureMenuSubListItem.remove();
    model.structureMenuSubListItem.id = '';
    model.structureMenuItem.remove();
    model.structureMenuItem.id = '';
    model.structureList.id = '';
    model.structureListItem.remove();
    model.structureListItem.id = '';
    var updateSimulationMenu = main$lambda$updateSimulationMenu(model);
    model.completionCallback = main$lambda$lambda_1(updateSimulationMenu);
    var updateStructureMenu = main$lambda$updateStructureMenu(model, initializationSize, algorithmName, updateSimulationMenu);
    var tmp$_0 = model.structureMenu;
    var $receiver = model.structureMenuItem.cloneNode(true);
    $receiver.textContent = 'No Structure Selected';
    tmp$_0.appendChild($receiver);
    tmp$ = structures.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var name = tmp$_1.key;
      var generator = tmp$_1.value;
      var tmp$_2 = model.structureList;
      var $receiver_0 = model.structureListItem.cloneNode(true);
      $receiver_0.textContent = name;
      $receiver_0.onclick = main$lambda$lambda$lambda_1(generator, model, operationTime, algorithmName, updateStructureMenu);
      tmp$_2.appendChild($receiver_0);
    }
    updateSimulationMenu();
  }
  var elementWithId = defineInlineFunction('algovis-js.com.sergeysav.algovis.elementWithId_9yif1r$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, name) {
      var tmp$;
      return isT(tmp$ = $receiver.getElementById(name)) ? tmp$ : throwCCE();
    };
  }));
  function promptInt(message, min, max, default_0, callback) {
    if (default_0 === void 0)
      default_0 = 0;
    var tmp$, tmp$_0, tmp$_1;
    var result;
    tmp$_1 = false;
    do {
      if (tmp$_1) {
        if (result != null && (toIntOrNull(result) == null || !equals(toInt(result).toString(), result))) {
          tmp$ = toInt(result);
          tmp$_0 = !(min <= tmp$ && tmp$ <= max);
        }
         else
          tmp$_0 = false;
        if (!tmp$_0)
          break;
      }
       else
        tmp$_1 = true;
      result = window.prompt(message + ' (integer between ' + min + ' and ' + max + ')', default_0.toString());
    }
     while (true);
    if (result != null) {
      callback(toInt(result));
    }
  }
  function promptDouble(message, min, max, default_0, callback) {
    if (default_0 === void 0)
      default_0 = 0.0;
    var result;
    do {
      result = window.prompt(message + ' (Must be between ' + min + ' and ' + max + ')', default_0.toString());
    }
     while (result != null && (toDoubleOrNull(result) == null || !equals(toDouble(result).toString(), result)) && !rangeTo(min, max).contains_mef7kx$(toDouble(result)));
    if (result != null) {
      callback(toDouble(result));
    }
  }
  function get_lastElementChild($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Element) ? tmp$ : throwCCE()).lastElementChild;
  }
  function get_classList($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Element) ? tmp$ : throwCCE()).classList;
  }
  function randomInt(min, max) {
    return numberToInt(Math.random() * (max - min | 0)) + min | 0;
  }
  function Model() {
    this.structure = NullStructure_getInstance();
    this.algorithm = null;
    this.completionCallback = Model$completionCallback$lambda;
    this.job = null;
    this.lastActive = null;
    var tmp$;
    this.mainArea = Kotlin.isType(tmp$ = document.getElementById('mainArea'), HTMLDivElement) ? tmp$ : throwCCE();
    var tmp$_0;
    this.controls = Kotlin.isType(tmp$_0 = document.getElementById('controls'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var tmp$_1;
    this.dataSizeMenu = Kotlin.isType(tmp$_1 = document.getElementById('dataSizeMenu'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    var tmp$_2;
    this.opTimeMenu = Kotlin.isType(tmp$_2 = document.getElementById('opTimeMenu'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    var tmp$_3;
    this.structureMenu = Kotlin.isType(tmp$_3 = document.getElementById('structureMenu'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var tmp$_4;
    this.structureMenuItem = Kotlin.isType(tmp$_4 = document.getElementById('structureMenuItem'), HTMLDivElement) ? tmp$_4 : throwCCE();
    var tmp$_5;
    this.structureMenuSubItem = Kotlin.isType(tmp$_5 = document.getElementById('structureMenuSubItem'), HTMLDivElement) ? tmp$_5 : throwCCE();
    var tmp$_6;
    this.structureMenuSubListItem = Kotlin.isType(tmp$_6 = document.getElementById('structureMenuSubListItem'), HTMLDivElement) ? tmp$_6 : throwCCE();
    var tmp$_7;
    this.structureMenuSubSubItem = Kotlin.isType(tmp$_7 = document.getElementById('structureMenuSubSubItem'), HTMLDivElement) ? tmp$_7 : throwCCE();
    var tmp$_8;
    this.simulation = Kotlin.isType(tmp$_8 = document.getElementById('simulation'), HTMLAnchorElement) ? tmp$_8 : throwCCE();
    var tmp$_9;
    this.structureList = Kotlin.isType(tmp$_9 = document.getElementById('structureList'), HTMLDivElement) ? tmp$_9 : throwCCE();
    var tmp$_10;
    this.structureListItem = Kotlin.isType(tmp$_10 = document.getElementById('structureListItem'), HTMLDivElement) ? tmp$_10 : throwCCE();
  }
  function Model$completionCallback$lambda(it) {
    return Unit;
  }
  Model.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  function DelayedArray(baseArray, getTime, setTime) {
    this.baseArray = baseArray;
    this.getTime = getTime;
    this.setTime = setTime;
    this.delayer = new Delayer();
    this.size = this.baseArray.length;
  }
  DelayedArray.prototype.get_za3lpa$ = function (index_0, continuation_0, suspended) {
    var instance = new Coroutine$get_za3lpa$(this, index_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_za3lpa$($this, index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$index = index_0;
  }
  Coroutine$get_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_za3lpa$.prototype.constructor = Coroutine$get_za3lpa$;
  Coroutine$get_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.delayer.doDelay_14dthe$(this.$this.getTime(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.baseArray[this.local$index];
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DelayedArray.prototype.set_wxm5ur$ = function (index_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$set_wxm5ur$(this, index_0, value_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$set_wxm5ur$($this, index_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$index = index_0;
    this.local$value = value_0;
  }
  Coroutine$set_wxm5ur$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_wxm5ur$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_wxm5ur$.prototype.constructor = Coroutine$set_wxm5ur$;
  Coroutine$set_wxm5ur$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.delayer.doDelay_14dthe$(this.$this.setTime(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.baseArray[this.local$index] = this.local$value;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DelayedArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelayedArray',
    interfaces: []
  };
  function DelayedArray_init(baseArray, getTime, setTime, $this) {
    $this = $this || Object.create(DelayedArray.prototype);
    DelayedArray.call($this, baseArray, DelayedArray_init$lambda(getTime), DelayedArray_init$lambda_0(setTime));
    return $this;
  }
  function DelayedArray_init$lambda(closure$getTime) {
    return function () {
      return closure$getTime;
    };
  }
  function DelayedArray_init$lambda_0(closure$setTime) {
    return function () {
      return closure$setTime;
    };
  }
  function Delayer() {
    this.extraTime = 0.0;
  }
  Delayer.prototype.doDelay_14dthe$ = function (time_0, continuation_0, suspended) {
    var instance = new Coroutine$doDelay_14dthe$(this, time_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$doDelay_14dthe$($this, time_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$time = time_0;
  }
  Coroutine$doDelay_14dthe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doDelay_14dthe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doDelay_14dthe$.prototype.constructor = Coroutine$doDelay_14dthe$;
  Coroutine$doDelay_14dthe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.extraTime += this.local$time % 1;
            if (this.$this.extraTime >= 1) {
              this.$this.extraTime -= 1;
              this.state_0 = 4;
              this.result_0 = delay(numberToInt(this.local$time) + 1 | 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (this.local$time >= 1) {
                this.state_0 = 2;
                this.result_0 = delay(numberToInt(this.local$time), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 3;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Delayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Delayer',
    interfaces: []
  };
  var middleValue = defineInlineFunction('algovis-js.com.sergeysav.algovis.middleValue_x6z98s$', wrapFunction(function () {
    function middleValue$lambda(x) {
      return x;
    }
    var Math_0 = Math;
    return function (i1, i2, i3, byFunc) {
      if (byFunc === void 0)
        byFunc = middleValue$lambda;
      var byFunc1 = byFunc(i1);
      var byFunc2 = byFunc(i2);
      var byFunc3 = byFunc(i3);
      if (byFunc1 < byFunc2 && byFunc1 < byFunc3) {
        return Math_0.min(i2, i3);
      }
       else if (byFunc2 < byFunc1 && byFunc2 < byFunc3) {
        return Math_0.min(i1, i3);
      }
       else {
        return Math_0.min(i1, i2);
      }
    };
  }));
  function toThe($receiver, exp) {
    if (exp === 1) {
      return $receiver;
    }
     else if (exp === 0) {
      return 1;
    }
     else if (exp % 2 === 0) {
      var halfExp = toThe($receiver, exp / 2 | 0);
      return Kotlin.imul(halfExp, halfExp);
    }
     else {
      var halfExp_0 = toThe($receiver, exp / 2 | 0);
      return Kotlin.imul(Kotlin.imul(halfExp_0, halfExp_0), $receiver);
    }
  }
  function Algorithm() {
    this.complete_520oux$_0 = false;
    this.running = false;
    this.isActive_ann0cw$_0 = Algorithm$isActive$lambda;
  }
  Algorithm.prototype.run_u332lz$ = function (isActive_0, continuation_0, suspended) {
    var instance = new Coroutine$run_u332lz$(this, isActive_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$run_u332lz$($this, isActive_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$isActive = isActive_0;
  }
  Coroutine$run_u332lz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$run_u332lz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$run_u332lz$.prototype.constructor = Coroutine$run_u332lz$;
  Coroutine$run_u332lz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.isActive = this.local$isActive;
            this.$this.running = true;
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.$this.execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            this.$this.complete = true;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 5:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Object.defineProperty(Algorithm.prototype, 'complete', {
    get: function () {
      return this.complete_520oux$_0;
    },
    set: function (complete) {
      this.complete_520oux$_0 = complete;
    }
  });
  Object.defineProperty(Algorithm.prototype, 'isActive', {
    get: function () {
      return this.isActive_ann0cw$_0;
    },
    set: function (isActive) {
      this.isActive_ann0cw$_0 = isActive;
    }
  });
  function Algorithm$isActive$lambda() {
    return true;
  }
  Algorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Algorithm',
    interfaces: []
  };
  function NullAlgorithm() {
    NullAlgorithm_instance = this;
    Algorithm.call(this);
  }
  NullAlgorithm.prototype.execute = function (continuation) {
    return Unit;
  };
  NullAlgorithm.prototype.initDraw_xogw00$ = function (drawer) {
  };
  NullAlgorithm.prototype.doDraw_xogw00$ = function (drawer) {
  };
  NullAlgorithm.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NullAlgorithm',
    interfaces: [Algorithm]
  };
  var NullAlgorithm_instance = null;
  function NullAlgorithm_getInstance() {
    if (NullAlgorithm_instance === null) {
      new NullAlgorithm();
    }
    return NullAlgorithm_instance;
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function ArrayAlgorithm(array) {
    Algorithm.call(this);
    this.array = array;
    this.visitedMain_k0i9i9$_0 = LinkedHashMap_init();
    this.visitedEditing_k95nhg$_0 = LinkedHashMap_init();
  }
  ArrayAlgorithm.prototype.setVisited_vux9f0$ = function (index, type) {
    if (type === void 0)
      type = 0;
    this.visitedMain_k0i9i9$_0.put_xwzc9p$(index, type);
  };
  ArrayAlgorithm.prototype.getSelection_za3lpa$ = function (index) {
    return 0;
  };
  ArrayAlgorithm.prototype.initDraw_xogw00$ = function (drawer) {
    drawer.width = this.array.delayArray.size;
    drawer.height = this.array.maxValue;
    drawer.beginDraw();
  };
  ArrayAlgorithm.prototype.doDraw_xogw00$ = function (drawer) {
    var tmp$, tmp$_0;
    var reading = this.visitedMain_k0i9i9$_0;
    this.visitedMain_k0i9i9$_0 = this.visitedEditing_k95nhg$_0;
    this.visitedEditing_k95nhg$_0 = reading;
    tmp$ = this.array.delayArray.baseArray.length;
    for (var i = 0; i < tmp$; i++) {
      var selection = this.getSelection_za3lpa$(i);
      if (selection !== 0) {
        drawer.fill_4qozqa$(selection, i, this.array.maxValue - this.array.delayArray.baseArray[i] - 1 | 0, 1, this.array.delayArray.baseArray[i] + 1 | 0);
      }
    }
    tmp$_0 = reading.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_1 = tmp$_0.next();
      var i_0 = tmp$_1.key;
      var selection_0 = tmp$_1.value;
      drawer.fill_4qozqa$(selection_0 + 1 | 0, i_0, this.array.maxValue - this.array.delayArray.baseArray[i_0] - 1 | 0, 1, this.array.delayArray.baseArray[i_0] + 1 | 0);
    }
    reading.clear();
  };
  ArrayAlgorithm.prototype.swap_vux9f0$ = function (i1_0, i2_0, continuation_0, suspended) {
    var instance = new Coroutine$swap_vux9f0$(this, i1_0, i2_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$swap_vux9f0$($this, i1_0, i2_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$temp = void 0;
    this.local$i1 = i1_0;
    this.local$i2 = i2_0;
  }
  Coroutine$swap_vux9f0$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$swap_vux9f0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$swap_vux9f0$.prototype.constructor = Coroutine$swap_vux9f0$;
  Coroutine$swap_vux9f0$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$temp = this.result_0;
            this.local$tmp$ = this.$this.array;
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.set_vux9f0$(this.local$i1, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.array.set_vux9f0$(this.local$i2, this.local$temp, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ArrayAlgorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayAlgorithm',
    interfaces: [Algorithm]
  };
  function BinarySearch(array, searchFor) {
    ArrayAlgorithm.call(this, array);
    this.searchFor_0 = searchFor;
    this.selected_0 = null;
  }
  BinarySearch.prototype.getSelection_za3lpa$ = function (index) {
    if (this.selected_0 === index) {
      return 1;
    }
     else if (this.array.delayArray.baseArray[index] === this.searchFor_0) {
      return 2;
    }
    return 0;
  };
  BinarySearch.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$low = void 0;
    this.local$high = void 0;
  }
  Coroutine$execute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute.prototype.constructor = Coroutine$execute;
  Coroutine$execute.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$low = 0;
            this.local$high = this.$this.array.size;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.selected_0 = (this.local$low + this.local$high | 0) / 2 | 0;
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(ensureNotNull(this.$this.selected_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var current = this.result_0;
            if (this.$this.searchFor_0 < current) {
              this.local$high = ensureNotNull(this.$this.selected_0);
              this.state_0 = 5;
              continue;
            }
             else {
              if (this.$this.searchFor_0 === current) {
                return;
              }
               else {
                if (this.$this.searchFor_0 > current)
                  this.local$low = ensureNotNull(this.$this.selected_0);
                this.state_0 = 4;
                continue;
              }
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            if (this.local$low >= this.local$high) {
              this.state_0 = 6;
              continue;
            }

            this.state_0 = 2;
            continue;
          case 6:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BinarySearch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinarySearch',
    interfaces: [ArrayAlgorithm]
  };
  function BogoSort(array) {
    ArrayAlgorithm.call(this, array);
    this.index = -1;
    this.index2 = -1;
  }
  BogoSort.prototype.getSelection_za3lpa$ = function (index) {
    if (this.index === index || this.index2 === index) {
      return 1;
    }
     else {
      return 0;
    }
  };
  BogoSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$execute_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_0.prototype.constructor = Coroutine$execute_0;
  Coroutine$execute_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.isActive()) {
              this.state_0 = 3;
              this.result_0 = this.$this.notSorted_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = false;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            this.result_0 = this.$this.shuffle_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BogoSort.prototype.notSorted_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$notSorted_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$notSorted_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$i = void 0;
  }
  Coroutine$notSorted_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$notSorted_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$notSorted_0.prototype.constructor = Coroutine$notSorted_0;
  Coroutine$notSorted_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.array.size;
            this.local$i = 1;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i >= this.local$tmp$) {
              this.state_0 = 7;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i);
            this.$this.index = this.local$i;
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i - 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (this.local$tmp$_0 >= this.result_0 || !this.$this.isActive()) {
              this.$this.index = -1;
              return true;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 7:
            this.$this.index = -1;
            return false;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BogoSort.prototype.shuffle_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$shuffle_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$shuffle_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$i = void 0;
  }
  Coroutine$shuffle_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$shuffle_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$shuffle_0.prototype.constructor = Coroutine$shuffle_0;
  Coroutine$shuffle_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.array.size;
            this.local$i = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i >= this.local$tmp$) {
              this.state_0 = 6;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i);
            this.$this.index = this.local$i;
            var other = randomInt(0, this.$this.array.size - 1 | 0);
            this.$this.index2 = other;
            this.state_0 = 3;
            this.result_0 = this.$this.swap_vux9f0$(this.local$i, other, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 6:
            this.$this.index2 = -1;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BogoSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BogoSort',
    interfaces: [ArrayAlgorithm]
  };
  function BubbleSort(array) {
    ArrayAlgorithm.call(this, array);
    this.selected_0 = null;
    this.sorted_0 = array.size;
  }
  BubbleSort.prototype.getSelection_za3lpa$ = function (index) {
    if (this.selected_0 === index) {
      return 1;
    }
     else if (index >= this.sorted_0) {
      return 2;
    }
    return 0;
  };
  BubbleSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_1(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_1($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$end = void 0;
    this.local$actionTaken = void 0;
    this.local$i = void 0;
  }
  Coroutine$execute_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_1.prototype.constructor = Coroutine$execute_1;
  Coroutine$execute_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$end = this.$this.array.size - 1 | 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$end < 1) {
              this.state_0 = 13;
              continue;
            }

            this.local$actionTaken = false;
            this.local$i = 0;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$i >= this.local$end) {
              this.state_0 = 10;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i);
            this.$this.selected_0 = this.local$i;
            this.state_0 = 4;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i + 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$tmp$ > this.result_0) {
              this.state_0 = 6;
              this.result_0 = this.$this.swap_vux9f0$(this.local$i, this.local$i + 1 | 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.local$actionTaken = true;
            this.state_0 = 7;
            continue;
          case 7:
            if (!this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.local$i++;
            this.state_0 = 3;
            continue;
          case 10:
            this.$this.sorted_0 = this.local$end;
            if (!this.local$actionTaken) {
              this.state_0 = 13;
              continue;
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.local$end--;
            this.state_0 = 2;
            continue;
          case 13:
            this.$this.selected_0 = -1;
            this.$this.sorted_0 = -1;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BubbleSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BubbleSort',
    interfaces: [ArrayAlgorithm]
  };
  var Array_0 = Array;
  function BufferArrayAlgorithm(array) {
    Algorithm.call(this);
    this.array = array;
    var array_0 = Array_0(this.array.delayArray.size);
    var tmp$;
    tmp$ = array_0.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array_0[i] = -1;
    }
    this.buffer = new DelayedArray(array_0, getPropertyCallableRef('delayMillis', 0, function ($receiver) {
      return $receiver.delayMillis;
    }.bind(null, this.array), function ($receiver, value) {
      $receiver.delayMillis = value;
    }.bind(null, this.array)), getPropertyCallableRef('delayMillis', 0, function ($receiver) {
      return $receiver.delayMillis;
    }.bind(null, this.array), function ($receiver, value) {
      $receiver.delayMillis = value;
    }.bind(null, this.array)));
    this.visitedMain = LinkedHashMap_init();
    this.visitedEditing = LinkedHashMap_init();
    this.visitedBuffMain = LinkedHashMap_init();
    this.visitedBuffEditing = LinkedHashMap_init();
  }
  BufferArrayAlgorithm.prototype.setVisited_vux9f0$ = function (index, type) {
    if (type === void 0)
      type = 0;
    this.visitedMain.put_xwzc9p$(index, type);
  };
  BufferArrayAlgorithm.prototype.setBuffVisited_vux9f0$ = function (index, type) {
    if (type === void 0)
      type = 0;
    this.visitedBuffMain.put_xwzc9p$(index, type);
  };
  BufferArrayAlgorithm.prototype.getSelection_za3lpa$ = function (index) {
    return 0;
  };
  BufferArrayAlgorithm.prototype.getBufferSelection_za3lpa$ = function (index) {
    return 0;
  };
  BufferArrayAlgorithm.prototype.initDraw_xogw00$ = function (drawer) {
    drawer.width = this.array.delayArray.size;
    drawer.height = this.array.maxValue * 2 | 0;
    drawer.beginDraw();
  };
  BufferArrayAlgorithm.prototype.doDraw_xogw00$ = function (drawer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var reading = this.visitedMain;
    this.visitedMain = this.visitedEditing;
    this.visitedEditing = reading;
    var readingBuff = this.visitedBuffMain;
    this.visitedBuffMain = this.visitedBuffEditing;
    this.visitedBuffEditing = readingBuff;
    tmp$ = this.array.delayArray.baseArray.length;
    for (var i = 0; i < tmp$; i++) {
      var selection = this.getSelection_za3lpa$(i);
      if (selection !== 0) {
        drawer.fill_4qozqa$(selection, i, this.array.maxValue - this.array.delayArray.baseArray[i] - 1 | 0, 1, this.array.delayArray.baseArray[i] + 1 | 0);
      }
    }
    tmp$_0 = reading.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_3 = tmp$_0.next();
      var i_0 = tmp$_3.key;
      var selection_0 = tmp$_3.value;
      drawer.fill_4qozqa$(selection_0 + 1 | 0, i_0, this.array.maxValue - this.array.delayArray.baseArray[i_0] - 1 | 0, 1, this.array.delayArray.baseArray[i_0] + 1 | 0);
    }
    tmp$_1 = this.array.delayArray.baseArray.length;
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      drawer.fill_4qozqa$(this.getBufferSelection_za3lpa$(i_1), i_1, (this.array.maxValue * 2 | 0) - this.buffer.baseArray[i_1] - 1 | 0, 1, this.buffer.baseArray[i_1] + 1 | 0);
    }
    tmp$_2 = readingBuff.entries.iterator();
    while (tmp$_2.hasNext()) {
      var tmp$_4 = tmp$_2.next();
      var i_2 = tmp$_4.key;
      var selection_1 = tmp$_4.value;
      drawer.fill_4qozqa$(selection_1 + 1 | 0, i_2, (this.array.maxValue * 2 | 0) - this.buffer.baseArray[i_2] - 1 | 0, 1, this.buffer.baseArray[i_2] + 1 | 0);
    }
    reading.clear();
    readingBuff.clear();
  };
  BufferArrayAlgorithm.prototype.swap_vux9f0$ = function (i1_0, i2_0, continuation_0, suspended) {
    var instance = new Coroutine$swap_vux9f0$_0(this, i1_0, i2_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$swap_vux9f0$_0($this, i1_0, i2_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$temp = void 0;
    this.local$i1 = i1_0;
    this.local$i2 = i2_0;
  }
  Coroutine$swap_vux9f0$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$swap_vux9f0$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$swap_vux9f0$_0.prototype.constructor = Coroutine$swap_vux9f0$_0;
  Coroutine$swap_vux9f0$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$temp = this.result_0;
            this.local$tmp$ = this.$this.array;
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.set_vux9f0$(this.local$i1, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.array.set_vux9f0$(this.local$i2, this.local$temp, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BufferArrayAlgorithm.prototype.clearBuffer_za3lpa$ = function (index_0, continuation_0, suspended) {
    var instance = new Coroutine$clearBuffer_za3lpa$(this, index_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$clearBuffer_za3lpa$($this, index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$index = index_0;
  }
  Coroutine$clearBuffer_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$clearBuffer_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$clearBuffer_za3lpa$.prototype.constructor = Coroutine$clearBuffer_za3lpa$;
  Coroutine$clearBuffer_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.buffer.set_wxm5ur$(this.local$index, -1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BufferArrayAlgorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferArrayAlgorithm',
    interfaces: [Algorithm]
  };
  function CocktailSort(array) {
    ArrayAlgorithm.call(this, array);
    this.selected_0 = null;
    this.high_0 = array.size;
    this.low_0 = -1;
  }
  CocktailSort.prototype.getSelection_za3lpa$ = function (index) {
    if (this.selected_0 === index) {
      return 1;
    }
     else if (index >= this.high_0 || index <= this.low_0) {
      return 2;
    }
    return 0;
  };
  CocktailSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_2(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_2($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$lastChanged = void 0;
    this.local$i = void 0;
    this.local$i_0 = void 0;
  }
  Coroutine$execute_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_2.prototype.constructor = Coroutine$execute_2;
  Coroutine$execute_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.low_0 >= this.$this.high_0) {
              this.state_0 = 21;
              continue;
            }

            this.local$lastChanged = this.$this.low_0;
            tmp$ = this.$this.low_0 + 1 | 0;
            this.local$tmp$_0 = this.$this.high_0 - 1 | 0;
            this.local$i = tmp$;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$i >= this.local$tmp$_0) {
              this.state_0 = 10;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i);
            this.$this.selected_0 = this.local$i;
            this.state_0 = 4;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i + 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$tmp$_1 > this.result_0) {
              this.state_0 = 6;
              this.result_0 = this.$this.swap_vux9f0$(this.local$i, this.local$i + 1 | 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.local$lastChanged = this.local$i;
            this.state_0 = 7;
            continue;
          case 7:
            if (!this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.local$i++;
            this.state_0 = 3;
            continue;
          case 10:
            this.$this.high_0 = this.local$lastChanged + 1 | 0;
            if (this.local$lastChanged === this.$this.low_0) {
              this.state_0 = 21;
              continue;
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 11:
            tmp$_0 = this.$this.high_0 - 1 | 0;
            this.local$tmp$_3 = this.$this.low_0 + 2 | 0;
            this.local$i_0 = tmp$_0;
            this.state_0 = 12;
            continue;
          case 12:
            if (this.local$i_0 < this.local$tmp$_3) {
              this.state_0 = 19;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i_0);
            this.$this.selected_0 = this.local$i_0;
            this.state_0 = 13;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_4 = this.result_0;
            this.state_0 = 14;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i_0 - 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            if (this.local$tmp$_4 < this.result_0) {
              this.state_0 = 15;
              this.result_0 = this.$this.swap_vux9f0$(this.local$i_0, this.local$i_0 - 1 | 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 16;
              continue;
            }

          case 15:
            this.local$lastChanged = this.local$i_0;
            this.state_0 = 16;
            continue;
          case 16:
            if (!this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 17;
              continue;
            }

          case 17:
            this.state_0 = 18;
            continue;
          case 18:
            this.local$i_0--;
            this.state_0 = 12;
            continue;
          case 19:
            this.$this.low_0 = this.local$lastChanged - 1 | 0;
            if (this.local$lastChanged === this.$this.high_0) {
              this.state_0 = 21;
              continue;
            }
             else {
              this.state_0 = 20;
              continue;
            }

          case 20:
            this.state_0 = 2;
            continue;
          case 21:
            this.$this.selected_0 = -1;
            this.$this.high_0 = -1;
            this.$this.low_0 = this.$this.array.size;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  CocktailSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CocktailSort',
    interfaces: [ArrayAlgorithm]
  };
  function InlineMergeSort(array) {
    ArrayAlgorithm.call(this, array);
    this.low_0 = -1;
    this.up_0 = -1;
    this.working_0 = -1;
  }
  InlineMergeSort.prototype.getSelection_za3lpa$ = function (index) {
    if (index === this.low_0 || index === this.up_0 || index === this.working_0)
      return 1;
    else
      return 0;
  };
  InlineMergeSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_3(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_3($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$execute_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_3.prototype.constructor = Coroutine$execute_3;
  Coroutine$execute_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.inlineMergeSort_0(0, this.$this.array.size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.low_0 = -1;
            this.$this.up_0 = -1;
            this.$this.working_0 = -1;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  InlineMergeSort.prototype.inlineMergeSort_0 = function (l_0, u_0, continuation_0, suspended) {
    var instance = new Coroutine$inlineMergeSort_0(this, l_0, u_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$inlineMergeSort_0($this, l_0, u_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$w = void 0;
    this.local$n = void 0;
    this.local$i = void 0;
    this.local$j = void 0;
    this.local$l = l_0;
    this.local$u = u_0;
  }
  Coroutine$inlineMergeSort_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$inlineMergeSort_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$inlineMergeSort_0.prototype.constructor = Coroutine$inlineMergeSort_0;
  Coroutine$inlineMergeSort_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if ((this.local$u - this.local$l | 0) > 1) {
              var m = this.local$l + ((this.local$u - this.local$l | 0) / 2 | 0) | 0;
              this.local$w = this.local$l + this.local$u - m | 0;
              this.$this.low_0 = this.local$l;
              this.$this.up_0 = this.local$u;
              this.$this.working_0 = this.local$w;
              this.state_0 = 2;
              this.result_0 = this.$this.sortIntoWorkingArea_0(this.local$l, m, this.local$w, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 17;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if ((this.local$w - this.local$l | 0) <= 2) {
              this.state_0 = 6;
              continue;
            }

            this.$this.low_0 = this.local$l;
            this.$this.up_0 = this.local$u;
            this.$this.working_0 = this.local$w;
            this.local$n = this.local$w;
            this.local$w = this.local$l + ((this.local$n - this.local$l + 1 | 0) / 2 | 0) | 0;
            this.state_0 = 4;
            this.result_0 = this.$this.sortIntoWorkingArea_0(this.local$w, this.local$n, this.local$l, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.mergeIntoWorkingArea_0(this.local$l, this.local$l + this.local$n - this.local$w | 0, this.local$n, this.local$u, this.local$w, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 3;
            continue;
          case 6:
            this.local$tmp$ = this.local$l + 1 | 0;
            this.local$i = this.local$w;
            this.state_0 = 7;
            continue;
          case 7:
            if (this.local$i < this.local$tmp$) {
              this.state_0 = 16;
              continue;
            }

            this.local$j = this.local$i;
            this.state_0 = 8;
            continue;
          case 8:
            if (this.local$j < this.local$u) {
              this.state_0 = 9;
              this.result_0 = this.$this.array.get_za3lpa$(this.local$j, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$_1 = false;
              this.state_0 = 11;
              continue;
            }

          case 9:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 10;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$j - 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.local$tmp$_1 = this.local$tmp$_0 < this.result_0;
            this.state_0 = 11;
            continue;
          case 11:
            if (!this.local$tmp$_1) {
              this.state_0 = 14;
              continue;
            }
             else {
              this.state_0 = 12;
              continue;
            }

          case 12:
            this.$this.low_0 = this.local$l;
            this.$this.up_0 = this.local$u;
            this.$this.working_0 = this.local$w;
            this.state_0 = 13;
            this.result_0 = this.$this.swap_vux9f0$(this.local$j, this.local$j - 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$j = this.local$j + 1 | 0;
            this.state_0 = 8;
            continue;
          case 14:
            this.state_0 = 15;
            continue;
          case 15:
            this.local$i--;
            this.state_0 = 7;
            continue;
          case 16:
            this.state_0 = 17;
            continue;
          case 17:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  InlineMergeSort.prototype.sortIntoWorkingArea_0 = function (_l_0, u_0, _w_0, continuation_0, suspended) {
    var instance = new Coroutine$sortIntoWorkingArea_0(this, _l_0, u_0, _w_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sortIntoWorkingArea_0($this, _l_0, u_0, _w_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$l = void 0;
    this.local$w = void 0;
    this.local$m = void 0;
    this.local$_l = _l_0;
    this.local$u = u_0;
    this.local$_w = _w_0;
  }
  Coroutine$sortIntoWorkingArea_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sortIntoWorkingArea_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sortIntoWorkingArea_0.prototype.constructor = Coroutine$sortIntoWorkingArea_0;
  Coroutine$sortIntoWorkingArea_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$l = this.local$_l;
            this.local$w = this.local$_w;
            this.$this.low_0 = this.local$l;
            this.$this.up_0 = this.local$u;
            this.$this.working_0 = this.local$w;
            if ((this.local$u - this.local$l | 0) > 1) {
              this.local$m = this.local$l + ((this.local$u - this.local$l | 0) / 2 | 0) | 0;
              this.state_0 = 5;
              this.result_0 = this.$this.inlineMergeSort_0(this.local$l, this.local$m, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$l >= this.local$u) {
              this.state_0 = 4;
              continue;
            }

            this.$this.low_0 = this.local$l;
            this.$this.up_0 = this.local$u;
            this.$this.working_0 = this.local$w;
            this.state_0 = 3;
            this.result_0 = this.$this.swap_vux9f0$((tmp$ = this.local$l, this.local$l = tmp$ + 1 | 0, tmp$), (tmp$_0 = this.local$w, this.local$w = tmp$_0 + 1 | 0, tmp$_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 8;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = this.$this.inlineMergeSort_0(this.local$m, this.local$u, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = this.$this.mergeIntoWorkingArea_0(this.local$_l, this.local$m, this.local$m, this.local$u, this.local$_w, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  InlineMergeSort.prototype.mergeIntoWorkingArea_0 = function (_i_0, m_0, _j_0, n_0, _w_0, continuation_0, suspended) {
    var instance = new Coroutine$mergeIntoWorkingArea_0(this, _i_0, m_0, _j_0, n_0, _w_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mergeIntoWorkingArea_0($this, _i_0, m_0, _j_0, n_0, _w_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$i = void 0;
    this.local$j = void 0;
    this.local$w = void 0;
    this.local$_i = _i_0;
    this.local$m = m_0;
    this.local$_j = _j_0;
    this.local$n = n_0;
    this.local$_w = _w_0;
  }
  Coroutine$mergeIntoWorkingArea_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mergeIntoWorkingArea_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mergeIntoWorkingArea_0.prototype.constructor = Coroutine$mergeIntoWorkingArea_0;
  Coroutine$mergeIntoWorkingArea_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
            this.local$i = this.local$_i;
            this.local$j = this.local$_j;
            this.local$w = this.local$_w;
            this.$this.low_0 = this.local$i;
            this.$this.up_0 = this.local$j;
            this.$this.working_0 = this.local$w;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i >= this.local$m || this.local$j >= this.local$n) {
              this.state_0 = 6;
              continue;
            }

            this.$this.low_0 = this.local$i;
            this.$this.up_0 = this.local$j;
            this.$this.working_0 = this.local$w;
            this.local$tmp$_0 = (tmp$ = this.local$w, this.local$w = tmp$ + 1 | 0, tmp$);
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$j, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.swap_vux9f0$(this.local$tmp$_0, this.local$tmp$_1 < this.result_0 ? (tmp$_0 = this.local$i, this.local$i = tmp$_0 + 1 | 0, tmp$_0) : (tmp$_1 = this.local$j, this.local$j = tmp$_1 + 1 | 0, tmp$_1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            if (this.local$i >= this.local$m) {
              this.state_0 = 9;
              continue;
            }

            this.$this.low_0 = this.local$i;
            this.$this.up_0 = this.local$j;
            this.$this.working_0 = this.local$w;
            this.state_0 = 8;
            this.result_0 = this.$this.swap_vux9f0$((tmp$_2 = this.local$w, this.local$w = tmp$_2 + 1 | 0, tmp$_2), (tmp$_3 = this.local$i, this.local$i = tmp$_3 + 1 | 0, tmp$_3), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 7;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            if (this.local$j >= this.local$n) {
              this.state_0 = 12;
              continue;
            }

            this.$this.low_0 = this.local$i;
            this.$this.up_0 = this.local$j;
            this.$this.working_0 = this.local$w;
            this.state_0 = 11;
            this.result_0 = this.$this.swap_vux9f0$((tmp$_4 = this.local$w, this.local$w = tmp$_4 + 1 | 0, tmp$_4), (tmp$_5 = this.local$j, this.local$j = tmp$_5 + 1 | 0, tmp$_5), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 10;
            continue;
          case 12:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  InlineMergeSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InlineMergeSort',
    interfaces: [ArrayAlgorithm]
  };
  function InsertionSort(array) {
    ArrayAlgorithm.call(this, array);
    this.sel_0 = -1;
    this.part_0 = -1;
  }
  InsertionSort.prototype.getSelection_za3lpa$ = function (index) {
    if (this.sel_0 === index) {
      return 1;
    }
     else if (index <= this.part_0) {
      return 2;
    }
    return 0;
  };
  InsertionSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_4(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_4($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$i = void 0;
    this.local$pivotVal = void 0;
    this.local$j = void 0;
  }
  Coroutine$execute_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_4.prototype.constructor = Coroutine$execute_4;
  Coroutine$execute_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.array.size;
            this.local$i = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i >= this.local$tmp$) {
              this.state_0 = 11;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i);
            this.$this.part_0 = this.local$i;
            this.$this.sel_0 = this.local$i;
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$pivotVal = this.result_0;
            this.local$j = this.local$i - 1 | 0;
            this.state_0 = 4;
            continue;
          case 4:
            if (this.local$j < 0) {
              this.state_0 = 9;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$j + 1 | 0);
            this.$this.sel_0 = this.local$j + 1 | 0;
            this.state_0 = 5;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$j, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.result_0 > this.local$pivotVal) {
              this.state_0 = 6;
              this.result_0 = this.$this.swap_vux9f0$(this.local$j, this.local$j + 1 | 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 9;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.local$j--;
            this.state_0 = 4;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 11:
            this.$this.part_0 = this.$this.part_0 + 1 | 0;
            this.$this.sel_0 = -2;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  InsertionSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InsertionSort',
    interfaces: [ArrayAlgorithm]
  };
  function LinearSearch(array, searchFor) {
    ArrayAlgorithm.call(this, array);
    this.searchFor_0 = searchFor;
    this.selected_0 = null;
  }
  LinearSearch.prototype.getSelection_za3lpa$ = function (index) {
    if (this.selected_0 === index) {
      return 1;
    }
     else if (this.array.delayArray.baseArray[index] === this.searchFor_0) {
      return 2;
    }
    return 0;
  };
  LinearSearch.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_5(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_5($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$i = void 0;
  }
  Coroutine$execute_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_5.prototype.constructor = Coroutine$execute_5;
  Coroutine$execute_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.array.size;
            this.local$i = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i >= this.local$tmp$) {
              this.state_0 = 6;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i);
            this.$this.selected_0 = this.local$i;
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (this.result_0 === this.$this.searchFor_0 || !this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 6:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  LinearSearch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearSearch',
    interfaces: [ArrayAlgorithm]
  };
  function MergeSort(array) {
    BufferArrayAlgorithm.call(this, array);
    this.left_0 = -1;
    this.right_0 = -1;
    this.lcopy_0 = -1;
    this.rcopy_0 = -1;
    this.buffer1_0 = -1;
  }
  MergeSort.prototype.getSelection_za3lpa$ = function (index) {
    if (this.left_0 === index || this.right_0 === index) {
      return 2;
    }
     else if (this.lcopy_0 === index || this.rcopy_0 === index) {
      return 1;
    }
    return 0;
  };
  MergeSort.prototype.getBufferSelection_za3lpa$ = function (index) {
    if (index === this.buffer1_0) {
      return 1;
    }
    return 0;
  };
  MergeSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_6(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_6($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$execute_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_6.prototype.constructor = Coroutine$execute_6;
  Coroutine$execute_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.sort_0(0, this.$this.array.size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.left_0 = -1;
            this.$this.right_0 = -1;
            this.$this.lcopy_0 = -1;
            this.$this.rcopy_0 = -1;
            this.$this.buffer1_0 = -1;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MergeSort.prototype.sort_0 = function (start_0, end_0, continuation_0, suspended) {
    var instance = new Coroutine$sort_0(this, start_0, end_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sort_0($this, start_0, end_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$mid = void 0;
    this.local$i = void 0;
    this.local$i_0 = void 0;
    this.local$start = start_0;
    this.local$end = end_0;
  }
  Coroutine$sort_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sort_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sort_0.prototype.constructor = Coroutine$sort_0;
  Coroutine$sort_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0;
            if ((this.local$end - this.local$start | 0) <= 1 || !this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$mid = (this.local$start + this.local$end | 0) / 2 | 0;
            this.state_0 = 3;
            this.result_0 = this.$this.sort_0(this.local$start, this.local$mid, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.sort_0(this.local$mid, this.local$end, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.$this.left_0 = this.local$start;
            this.$this.right_0 = this.local$end - 1 | 0;
            this.$this.lcopy_0 = this.local$start;
            this.$this.rcopy_0 = this.local$mid;
            this.local$i = this.local$start;
            this.state_0 = 5;
            continue;
          case 5:
            if (this.local$i >= this.local$end) {
              this.state_0 = 17;
              continue;
            }

            this.$this.setBuffVisited_vux9f0$(this.local$i);
            this.$this.buffer1_0 = this.local$i;
            if (this.$this.rcopy_0 < this.local$end) {
              this.$this.setVisited_vux9f0$(this.$this.rcopy_0);
            }

            if (this.$this.lcopy_0 < this.local$end) {
              this.$this.setVisited_vux9f0$(this.$this.lcopy_0);
            }

            if (!(this.$this.rcopy_0 >= this.local$end)) {
              if (this.$this.lcopy_0 < this.local$mid) {
                this.state_0 = 6;
                this.result_0 = this.$this.array.get_za3lpa$(this.$this.lcopy_0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.local$tmp$_0 = false;
                this.state_0 = 8;
                continue;
              }
            }
             else {
              this.local$tmp$_0 = true;
              this.state_0 = 9;
              continue;
            }

          case 6:
            this.local$tmp$ = this.result_0;
            this.state_0 = 7;
            this.result_0 = this.$this.array.get_za3lpa$(this.$this.rcopy_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_0 = this.local$tmp$ <= this.result_0;
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            if (this.local$tmp$_0) {
              this.local$tmp$_2 = this.$this.buffer;
              this.state_0 = 12;
              this.result_0 = this.$this.array.get_za3lpa$((tmp$ = this.$this.lcopy_0, this.$this.lcopy_0 = tmp$ + 1 | 0, tmp$), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$_4 = this.$this.buffer;
              this.state_0 = 10;
              this.result_0 = this.$this.array.get_za3lpa$((tmp$_0 = this.$this.rcopy_0, this.$this.rcopy_0 = tmp$_0 + 1 | 0, tmp$_0), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 10:
            this.state_0 = 11;
            this.result_0 = this.local$tmp$_4.set_wxm5ur$(this.local$i, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 14;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.local$tmp$_2.set_wxm5ur$(this.local$i, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 14;
            continue;
          case 14:
            if (!this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 15;
              continue;
            }

          case 15:
            this.state_0 = 16;
            continue;
          case 16:
            this.local$i++;
            this.state_0 = 5;
            continue;
          case 17:
            this.$this.lcopy_0 = -1;
            this.$this.rcopy_0 = -1;
            this.$this.buffer1_0 = -1;
            this.local$i_0 = this.local$start;
            this.state_0 = 18;
            continue;
          case 18:
            if (this.local$i_0 >= this.local$end) {
              this.state_0 = 24;
              continue;
            }

            this.$this.setBuffVisited_vux9f0$(this.local$i_0);
            this.$this.buffer1_0 = this.local$i_0;
            this.$this.setVisited_vux9f0$(this.local$i_0);
            this.$this.lcopy_0 = this.local$i_0;
            this.local$tmp$_5 = this.$this.array;
            this.state_0 = 19;
            this.result_0 = this.$this.buffer.get_za3lpa$(this.local$i_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            this.state_0 = 20;
            this.result_0 = this.local$tmp$_5.set_vux9f0$(this.local$i_0, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.state_0 = 21;
            this.result_0 = this.$this.clearBuffer_za3lpa$(this.local$i_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            if (!this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 22;
              continue;
            }

          case 22:
            this.state_0 = 23;
            continue;
          case 23:
            this.local$i_0++;
            this.state_0 = 18;
            continue;
          case 24:
            this.$this.lcopy_0 = -1;
            this.$this.buffer1_0 = -1;
            this.$this.left_0 = -1;
            this.$this.right_0 = -1;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MergeSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MergeSort',
    interfaces: [BufferArrayAlgorithm]
  };
  function ParMergeSort(array) {
    BufferArrayAlgorithm.call(this, array);
    this.sort_0 = null;
  }
  ParMergeSort.prototype.getSelection_za3lpa$ = function (index) {
    var tmp$;
    if ((tmp$ = this.sort_0) != null) {
      var sVal = tmp$.getSelection_za3lpa$(index);
      if (sVal !== 0)
        return sVal;
    }
    return 0;
  };
  ParMergeSort.prototype.getBufferSelection_za3lpa$ = function (index) {
    var tmp$;
    if ((tmp$ = this.sort_0) != null) {
      var sVal = tmp$.getBufferSelection_za3lpa$(index);
      if (sVal !== 0)
        return sVal;
    }
    return 0;
  };
  ParMergeSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_7(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_7($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$execute_7.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_7.prototype.constructor = Coroutine$execute_7;
  Coroutine$execute_7.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new ParMergeSort$Sort(this.$this, 0, this.$this.array.size);
            this.$this.sort_0 = $receiver;
            this.state_0 = 2;
            this.result_0 = $receiver.run(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.sort_0 = null;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ParMergeSort$Sort($outer, start, end) {
    this.$outer = $outer;
    this.start = start;
    this.end = end;
    this.left = -1;
    this.right = -1;
    this.lcopy = -1;
    this.rcopy = -1;
    this.bufferIdx = -1;
    this.sort1 = null;
    this.sort2 = null;
  }
  ParMergeSort$Sort.prototype.getSelection_za3lpa$ = function (uuid) {
    var tmp$, tmp$_0;
    if (uuid === this.left || uuid === this.right) {
      return 2;
    }
    if (uuid === this.lcopy || uuid === this.rcopy) {
      return 1;
    }
    if ((tmp$ = this.sort1) != null) {
      var sVal = tmp$.getSelection_za3lpa$(uuid);
      if (sVal !== 0)
        return sVal;
    }
    if ((tmp$_0 = this.sort2) != null) {
      var sVal_0 = tmp$_0.getSelection_za3lpa$(uuid);
      if (sVal_0 !== 0)
        return sVal_0;
    }
    return 0;
  };
  ParMergeSort$Sort.prototype.getBufferSelection_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    if (index === this.bufferIdx) {
      return 1;
    }
    if ((tmp$ = this.sort1) != null) {
      var sVal = tmp$.getBufferSelection_za3lpa$(index);
      if (sVal !== 0)
        return sVal;
    }
    if ((tmp$_0 = this.sort2) != null) {
      var sVal_0 = tmp$_0.getBufferSelection_za3lpa$(index);
      if (sVal_0 !== 0)
        return sVal_0;
    }
    return 0;
  };
  function ParMergeSort$Sort$run$lambda(this$Sort_0, closure$mid_0, this$ParMergeSort_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ParMergeSort$Sort$run$lambda(this$Sort_0, closure$mid_0, this$ParMergeSort_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ParMergeSort$Sort$run$lambda(this$Sort_0, closure$mid_0, this$ParMergeSort_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Sort = this$Sort_0;
    this.local$closure$mid = closure$mid_0;
    this.local$this$ParMergeSort = this$ParMergeSort_0;
    this.local$$receiver = void 0;
    this.local$this$Sort_0 = void 0;
  }
  Coroutine$ParMergeSort$Sort$run$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ParMergeSort$Sort$run$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ParMergeSort$Sort$run$lambda.prototype.constructor = Coroutine$ParMergeSort$Sort$run$lambda;
  Coroutine$ParMergeSort$Sort$run$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = new ParMergeSort$Sort(this.local$this$ParMergeSort, this.local$this$Sort.start, this.local$closure$mid);
            this.local$this$Sort_0 = this.local$this$Sort;
            this.local$this$Sort_0.sort1 = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.run(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$Sort_0.sort1 = null;
            return this.local$$receiver;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ParMergeSort$Sort.prototype.run = function (continuation_0, suspended) {
    var instance = new Coroutine$run(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$run($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$tmp$_9 = void 0;
    this.local$mid = void 0;
    this.local$job = void 0;
    this.local$i = void 0;
    this.local$i_0 = void 0;
  }
  Coroutine$run.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$run.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$run.prototype.constructor = Coroutine$run;
  Coroutine$run.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0;
            var tmp$_1;
            var tmp$_2;
            if ((this.$this.end - this.$this.start | 0) <= 1) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$mid = (this.$this.start + this.$this.end | 0) / 2 | 0;
            this.local$job = launch(void 0, void 0, void 0, void 0, ParMergeSort$Sort$run$lambda(this.$this, this.local$mid, this.$this.$outer));
            var $receiver = new ParMergeSort$Sort(this.$this.$outer, this.local$mid, this.$this.end);
            this.$this.sort2 = $receiver;
            this.state_0 = 3;
            this.result_0 = $receiver.run(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.sort2 = null;
            this.state_0 = 4;
            this.result_0 = this.local$job.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.$this.left = this.$this.start;
            this.$this.right = this.$this.end - 1 | 0;
            this.$this.lcopy = this.$this.start;
            this.$this.rcopy = this.local$mid;
            tmp$ = this.$this.start;
            this.local$tmp$_0 = this.$this.end;
            this.local$i = tmp$;
            this.state_0 = 5;
            continue;
          case 5:
            if (this.local$i >= this.local$tmp$_0) {
              this.state_0 = 17;
              continue;
            }

            this.$this.bufferIdx = this.local$i - 1 | 0;
            if (!(this.$this.rcopy >= this.$this.end)) {
              if (this.$this.lcopy < this.local$mid) {
                this.state_0 = 6;
                this.result_0 = this.$this.$outer.array.get_za3lpa$(this.$this.lcopy, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.local$tmp$_2 = false;
                this.state_0 = 8;
                continue;
              }
            }
             else {
              this.local$tmp$_2 = true;
              this.state_0 = 9;
              continue;
            }

          case 6:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 7;
            this.result_0 = this.$this.$outer.array.get_za3lpa$(this.$this.rcopy, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_2 = this.local$tmp$_1 <= this.result_0;
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            if (this.local$tmp$_2) {
              this.local$tmp$_4 = this.$this.$outer.buffer;
              this.state_0 = 12;
              this.result_0 = this.$this.$outer.array.get_za3lpa$((tmp$_0 = this.$this.lcopy, this.$this.lcopy = tmp$_0 + 1 | 0, tmp$_0), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$_6 = this.$this.$outer.buffer;
              this.state_0 = 10;
              this.result_0 = this.$this.$outer.array.get_za3lpa$((tmp$_1 = this.$this.rcopy, this.$this.rcopy = tmp$_1 + 1 | 0, tmp$_1), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 10:
            this.state_0 = 11;
            this.result_0 = this.local$tmp$_6.set_wxm5ur$(this.local$i, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 14;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.local$tmp$_4.set_wxm5ur$(this.local$i, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 14;
            continue;
          case 14:
            if (!this.$this.$outer.isActive()) {
              return;
            }
             else {
              this.state_0 = 15;
              continue;
            }

          case 15:
            this.state_0 = 16;
            continue;
          case 16:
            this.local$i++;
            this.state_0 = 5;
            continue;
          case 17:
            this.$this.lcopy = -1;
            this.$this.rcopy = -1;
            tmp$_2 = this.$this.start;
            this.local$tmp$_8 = this.$this.end;
            this.local$i_0 = tmp$_2;
            this.state_0 = 18;
            continue;
          case 18:
            if (this.local$i_0 >= this.local$tmp$_8) {
              this.state_0 = 24;
              continue;
            }

            this.$this.bufferIdx = this.local$i_0;
            this.$this.lcopy = this.local$i_0;
            this.local$tmp$_9 = this.$this.$outer.array;
            this.state_0 = 19;
            this.result_0 = this.$this.$outer.buffer.get_za3lpa$(this.local$i_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            this.state_0 = 20;
            this.result_0 = this.local$tmp$_9.set_vux9f0$(this.local$i_0, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.state_0 = 21;
            this.result_0 = this.$this.$outer.clearBuffer_za3lpa$(this.local$i_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            if (!this.$this.$outer.isActive()) {
              return;
            }
             else {
              this.state_0 = 22;
              continue;
            }

          case 22:
            this.state_0 = 23;
            continue;
          case 23:
            this.local$i_0++;
            this.state_0 = 18;
            continue;
          case 24:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ParMergeSort$Sort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sort',
    interfaces: []
  };
  ParMergeSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParMergeSort',
    interfaces: [BufferArrayAlgorithm]
  };
  function ParQuickSort(array) {
    ArrayAlgorithm.call(this, array);
    this.sort_0 = null;
  }
  ParQuickSort.prototype.getSelection_za3lpa$ = function (index) {
    var tmp$;
    if ((tmp$ = this.sort_0) != null) {
      return tmp$.getSelection_za3lpa$(index);
    }
    return 0;
  };
  ParQuickSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_8(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_8($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$execute_8.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_8.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_8.prototype.constructor = Coroutine$execute_8;
  Coroutine$execute_8.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new ParQuickSort$Sort(this.$this, 0, this.$this.array.size - 1 | 0);
            this.$this.sort_0 = $receiver;
            this.state_0 = 2;
            this.result_0 = $receiver.run(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.sort_0 = null;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ParQuickSort$Sort($outer, _l, _h) {
    this.$outer = $outer;
    this._l = _l;
    this._h = _h;
    this.low = -1;
    this.high = -1;
    this.pivotIdx = -1;
    this.sort1 = null;
    this.sort2 = null;
  }
  ParQuickSort$Sort.prototype.getSelection_za3lpa$ = function (uuid) {
    var tmp$, tmp$_0;
    if (uuid === this.low || uuid === this.high) {
      return 1;
    }
    if (uuid === this.pivotIdx) {
      return 2;
    }
    if ((tmp$ = this.sort1) != null) {
      var sVal = tmp$.getSelection_za3lpa$(uuid);
      if (sVal !== 0)
        return sVal;
    }
    if ((tmp$_0 = this.sort2) != null) {
      var sVal_0 = tmp$_0.getSelection_za3lpa$(uuid);
      if (sVal_0 !== 0)
        return sVal_0;
    }
    return 0;
  };
  function ParQuickSort$Sort$run$lambda(closure$oldLow_0, closure$h_0, this$ParQuickSort_0, this$Sort_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ParQuickSort$Sort$run$lambda(closure$oldLow_0, closure$h_0, this$ParQuickSort_0, this$Sort_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ParQuickSort$Sort$run$lambda(closure$oldLow_0, closure$h_0, this$ParQuickSort_0, this$Sort_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$oldLow = closure$oldLow_0;
    this.local$closure$h = closure$h_0;
    this.local$this$ParQuickSort = this$ParQuickSort_0;
    this.local$this$Sort = this$Sort_0;
    this.local$$receiver = void 0;
    this.local$this$Sort_0 = void 0;
  }
  Coroutine$ParQuickSort$Sort$run$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ParQuickSort$Sort$run$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ParQuickSort$Sort$run$lambda.prototype.constructor = Coroutine$ParQuickSort$Sort$run$lambda;
  Coroutine$ParQuickSort$Sort$run$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = new ParQuickSort$Sort(this.local$this$ParQuickSort, this.local$closure$oldLow, this.local$closure$h);
            this.local$this$Sort_0 = this.local$this$Sort;
            this.local$this$Sort_0.sort1 = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.run(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$Sort_0.sort1 = null;
            return this.local$$receiver;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var Math_0 = Math;
  ParQuickSort$Sort.prototype.run = function (continuation_0, suspended) {
    var instance = new Coroutine$run_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$run_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$i1 = void 0;
    this.local$i2 = void 0;
    this.local$i3 = void 0;
    this.local$byFunc1 = void 0;
    this.local$byFunc2 = void 0;
    this.local$pivotVal = void 0;
    this.local$oldLow = void 0;
    this.local$oldHigh = void 0;
    this.local$swapPivotIdx = void 0;
    this.local$job = void 0;
  }
  Coroutine$run_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$run_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$run_0.prototype.constructor = Coroutine$run_0;
  Coroutine$run_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.low = this.$this._l;
            this.$this.high = this.$this._h;
            if (this.$this.low >= this.$this.high || !this.$this.$outer.isActive()) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$i1 = this.$this.low;
            this.local$i2 = this.$this.high;
            this.local$i3 = (this.$this.high + this.$this.low | 0) / 2 | 0;
            this.$this.$outer;
            var middleValue$result;
            var this$ParQuickSort = this.$this.$outer;
            var x = this.local$i1;
            this.state_0 = 3;
            this.result_0 = this$ParQuickSort.array.get_za3lpa$(x, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$byFunc1 = this.result_0;
            var this$ParQuickSort_0 = this.$this.$outer;
            var x_0 = this.local$i2;
            this.state_0 = 4;
            this.result_0 = this$ParQuickSort_0.array.get_za3lpa$(x_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$byFunc2 = this.result_0;
            var this$ParQuickSort_1 = this.$this.$outer;
            var x_1 = this.local$i3;
            this.state_0 = 5;
            this.result_0 = this$ParQuickSort_1.array.get_za3lpa$(x_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var byFunc3 = this.result_0;
            if (this.local$byFunc1 < this.local$byFunc2 && this.local$byFunc1 < byFunc3) {
              middleValue$result = Math_0.min(this.local$i2, this.local$i3);
            }
             else if (this.local$byFunc2 < this.local$byFunc1 && this.local$byFunc2 < byFunc3) {
              middleValue$result = Math_0.min(this.local$i1, this.local$i3);
            }
             else {
              middleValue$result = Math_0.min(this.local$i1, this.local$i2);
            }

            this.$this.pivotIdx = middleValue$result;
            this.state_0 = 6;
            this.result_0 = this.$this.$outer.array.get_za3lpa$(this.$this.pivotIdx, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$pivotVal = this.result_0;
            this.local$oldLow = this.$this.low;
            this.local$oldHigh = this.$this.high;
            this.state_0 = 7;
            continue;
          case 7:
            if (this.$this.low >= this.$this.high || !this.$this.$outer.isActive()) {
              this.state_0 = 19;
              continue;
            }

            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = this.$this.$outer.array.get_za3lpa$(this.$this.low, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            if (!(this.result_0 < this.local$pivotVal && this.$this.$outer.isActive())) {
              this.state_0 = 11;
              continue;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.$this.low = this.$this.low + 1 | 0;
            this.state_0 = 8;
            continue;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.$this.$outer.array.get_za3lpa$(this.$this.high, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            if (!(this.result_0 > this.local$pivotVal && this.$this.$outer.isActive())) {
              this.state_0 = 15;
              continue;
            }
             else {
              this.state_0 = 14;
              continue;
            }

          case 14:
            this.$this.high = this.$this.high - 1 | 0;
            this.state_0 = 12;
            continue;
          case 15:
            if (!this.$this.$outer.isActive()) {
              return;
            }
             else {
              this.state_0 = 16;
              continue;
            }

          case 16:
            if (this.$this.low < this.$this.high) {
              this.local$swapPivotIdx = this.$this.pivotIdx === this.$this.low ? 1 : this.$this.pivotIdx === this.$this.high ? -1 : 0;
              this.state_0 = 17;
              this.result_0 = this.$this.$outer.swap_vux9f0$(this.$this.low, this.$this.high, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (this.$this.low === this.$this.high) {
                this.$this.low = this.$this.low + 1 | 0;
                this.$this.high = this.$this.high - 1 | 0;
              }
              this.state_0 = 18;
              continue;
            }

          case 17:
            if (this.local$swapPivotIdx === 1) {
              this.$this.pivotIdx = this.$this.high;
            }

            if (this.local$swapPivotIdx === -1) {
              this.$this.pivotIdx = this.$this.low;
            }

            this.$this.low = this.$this.low + 1 | 0;
            this.$this.high = this.$this.high - 1 | 0;
            this.state_0 = 18;
            continue;
          case 18:
            this.state_0 = 7;
            continue;
          case 19:
            var l = this.$this.low;
            var h = this.$this.high;
            this.$this.low = -1;
            this.$this.high = -1;
            this.$this.pivotIdx = -1;
            this.local$job = launch(void 0, void 0, void 0, void 0, ParQuickSort$Sort$run$lambda(this.local$oldLow, h, this.$this.$outer, this.$this));
            var $receiver = new ParQuickSort$Sort(this.$this.$outer, l, this.local$oldHigh);
            this.$this.sort2 = $receiver;
            this.state_0 = 20;
            this.result_0 = $receiver.run(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.$this.sort2 = null;
            this.state_0 = 21;
            this.result_0 = this.local$job.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ParQuickSort$Sort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sort',
    interfaces: []
  };
  ParQuickSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParQuickSort',
    interfaces: [ArrayAlgorithm]
  };
  function QuickSort(array) {
    ArrayAlgorithm.call(this, array);
    this.low_0 = -1;
    this.high_0 = -1;
    this.pivotIdx_0 = -1;
  }
  QuickSort.prototype.getSelection_za3lpa$ = function (index) {
    if (this.low_0 === index || this.high_0 === index) {
      return 1;
    }
     else if (this.pivotIdx_0 === index) {
      return 2;
    }
    return 0;
  };
  QuickSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_9(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_9($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$execute_9.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_9.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_9.prototype.constructor = Coroutine$execute_9;
  Coroutine$execute_9.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.quickSort_0(0, this.$this.array.size - 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.low_0 = -1;
            this.$this.high_0 = -1;
            this.$this.pivotIdx_0 = -1;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  QuickSort.prototype.quickSort_0 = function (_l_0, _h_0, continuation_0, suspended) {
    var instance = new Coroutine$quickSort_0(this, _l_0, _h_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$quickSort_0($this, _l_0, _h_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$l = void 0;
    this.local$h = void 0;
    this.local$i1 = void 0;
    this.local$i2 = void 0;
    this.local$i3 = void 0;
    this.local$byFunc1 = void 0;
    this.local$byFunc2 = void 0;
    this.local$pivotVal = void 0;
    this.local$oldLow = void 0;
    this.local$oldHigh = void 0;
    this.local$swapPivotIdx = void 0;
    this.local$_l = _l_0;
    this.local$_h = _h_0;
  }
  Coroutine$quickSort_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$quickSort_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$quickSort_0.prototype.constructor = Coroutine$quickSort_0;
  Coroutine$quickSort_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$l = this.local$_l;
            this.local$h = this.local$_h;
            this.$this.low_0 = this.local$l;
            this.$this.high_0 = this.local$h;
            if (this.$this.low_0 >= this.$this.high_0 || !this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$i1 = this.$this.low_0;
            this.local$i2 = this.$this.high_0;
            this.local$i3 = (this.$this.high_0 + this.$this.low_0 | 0) / 2 | 0;
            var middleValue$result;
            var x = this.local$i1;
            this.state_0 = 3;
            this.result_0 = this.$this.array.get_za3lpa$(x, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$byFunc1 = this.result_0;
            var x_0 = this.local$i2;
            this.state_0 = 4;
            this.result_0 = this.$this.array.get_za3lpa$(x_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$byFunc2 = this.result_0;
            var x_1 = this.local$i3;
            this.state_0 = 5;
            this.result_0 = this.$this.array.get_za3lpa$(x_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var byFunc3 = this.result_0;
            if (this.local$byFunc1 < this.local$byFunc2 && this.local$byFunc1 < byFunc3) {
              middleValue$result = Math_0.min(this.local$i2, this.local$i3);
            }
             else if (this.local$byFunc2 < this.local$byFunc1 && this.local$byFunc2 < byFunc3) {
              middleValue$result = Math_0.min(this.local$i1, this.local$i3);
            }
             else {
              middleValue$result = Math_0.min(this.local$i1, this.local$i2);
            }

            this.$this.pivotIdx_0 = middleValue$result;
            this.state_0 = 6;
            this.result_0 = this.$this.array.get_za3lpa$(this.$this.pivotIdx_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$pivotVal = this.result_0;
            this.local$oldLow = this.$this.low_0;
            this.local$oldHigh = this.$this.high_0;
            this.state_0 = 7;
            continue;
          case 7:
            if (this.$this.low_0 >= this.$this.high_0 || !this.$this.isActive()) {
              this.state_0 = 19;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.$this.low_0);
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = this.$this.array.get_za3lpa$(this.$this.low_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            if (!(this.result_0 < this.local$pivotVal && this.$this.isActive())) {
              this.state_0 = 11;
              continue;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.$this.low_0 = this.$this.low_0 + 1 | 0;
            this.$this.setVisited_vux9f0$(this.$this.low_0);
            this.state_0 = 8;
            continue;
          case 11:
            this.$this.setVisited_vux9f0$(this.$this.high_0);
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.$this.array.get_za3lpa$(this.$this.high_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            if (!(this.result_0 > this.local$pivotVal && this.$this.isActive())) {
              this.state_0 = 15;
              continue;
            }
             else {
              this.state_0 = 14;
              continue;
            }

          case 14:
            this.$this.high_0 = this.$this.high_0 - 1 | 0;
            this.$this.setVisited_vux9f0$(this.$this.high_0);
            this.state_0 = 12;
            continue;
          case 15:
            if (!this.$this.isActive()) {
              return;
            }
             else {
              this.state_0 = 16;
              continue;
            }

          case 16:
            if (this.$this.low_0 < this.$this.high_0) {
              this.local$swapPivotIdx = this.$this.pivotIdx_0 === this.$this.low_0 ? 1 : this.$this.pivotIdx_0 === this.$this.high_0 ? -1 : 0;
              this.state_0 = 17;
              this.result_0 = this.$this.swap_vux9f0$(this.$this.low_0, this.$this.high_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (this.$this.low_0 === this.$this.high_0) {
                this.$this.low_0 = this.$this.low_0 + 1 | 0;
                this.$this.setVisited_vux9f0$(this.$this.low_0);
                this.$this.high_0 = this.$this.high_0 - 1 | 0;
                this.$this.setVisited_vux9f0$(this.$this.high_0);
              }
              this.state_0 = 18;
              continue;
            }

          case 17:
            if (this.local$swapPivotIdx === 1)
              this.$this.pivotIdx_0 = this.$this.high_0;
            if (this.local$swapPivotIdx === -1)
              this.$this.pivotIdx_0 = this.$this.low_0;
            this.$this.low_0 = this.$this.low_0 + 1 | 0;
            this.$this.setVisited_vux9f0$(this.$this.low_0);
            this.$this.high_0 = this.$this.high_0 - 1 | 0;
            this.$this.setVisited_vux9f0$(this.$this.high_0);
            this.state_0 = 18;
            continue;
          case 18:
            this.state_0 = 7;
            continue;
          case 19:
            this.local$l = this.$this.low_0;
            this.local$h = this.$this.high_0;
            this.state_0 = 20;
            this.result_0 = this.$this.quickSort_0(this.local$oldLow, this.$this.high_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.$this.low_0 = this.local$l;
            this.$this.high_0 = this.local$h;
            this.state_0 = 21;
            this.result_0 = this.$this.quickSort_0(this.$this.low_0, this.local$oldHigh, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  QuickSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuickSort',
    interfaces: [ArrayAlgorithm]
  };
  function SelectionSort(array) {
    ArrayAlgorithm.call(this, array);
    this.sortedPartition_0 = -1;
    this.min_0 = -1;
    this.selected_0 = -1;
  }
  SelectionSort.prototype.getSelection_za3lpa$ = function (index) {
    if (index === this.min_0 || index === this.selected_0) {
      return 1;
    }
     else if (index <= this.sortedPartition_0) {
      return 2;
    }
    return 0;
  };
  SelectionSort.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_10(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_10($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$i = void 0;
    this.local$i2 = void 0;
  }
  Coroutine$execute_10.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_10.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_10.prototype.constructor = Coroutine$execute_10;
  Coroutine$execute_10.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.array.size - 1 | 0;
            this.local$i = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i >= this.local$tmp$) {
              this.state_0 = 10;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i);
            this.$this.min_0 = this.local$i;
            this.$this.selected_0 = this.local$i;
            this.local$tmp$_0 = this.$this.array.size;
            this.local$i2 = this.local$i + 1 | 0;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$i2 >= this.local$tmp$_0) {
              this.state_0 = 7;
              continue;
            }

            this.$this.setVisited_vux9f0$(this.local$i2);
            this.$this.selected_0 = this.local$i2;
            this.state_0 = 4;
            this.result_0 = this.$this.array.get_za3lpa$(this.local$i2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.$this.array.get_za3lpa$(this.$this.min_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$tmp$_1 < this.result_0) {
              this.$this.min_0 = this.local$i2;
            }

            this.state_0 = 6;
            continue;
          case 6:
            this.local$i2++;
            this.state_0 = 3;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.$this.swap_vux9f0$(this.local$i, this.$this.min_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.$this.sortedPartition_0 = this.local$i;
            this.state_0 = 9;
            continue;
          case 9:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 10:
            this.$this.min_0 = -1;
            this.$this.sortedPartition_0 = this.$this.array.size + 1 | 0;
            this.$this.selected_0 = -1;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SelectionSort.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectionSort',
    interfaces: [ArrayAlgorithm]
  };
  function AddAlgorithm(bst, toAdd) {
    Algorithm.call(this);
    this.bst = bst;
    this.toAdd = toAdd;
    this.selectedNode = null;
  }
  AddAlgorithm.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_11(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_11($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$execute_11.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_11.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_11.prototype.constructor = Coroutine$execute_11;
  Coroutine$execute_11.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.bst;
            this.state_0 = 2;
            this.result_0 = this.$this.add_0(this.$this.bst.root, this.$this.toAdd, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.root = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.bst.delayer.doDelay_14dthe$(this.$this.bst.delayMillis, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.selectedNode = null;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AddAlgorithm.prototype.add_0 = function ($receiver_0, toAdd_0, continuation_0, suspended) {
    var instance = new Coroutine$add_0(this, $receiver_0, toAdd_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$add_0($this, $receiver_0, toAdd_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$toAdd = toAdd_0;
  }
  Coroutine$add_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_0.prototype.constructor = Coroutine$add_0;
  Coroutine$add_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.$this.isActive()) {
              return this.local$$receiver;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.$this.selectedNode = this.local$$receiver;
            if (this.local$$receiver == null) {
              return new BSTStructure$Node(this.$this.bst, this.local$toAdd);
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            if (this.local$toAdd < this.local$$receiver.data) {
              this.state_0 = 8;
              this.result_0 = this.local$$receiver.getLeft(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (this.local$$receiver.data < this.local$toAdd) {
                this.state_0 = 4;
                this.result_0 = this.local$$receiver.getRight(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 7;
                continue;
              }
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.add_0(this.result_0, this.local$toAdd, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var node = this.result_0;
            this.$this.selectedNode = node;
            this.state_0 = 6;
            this.result_0 = this.local$$receiver.setRight_1t4q9q$(node, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 11;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = this.$this.add_0(this.result_0, this.local$toAdd, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var node_0 = this.result_0;
            this.$this.selectedNode = node_0;
            this.state_0 = 10;
            this.result_0 = this.local$$receiver.setLeft_1t4q9q$(node_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.$this.selectedNode = this.local$$receiver;
            return this.local$$receiver;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AddAlgorithm.prototype.initDraw_xogw00$ = function (drawer) {
    this.bst.initDraw_xogw00$(drawer);
  };
  AddAlgorithm.prototype.doDraw_xogw00$ = function (drawer) {
    var tmp$;
    if ((tmp$ = this.selectedNode) != null) {
      tmp$.draw_799jm6$(drawer, 1);
    }
  };
  AddAlgorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddAlgorithm',
    interfaces: [Algorithm]
  };
  function BSTAlgorithm(bst) {
    Algorithm.call(this);
    this.bst = bst;
    this.visited_2htjcc$_0 = LinkedHashMap_init();
    this.visitedDrawing_q7gf92$_0 = LinkedHashMap_init();
  }
  BSTAlgorithm.prototype.setVisited_7jib00$ = function (node, type) {
    if (type === void 0)
      type = 0;
    if (node != null) {
      this.visited_2htjcc$_0.put_xwzc9p$(node, type);
    }
  };
  BSTAlgorithm.prototype.initDraw_xogw00$ = function (drawer) {
    this.bst.initDraw_xogw00$(drawer);
  };
  function BSTAlgorithm$doDraw$drawRecur(closure$drawer, this$BSTAlgorithm) {
    return function closure$drawRecur(node) {
      if (node != null) {
        node.draw_799jm6$(closure$drawer, this$BSTAlgorithm.getType_kohl5t$(node));
        closure$drawRecur(node.left);
        closure$drawRecur(node.right);
      }
    };
  }
  BSTAlgorithm.prototype.doDraw_xogw00$ = function (drawer) {
    var tmp$;
    var reading = this.visited_2htjcc$_0;
    this.visited_2htjcc$_0 = this.visitedDrawing_q7gf92$_0;
    this.visitedDrawing_q7gf92$_0 = reading;
    tmp$ = reading.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var node = tmp$_0.key;
      var type = tmp$_0.value;
      node.draw_799jm6$(drawer, type);
    }
    var drawRecur = BSTAlgorithm$doDraw$drawRecur(drawer, this);
    drawRecur(this.bst.root);
    reading.clear();
  };
  BSTAlgorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BSTAlgorithm',
    interfaces: [Algorithm]
  };
  function RemoveAlgorithmPredecessor(bst, toRemove) {
    BSTAlgorithm.call(this, bst);
    this.toRemove = toRemove;
    this.selectedNode1 = null;
    this.selectedNode2 = null;
  }
  RemoveAlgorithmPredecessor.prototype.getType_kohl5t$ = function (node) {
    if (equals(node, this.selectedNode1) || equals(node, this.selectedNode2)) {
      return 1;
    }
    return 0;
  };
  RemoveAlgorithmPredecessor.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_12(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_12($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$execute_12.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_12.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_12.prototype.constructor = Coroutine$execute_12;
  Coroutine$execute_12.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.bst;
            this.state_0 = 2;
            this.result_0 = this.$this.remove_0(this.$this.bst.root, this.$this.toRemove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.root = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.bst.delayer.doDelay_14dthe$(this.$this.bst.delayMillis, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.selectedNode1 = null;
            this.$this.selectedNode2 = null;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RemoveAlgorithmPredecessor.prototype.remove_0 = function ($receiver_0, toRemove_0, continuation_0, suspended) {
    var instance = new Coroutine$remove_0(this, $receiver_0, toRemove_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$remove_0($this, $receiver_0, toRemove_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$toRemove = toRemove_0;
  }
  Coroutine$remove_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$remove_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$remove_0.prototype.constructor = Coroutine$remove_0;
  Coroutine$remove_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.$this.isActive() || this.local$$receiver == null) {
              return this.local$$receiver;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.$this.setVisited_7jib00$(this.local$$receiver);
            this.$this.selectedNode1 = this.local$$receiver;
            if (this.local$toRemove < this.local$$receiver.data) {
              this.state_0 = 7;
              this.result_0 = this.local$$receiver.getLeft(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (this.local$toRemove > this.local$$receiver.data) {
                this.state_0 = 3;
                this.result_0 = this.local$$receiver.getRight(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 6;
                continue;
              }
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.remove_0(this.result_0, this.local$toRemove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var node = this.result_0;
            this.$this.setVisited_7jib00$(node);
            this.$this.selectedNode1 = node;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.setRight_1t4q9q$(node, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return this.local$$receiver;
          case 6:
            this.state_0 = 10;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.$this.remove_0(this.result_0, this.local$toRemove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var node_0 = this.result_0;
            this.$this.setVisited_7jib00$(node_0);
            this.$this.selectedNode1 = node_0;
            this.state_0 = 9;
            this.result_0 = this.local$$receiver.setLeft_1t4q9q$(node_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            return this.local$$receiver;
          case 10:
            this.state_0 = 11;
            this.result_0 = this.$this.performRemove_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RemoveAlgorithmPredecessor.prototype.performRemove_0 = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$performRemove_0(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$performRemove_0($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$leftChild = void 0;
    this.local$parent = void 0;
    this.local$predecessor = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$performRemove_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$performRemove_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$performRemove_0.prototype.constructor = Coroutine$performRemove_0;
  Coroutine$performRemove_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.setVisited_7jib00$(this.local$$receiver);
            this.$this.selectedNode1 = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getLeft(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$leftChild = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.getRight(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var rightChild = this.result_0;
            if (rightChild == null) {
              return this.local$leftChild;
            }
             else {
              if (this.local$leftChild != null) {
                this.local$parent = this.local$$receiver;
                this.local$predecessor = this.local$leftChild;
                this.$this.setVisited_7jib00$(this.local$predecessor);
                this.$this.selectedNode2 = this.local$predecessor;
                this.state_0 = 4;
                continue;
              }
               else {
                this.local$tmp$ = rightChild;
                this.state_0 = 14;
                continue;
              }
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$predecessor.getRight(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (!(this.result_0 != null)) {
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.$this.setVisited_7jib00$(this.local$predecessor);
            this.$this.selectedNode2 = this.local$predecessor;
            this.local$parent = this.local$predecessor;
            this.state_0 = 7;
            this.result_0 = this.local$predecessor.getRight(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$predecessor = ensureNotNull(this.result_0);
            this.state_0 = 4;
            continue;
          case 8:
            this.local$$receiver.data = this.local$predecessor.data;
            if (equals(this.local$parent, this.local$$receiver)) {
              this.state_0 = 11;
              this.result_0 = this.$this.performRemove_0(this.local$predecessor, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 9;
              this.result_0 = this.$this.performRemove_0(this.local$predecessor, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 9:
            this.state_0 = 10;
            this.result_0 = this.local$parent.setRight_1t4q9q$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 13;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = this.local$$receiver.setLeft_1t4q9q$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 13;
            continue;
          case 13:
            this.$this.selectedNode2 = null;
            this.local$tmp$ = this.local$$receiver;
            this.state_0 = 14;
            continue;
          case 14:
            this.state_0 = 15;
            continue;
          case 15:
            return this.local$tmp$;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RemoveAlgorithmPredecessor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveAlgorithmPredecessor',
    interfaces: [BSTAlgorithm]
  };
  function RemoveAlgorithmSuccessor(bst, toRemove) {
    BSTAlgorithm.call(this, bst);
    this.toRemove = toRemove;
    this.selectedNode1 = null;
    this.selectedNode2 = null;
  }
  RemoveAlgorithmSuccessor.prototype.getType_kohl5t$ = function (node) {
    if (equals(node, this.selectedNode1) || equals(node, this.selectedNode2)) {
      return 1;
    }
    return 0;
  };
  RemoveAlgorithmSuccessor.prototype.execute = function (continuation_0, suspended) {
    var instance = new Coroutine$execute_13(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_13($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$execute_13.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_13.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_13.prototype.constructor = Coroutine$execute_13;
  Coroutine$execute_13.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.bst;
            this.state_0 = 2;
            this.result_0 = this.$this.remove_0(this.$this.bst.root, this.$this.toRemove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.root = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.bst.delayer.doDelay_14dthe$(this.$this.bst.delayMillis, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.selectedNode1 = null;
            this.$this.selectedNode2 = null;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RemoveAlgorithmSuccessor.prototype.remove_0 = function ($receiver_0, toRemove_0, continuation_0, suspended) {
    var instance = new Coroutine$remove_0_0(this, $receiver_0, toRemove_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$remove_0_0($this, $receiver_0, toRemove_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$toRemove = toRemove_0;
  }
  Coroutine$remove_0_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$remove_0_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$remove_0_0.prototype.constructor = Coroutine$remove_0_0;
  Coroutine$remove_0_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.$this.isActive() || this.local$$receiver == null) {
              return this.local$$receiver;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.$this.setVisited_7jib00$(this.local$$receiver);
            this.$this.selectedNode1 = this.local$$receiver;
            if (this.local$toRemove < this.local$$receiver.data) {
              this.state_0 = 7;
              this.result_0 = this.local$$receiver.getLeft(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (this.local$toRemove > this.local$$receiver.data) {
                this.state_0 = 3;
                this.result_0 = this.local$$receiver.getRight(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 6;
                continue;
              }
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.remove_0(this.result_0, this.local$toRemove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var node = this.result_0;
            this.$this.setVisited_7jib00$(node);
            this.$this.selectedNode1 = node;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.setRight_1t4q9q$(node, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return this.local$$receiver;
          case 6:
            this.state_0 = 10;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.$this.remove_0(this.result_0, this.local$toRemove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var node_0 = this.result_0;
            this.$this.setVisited_7jib00$(node_0);
            this.$this.selectedNode1 = node_0;
            this.state_0 = 9;
            this.result_0 = this.local$$receiver.setLeft_1t4q9q$(node_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            return this.local$$receiver;
          case 10:
            this.state_0 = 11;
            this.result_0 = this.$this.performRemove_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RemoveAlgorithmSuccessor.prototype.performRemove_0 = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$performRemove_0_0(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$performRemove_0_0($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$leftChild = void 0;
    this.local$parent = void 0;
    this.local$predecessor = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$performRemove_0_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$performRemove_0_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$performRemove_0_0.prototype.constructor = Coroutine$performRemove_0_0;
  Coroutine$performRemove_0_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.setVisited_7jib00$(this.local$$receiver);
            this.$this.selectedNode1 = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getLeft(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$leftChild = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.getRight(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var rightChild = this.result_0;
            if (this.local$leftChild == null) {
              return rightChild;
            }
             else {
              if (rightChild != null) {
                this.local$parent = this.local$$receiver;
                this.local$predecessor = rightChild;
                this.$this.setVisited_7jib00$(this.local$predecessor);
                this.$this.selectedNode2 = this.local$predecessor;
                this.state_0 = 4;
                continue;
              }
               else {
                this.local$tmp$ = this.local$leftChild;
                this.state_0 = 14;
                continue;
              }
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$predecessor.getLeft(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (!(this.result_0 != null)) {
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.$this.setVisited_7jib00$(this.local$predecessor);
            this.$this.selectedNode2 = this.local$predecessor;
            this.local$parent = this.local$predecessor;
            this.state_0 = 7;
            this.result_0 = this.local$predecessor.getLeft(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$predecessor = ensureNotNull(this.result_0);
            this.state_0 = 4;
            continue;
          case 8:
            this.local$$receiver.data = this.local$predecessor.data;
            if (equals(this.local$parent, this.local$$receiver)) {
              this.state_0 = 11;
              this.result_0 = this.$this.performRemove_0(this.local$predecessor, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 9;
              this.result_0 = this.$this.performRemove_0(this.local$predecessor, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 9:
            this.state_0 = 10;
            this.result_0 = this.local$parent.setLeft_1t4q9q$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 13;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = this.local$$receiver.setRight_1t4q9q$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 13;
            continue;
          case 13:
            this.$this.selectedNode2 = null;
            this.local$tmp$ = this.local$$receiver;
            this.state_0 = 14;
            continue;
          case 14:
            this.state_0 = 15;
            continue;
          case 15:
            return this.local$tmp$;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RemoveAlgorithmSuccessor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveAlgorithmSuccessor',
    interfaces: [BSTAlgorithm]
  };
  function AlgorithmReference(name, params, creator) {
    if (params === void 0)
      params = emptyList();
    this.name = name;
    this.params = params;
    this.creator = creator;
  }
  AlgorithmReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlgorithmReference',
    interfaces: []
  };
  AlgorithmReference.prototype.component1 = function () {
    return this.name;
  };
  AlgorithmReference.prototype.component2 = function () {
    return this.params;
  };
  AlgorithmReference.prototype.component3 = function () {
    return this.creator;
  };
  AlgorithmReference.prototype.copy_hgvjsi$ = function (name, params, creator) {
    return new AlgorithmReference(name === void 0 ? this.name : name, params === void 0 ? this.params : params, creator === void 0 ? this.creator : creator);
  };
  AlgorithmReference.prototype.toString = function () {
    return 'AlgorithmReference(name=' + Kotlin.toString(this.name) + (', params=' + Kotlin.toString(this.params)) + (', creator=' + Kotlin.toString(this.creator)) + ')';
  };
  AlgorithmReference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    result = result * 31 + Kotlin.hashCode(this.creator) | 0;
    return result;
  };
  AlgorithmReference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.params, other.params) && Kotlin.equals(this.creator, other.creator)))));
  };
  function ArrayStructure() {
    Structure.call(this);
    var array = Array_0(0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = 0;
    }
    this.delayArray = new DelayedArray(array, getPropertyCallableRef('delayMillis', 0, function ($receiver) {
      return $receiver.delayMillis;
    }.bind(null, this), function ($receiver, value) {
      $receiver.delayMillis = value;
    }.bind(null, this)), getPropertyCallableRef('delayMillis', 0, function ($receiver) {
      return $receiver.delayMillis;
    }.bind(null, this), function ($receiver, value) {
      $receiver.delayMillis = value;
    }.bind(null, this)));
    this.algorithms_tiism7$_0 = listOf_0([new AlgorithmReference('Bogo Sort', void 0, ArrayStructure$algorithms$lambda(this)), new AlgorithmReference('Bubble Sort', void 0, ArrayStructure$algorithms$lambda_0(this)), new AlgorithmReference('Cocktail Shaker Sort', void 0, ArrayStructure$algorithms$lambda_1(this)), new AlgorithmReference('Insertion Sort', void 0, ArrayStructure$algorithms$lambda_2(this)), new AlgorithmReference('Selection Sort', void 0, ArrayStructure$algorithms$lambda_3(this)), new AlgorithmReference('Merge Sort', void 0, ArrayStructure$algorithms$lambda_4(this)), new AlgorithmReference('Parallel Merge Sort', void 0, ArrayStructure$algorithms$lambda_5(this)), new AlgorithmReference('Inline Merge Sort', void 0, ArrayStructure$algorithms$lambda_6(this)), new AlgorithmReference('Quick Sort', void 0, ArrayStructure$algorithms$lambda_7(this)), new AlgorithmReference('Parallel Quick Sort', void 0, ArrayStructure$algorithms$lambda_8(this)), new AlgorithmReference('Linear Search', listOf(new Param('Search For')), ArrayStructure$algorithms$lambda_9(this)), new AlgorithmReference('Binary Search', listOf(new Param('Search For')), ArrayStructure$algorithms$lambda_10(this))]);
    this.initializationConditions_3l6urx$_0 = listOf_0([this.ic_0('Shuffled', ArrayStructure$initializationConditions$lambda), this.ic_0('Sorted', ArrayStructure$initializationConditions$lambda_0), this.ic_0('Nearly Sorted', ArrayStructure$initializationConditions$lambda_1), this.ic_0('Few Uniques', ArrayStructure$initializationConditions$lambda_2), this.ic_0('Reversed', ArrayStructure$initializationConditions$lambda_3)]);
    this.initialized_27nhqd$_0 = false;
    this.maxValue_cif9iw$_0 = 0;
  }
  Object.defineProperty(ArrayStructure.prototype, 'algorithms', {
    get: function () {
      return this.algorithms_tiism7$_0;
    }
  });
  Object.defineProperty(ArrayStructure.prototype, 'initializationConditions', {
    get: function () {
      return this.initializationConditions_3l6urx$_0;
    }
  });
  ArrayStructure.prototype.get_za3lpa$ = function (index, continuation) {
    return this.delayArray.get_za3lpa$(index, continuation);
  };
  ArrayStructure.prototype.set_vux9f0$ = function (index, value, continuation) {
    return this.delayArray.set_wxm5ur$(index, value, continuation);
  };
  Object.defineProperty(ArrayStructure.prototype, 'initialized', {
    get: function () {
      return this.initialized_27nhqd$_0;
    },
    set: function (initialized) {
      this.initialized_27nhqd$_0 = initialized;
    }
  });
  Object.defineProperty(ArrayStructure.prototype, 'size', {
    get: function () {
      return this.delayArray.size;
    }
  });
  Object.defineProperty(ArrayStructure.prototype, 'maxValue', {
    get: function () {
      return this.maxValue_cif9iw$_0;
    },
    set: function (maxValue) {
      this.maxValue_cif9iw$_0 = maxValue;
    }
  });
  ArrayStructure.prototype.initDraw_xogw00$ = function (drawer) {
    drawer.width = this.delayArray.size;
    drawer.height = this.maxValue;
    drawer.beginDraw();
  };
  ArrayStructure.prototype.draw_xogw00$ = function (drawer) {
    var tmp$;
    tmp$ = this.delayArray.baseArray.length;
    for (var i = 0; i < tmp$; i++) {
      drawer.fill_4qozqa$(0, i, this.maxValue - this.delayArray.baseArray[i] - 1 | 0, 1, this.delayArray.baseArray[i] + 1 | 0);
    }
  };
  function ArrayStructure$ic$lambda(closure$initFunc, this$ArrayStructure) {
    return function (s) {
      var tmp$;
      this$ArrayStructure.delayArray = new DelayedArray(closure$initFunc(s), getPropertyCallableRef('delayMillis', 0, function ($receiver) {
        return $receiver.delayMillis;
      }.bind(null, this$ArrayStructure), function ($receiver, value) {
        $receiver.delayMillis = value;
      }.bind(null, this$ArrayStructure)), getPropertyCallableRef('delayMillis', 0, function ($receiver) {
        return $receiver.delayMillis;
      }.bind(null, this$ArrayStructure), function ($receiver, value) {
        $receiver.delayMillis = value;
      }.bind(null, this$ArrayStructure)));
      this$ArrayStructure.maxValue = ((tmp$ = max(this$ArrayStructure.delayArray.baseArray)) != null ? tmp$ : 0) + 2 | 0;
      this$ArrayStructure.initialized = true;
      return Unit;
    };
  }
  ArrayStructure.prototype.ic_0 = function (name, initFunc) {
    return new InitializationCondition(name, ArrayStructure$ic$lambda(initFunc, this));
  };
  function ArrayStructure$algorithms$lambda(this$ArrayStructure) {
    return function (it) {
      return new BogoSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_0(this$ArrayStructure) {
    return function (it) {
      return new BubbleSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_1(this$ArrayStructure) {
    return function (it) {
      return new CocktailSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_2(this$ArrayStructure) {
    return function (it) {
      return new InsertionSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_3(this$ArrayStructure) {
    return function (it) {
      return new SelectionSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_4(this$ArrayStructure) {
    return function (it) {
      return new MergeSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_5(this$ArrayStructure) {
    return function (it) {
      return new ParMergeSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_6(this$ArrayStructure) {
    return function (it) {
      return new InlineMergeSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_7(this$ArrayStructure) {
    return function (it) {
      return new QuickSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_8(this$ArrayStructure) {
    return function (it) {
      return new ParQuickSort(this$ArrayStructure);
    };
  }
  function ArrayStructure$algorithms$lambda_9(this$ArrayStructure) {
    return function (param) {
      return new LinearSearch(this$ArrayStructure, param[0]);
    };
  }
  function ArrayStructure$algorithms$lambda_10(this$ArrayStructure) {
    return function (param) {
      return new BinarySearch(this$ArrayStructure, param[0]);
    };
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function ArrayStructure$initializationConditions$lambda(i) {
    return copyToArray(shuffled(toList(until(0, i))));
  }
  function ArrayStructure$initializationConditions$lambda_0(i) {
    var array = Array_0(i);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      array[i_0] = i_0;
    }
    return array;
  }
  function ArrayStructure$initializationConditions$lambda_1(i) {
    var array = Array_0(i);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      array[i_0] = i_0;
    }
    for (var x = 0; x < i; x++) {
      var b = x - (i / 20 | 0) | 0;
      var tmp$_0 = Math_0.max(0, b);
      var a = i - 1 | 0;
      var b_0 = x + (i / 20 | 0) | 0;
      var index = randomInt(tmp$_0, Math_0.min(a, b_0));
      var temp = array[x];
      array[x] = array[index];
      array[index] = temp;
    }
    return array;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function ArrayStructure$initializationConditions$lambda_2(i) {
    var $receiver = toList(until(0, i));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item % 5);
    }
    return copyToArray(shuffled(destination));
  }
  function ArrayStructure$initializationConditions$lambda_3(i) {
    var array = Array_0(i);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      array[i_0] = i - i_0 - 1 | 0;
    }
    return array;
  }
  ArrayStructure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayStructure',
    interfaces: [Structure]
  };
  function BSTStructure() {
    Structure.call(this);
    this.delayer = new Delayer();
    this.algorithms_e6lrnt$_0 = listOf_0([new AlgorithmReference('Add', listOf(new Param('value')), BSTStructure$algorithms$lambda(this)), new AlgorithmReference('Remove (Predecessor)', listOf(new Param('value')), BSTStructure$algorithms$lambda_0(this)), new AlgorithmReference('Remove (Successor)', listOf(new Param('value')), BSTStructure$algorithms$lambda_1(this))]);
    this.initializationConditions_kdm1gj$_0 = listOf_0([this.ic_0('Empty', BSTStructure$initializationConditions$lambda(this)), this.ic_0('Balanced', BSTStructure$initializationConditions$lambda_0(this)), this.ic_0('Degenerate', BSTStructure$initializationConditions$lambda_1(this))]);
    this.initialized_o601y3$_0 = false;
    this.root = null;
  }
  Object.defineProperty(BSTStructure.prototype, 'algorithms', {
    get: function () {
      return this.algorithms_e6lrnt$_0;
    }
  });
  Object.defineProperty(BSTStructure.prototype, 'initializationConditions', {
    get: function () {
      return this.initializationConditions_kdm1gj$_0;
    }
  });
  Object.defineProperty(BSTStructure.prototype, 'initialized', {
    get: function () {
      return this.initialized_o601y3$_0;
    },
    set: function (initialized) {
      this.initialized_o601y3$_0 = initialized;
    }
  });
  BSTStructure.prototype.initDraw_xogw00$ = function (drawer) {
    drawer.width = toThe(2, this.height + 1 | 0) * 4 | 0;
    drawer.height = ((3 + this.height | 0) * 4 | 0) - 2 | 0;
    drawer.beginDraw();
  };
  BSTStructure.prototype.draw_xogw00$ = function (drawer) {
    var tmp$;
    (tmp$ = this.root) != null ? (this.drawTree_0(tmp$, drawer, 0, drawer.width, 4, null), Unit) : null;
  };
  BSTStructure.prototype.drawTree_0 = function ($receiver, drawer, left, right, y, parentX) {
    var tmp$, tmp$_0;
    var pos = (left + right | 0) / 2 | 0;
    $receiver.x = pos;
    $receiver.y = y;
    if (parentX != null) {
      drawer.line_tjonv8$(pos, y, parentX, y - 2 | 0);
    }
    (tmp$ = $receiver.left) != null ? (this.drawTree_0(tmp$, drawer, left, pos, y + 4 | 0, pos), Unit) : null;
    (tmp$_0 = $receiver.right) != null ? (this.drawTree_0(tmp$_0, drawer, pos, right, y + 4 | 0, pos), Unit) : null;
    $receiver.draw_799jm6$(drawer, 0);
  };
  Object.defineProperty(BSTStructure.prototype, 'height', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.root) != null ? tmp$.height : null) != null ? tmp$_0 : -1;
    }
  });
  function BSTStructure$ic$lambda(closure$func, this$BSTStructure) {
    return function (it) {
      closure$func(it);
      this$BSTStructure.initialized = true;
      return Unit;
    };
  }
  BSTStructure.prototype.ic_0 = function (name, func) {
    return new InitializationCondition(name, BSTStructure$ic$lambda(func, this));
  };
  function BSTStructure$Node($outer, data) {
    this.$outer = $outer;
    this.data = data;
    this.left = null;
    this.right = null;
    this.x = 0;
    this.y = 0;
  }
  Object.defineProperty(BSTStructure$Node.prototype, 'height', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$_1 = (tmp$_0 = (tmp$ = this.left) != null ? tmp$.height : null) != null ? tmp$_0 : -1;
      var b = (tmp$_3 = (tmp$_2 = this.right) != null ? tmp$_2.height : null) != null ? tmp$_3 : -1;
      return Math_0.max(tmp$_1, b) + 1 | 0;
    }
  });
  BSTStructure$Node.prototype.setLeft_1t4q9q$ = function (node_0, continuation_0, suspended) {
    var instance = new Coroutine$setLeft_1t4q9q$(this, node_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setLeft_1t4q9q$($this, node_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$node = node_0;
  }
  Coroutine$setLeft_1t4q9q$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setLeft_1t4q9q$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setLeft_1t4q9q$.prototype.constructor = Coroutine$setLeft_1t4q9q$;
  Coroutine$setLeft_1t4q9q$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.left = this.local$node;
            this.state_0 = 2;
            this.result_0 = this.$this.$outer.delayer.doDelay_14dthe$(this.$this.$outer.delayMillis, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BSTStructure$Node.prototype.setRight_1t4q9q$ = function (node_0, continuation_0, suspended) {
    var instance = new Coroutine$setRight_1t4q9q$(this, node_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setRight_1t4q9q$($this, node_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$node = node_0;
  }
  Coroutine$setRight_1t4q9q$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setRight_1t4q9q$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setRight_1t4q9q$.prototype.constructor = Coroutine$setRight_1t4q9q$;
  Coroutine$setRight_1t4q9q$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.right = this.local$node;
            this.state_0 = 2;
            this.result_0 = this.$this.$outer.delayer.doDelay_14dthe$(this.$this.$outer.delayMillis, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BSTStructure$Node.prototype.getLeft = function (continuation_0, suspended) {
    var instance = new Coroutine$getLeft(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getLeft($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getLeft.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getLeft.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getLeft.prototype.constructor = Coroutine$getLeft;
  Coroutine$getLeft.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.$outer.delayer.doDelay_14dthe$(this.$this.$outer.delayMillis, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.left;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BSTStructure$Node.prototype.getRight = function (continuation_0, suspended) {
    var instance = new Coroutine$getRight(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getRight($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getRight.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getRight.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getRight.prototype.constructor = Coroutine$getRight;
  Coroutine$getRight.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.$outer.delayer.doDelay_14dthe$(this.$this.$outer.delayMillis, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.right;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BSTStructure$Node.prototype.draw_799jm6$ = function (drawer, color) {
    drawer.fill_4qozqa$(color, this.x - 1 | 0, this.y, 2, 2);
    drawer.text_ewpgoy$(this.data.toString(), this.x - 1 | 0, this.y, 2, 2);
  };
  BSTStructure$Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  function BSTStructure$algorithms$lambda(this$BSTStructure) {
    return function (params) {
      return new AddAlgorithm(this$BSTStructure, params[0]);
    };
  }
  function BSTStructure$algorithms$lambda_0(this$BSTStructure) {
    return function (params) {
      return new RemoveAlgorithmPredecessor(this$BSTStructure, params[0]);
    };
  }
  function BSTStructure$algorithms$lambda_1(this$BSTStructure) {
    return function (params) {
      return new RemoveAlgorithmSuccessor(this$BSTStructure, params[0]);
    };
  }
  function BSTStructure$initializationConditions$lambda(this$BSTStructure) {
    return function (it) {
      this$BSTStructure.root = null;
      return Unit;
    };
  }
  function BSTStructure$initializationConditions$lambda_0(this$BSTStructure) {
    return function (it) {
      var tmp$ = this$BSTStructure;
      var $receiver = new BSTStructure$Node(this$BSTStructure, 0);
      var this$BSTStructure_0 = this$BSTStructure;
      var $receiver_0 = new BSTStructure$Node(this$BSTStructure_0, -10);
      $receiver_0.left = new BSTStructure$Node(this$BSTStructure_0, -20);
      $receiver_0.right = new BSTStructure$Node(this$BSTStructure_0, -5);
      $receiver.left = $receiver_0;
      var $receiver_1 = new BSTStructure$Node(this$BSTStructure_0, 10);
      $receiver_1.left = new BSTStructure$Node(this$BSTStructure_0, 5);
      $receiver_1.right = new BSTStructure$Node(this$BSTStructure_0, 20);
      $receiver.right = $receiver_1;
      tmp$.root = $receiver;
      return Unit;
    };
  }
  function BSTStructure$initializationConditions$lambda_1(this$BSTStructure) {
    return function (it) {
      var tmp$ = this$BSTStructure;
      var $receiver = new BSTStructure$Node(this$BSTStructure, 0);
      var this$BSTStructure_0 = this$BSTStructure;
      var $receiver_0 = new BSTStructure$Node(this$BSTStructure_0, 10);
      var $receiver_1 = new BSTStructure$Node(this$BSTStructure_0, 20);
      $receiver_1.right = new BSTStructure$Node(this$BSTStructure_0, 30);
      $receiver_0.right = $receiver_1;
      $receiver.right = $receiver_0;
      tmp$.root = $receiver;
      return Unit;
    };
  }
  BSTStructure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BSTStructure',
    interfaces: [Structure]
  };
  function InitializationCondition(name, func) {
    this.name = name;
    this.func_0 = func;
  }
  InitializationCondition.prototype.invoke_za3lpa$ = function (size) {
    this.func_0(size);
  };
  InitializationCondition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InitializationCondition',
    interfaces: []
  };
  InitializationCondition.prototype.component1 = function () {
    return this.name;
  };
  InitializationCondition.prototype.component2_0 = function () {
    return this.func_0;
  };
  InitializationCondition.prototype.copy_qoz5hj$ = function (name, func) {
    return new InitializationCondition(name === void 0 ? this.name : name, func === void 0 ? this.func_0 : func);
  };
  InitializationCondition.prototype.toString = function () {
    return 'InitializationCondition(name=' + Kotlin.toString(this.name) + (', func=' + Kotlin.toString(this.func_0)) + ')';
  };
  InitializationCondition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.func_0) | 0;
    return result;
  };
  InitializationCondition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.func_0, other.func_0)))));
  };
  function NullStructure() {
    NullStructure_instance = this;
    Structure.call(this);
    this.algorithms_xjdu6t$_0 = emptyList();
    this.initializationConditions_w0qv5r$_0 = emptyList();
    this.initialized_ylenwn$_0 = false;
  }
  Object.defineProperty(NullStructure.prototype, 'algorithms', {
    get: function () {
      return this.algorithms_xjdu6t$_0;
    }
  });
  Object.defineProperty(NullStructure.prototype, 'initializationConditions', {
    get: function () {
      return this.initializationConditions_w0qv5r$_0;
    }
  });
  Object.defineProperty(NullStructure.prototype, 'initialized', {
    get: function () {
      return this.initialized_ylenwn$_0;
    }
  });
  NullStructure.prototype.initDraw_xogw00$ = function (drawer) {
  };
  NullStructure.prototype.draw_xogw00$ = function (drawer) {
  };
  NullStructure.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NullStructure',
    interfaces: [Structure]
  };
  var NullStructure_instance = null;
  function NullStructure_getInstance() {
    if (NullStructure_instance === null) {
      new NullStructure();
    }
    return NullStructure_instance;
  }
  function Param(name, default_0, min, max, step) {
    if (default_0 === void 0)
      default_0 = 0;
    if (min === void 0)
      min = -2147483648;
    if (max === void 0)
      max = 2147483647;
    if (step === void 0)
      step = 1;
    this.name = name;
    this.default = default_0;
    this.min = min;
    this.max = max;
    this.step = step;
  }
  Param.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Param',
    interfaces: []
  };
  Param.prototype.component1 = function () {
    return this.name;
  };
  Param.prototype.component2 = function () {
    return this.default;
  };
  Param.prototype.component3 = function () {
    return this.min;
  };
  Param.prototype.component4 = function () {
    return this.max;
  };
  Param.prototype.component5 = function () {
    return this.step;
  };
  Param.prototype.copy_ewpgoy$ = function (name, default_0, min, max, step) {
    return new Param(name === void 0 ? this.name : name, default_0 === void 0 ? this.default : default_0, min === void 0 ? this.min : min, max === void 0 ? this.max : max, step === void 0 ? this.step : step);
  };
  Param.prototype.toString = function () {
    return 'Param(name=' + Kotlin.toString(this.name) + (', default=' + Kotlin.toString(this.default)) + (', min=' + Kotlin.toString(this.min)) + (', max=' + Kotlin.toString(this.max)) + (', step=' + Kotlin.toString(this.step)) + ')';
  };
  Param.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.default) | 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    result = result * 31 + Kotlin.hashCode(this.step) | 0;
    return result;
  };
  Param.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.default, other.default) && Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max) && Kotlin.equals(this.step, other.step)))));
  };
  function Structure() {
    this.delayMillis_itbxbf$_0 = 0.0;
  }
  Object.defineProperty(Structure.prototype, 'delayMillis', {
    get: function () {
      return this.delayMillis_itbxbf$_0;
    },
    set: function (delayMillis) {
      this.delayMillis_itbxbf$_0 = delayMillis;
    }
  });
  Structure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Structure',
    interfaces: []
  };
  var structures;
  $$importsForInline$$['algovis-js'] = _;
  var package$com = _.com || (_.com = {});
  var package$sergeysav = package$com.sergeysav || (package$com.sergeysav = {});
  var package$algovis = package$sergeysav.algovis || (package$sergeysav.algovis = {});
  package$algovis.DrawController = DrawController;
  Object.defineProperty(Drawer, 'Companion', {
    get: Drawer$Companion_getInstance
  });
  package$algovis.Drawer = Drawer;
  package$algovis.main_kand9s$ = main;
  package$algovis.promptInt_we1ie1$ = promptInt;
  package$algovis.promptDouble_u3s6l1$ = promptDouble;
  package$algovis.get_lastElementChild_asww5s$ = get_lastElementChild;
  package$algovis.get_classList_asww5s$ = get_classList;
  package$algovis.randomInt_vux9f0$ = randomInt;
  package$algovis.Model = Model;
  package$algovis.DelayedArray_init_inz5m2$ = DelayedArray_init;
  package$algovis.DelayedArray = DelayedArray;
  package$algovis.Delayer = Delayer;
  package$algovis.middleValue_x6z98s$ = middleValue;
  package$algovis.toThe_dqglrj$ = toThe;
  var package$algorithms = package$algovis.algorithms || (package$algovis.algorithms = {});
  package$algorithms.Algorithm = Algorithm;
  Object.defineProperty(package$algorithms, 'NullAlgorithm', {
    get: NullAlgorithm_getInstance
  });
  var package$array = package$algorithms.array || (package$algorithms.array = {});
  package$array.ArrayAlgorithm = ArrayAlgorithm;
  package$array.BinarySearch = BinarySearch;
  package$array.BogoSort = BogoSort;
  package$array.BubbleSort = BubbleSort;
  package$array.BufferArrayAlgorithm = BufferArrayAlgorithm;
  package$array.CocktailSort = CocktailSort;
  package$array.InlineMergeSort = InlineMergeSort;
  package$array.InsertionSort = InsertionSort;
  package$array.LinearSearch = LinearSearch;
  package$array.MergeSort = MergeSort;
  package$array.ParMergeSort = ParMergeSort;
  package$array.ParQuickSort = ParQuickSort;
  package$array.QuickSort = QuickSort;
  package$array.SelectionSort = SelectionSort;
  var package$bst = package$algorithms.bst || (package$algorithms.bst = {});
  package$bst.AddAlgorithm = AddAlgorithm;
  package$bst.BSTAlgorithm = BSTAlgorithm;
  package$bst.RemoveAlgorithmPredecessor = RemoveAlgorithmPredecessor;
  package$bst.RemoveAlgorithmSuccessor = RemoveAlgorithmSuccessor;
  var package$structures = package$algovis.structures || (package$algovis.structures = {});
  package$structures.AlgorithmReference = AlgorithmReference;
  package$structures.ArrayStructure = ArrayStructure;
  BSTStructure.Node = BSTStructure$Node;
  package$structures.BSTStructure = BSTStructure;
  package$structures.InitializationCondition = InitializationCondition;
  Object.defineProperty(package$structures, 'NullStructure', {
    get: NullStructure_getInstance
  });
  package$structures.Param = Param;
  package$structures.Structure = Structure;
  Object.defineProperty(package$structures, 'structures', {
    get: function () {
      return structures;
    }
  });
  structures = mapOf([to('Array', getCallableRef('ArrayStructure', function () {
    return new ArrayStructure();
  })), to('Binary Search Tree', getCallableRef('BSTStructure', function () {
    return new BSTStructure();
  }))]);
  main([]);
  Kotlin.defineModule('algovis-js', _);
  return _;
}(typeof this['algovis-js'] === 'undefined' ? {} : this['algovis-js'], kotlin, this['kotlinx-coroutines-core']);
