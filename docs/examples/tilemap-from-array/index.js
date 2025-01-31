// Generated by purs bundle 0.14.4
var PS = {};
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Apply"] = $PS["Control.Apply"] || {};
  var exports = $PS["Control.Apply"];
  var apply = function (dict) {
      return dict.apply;
  };
  exports["apply"] = apply;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Applicative"] = $PS["Control.Applicative"] || {};
  var exports = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];          
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["pure"] = pure;
  exports["liftA1"] = liftA1;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Bind"] = $PS["Control.Bind"] || {};
  var exports = $PS["Control.Bind"];
  var bind = function (dict) {
      return dict.bind;
  };
  exports["bind"] = bind;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Semigroupoid"] = $PS["Control.Semigroupoid"] || {};
  var exports = $PS["Control.Semigroupoid"];
  var semigroupoidFn = {
      compose: function (f) {
          return function (g) {
              return function (x) {
                  return f(g(x));
              };
          };
      }
  };
  exports["semigroupoidFn"] = semigroupoidFn;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Category"] = $PS["Control.Category"] || {};
  var exports = $PS["Control.Category"];
  var Control_Semigroupoid = $PS["Control.Semigroupoid"];                
  var identity = function (dict) {
      return dict.identity;
  };
  var categoryFn = {
      identity: function (x) {
          return x;
      },
      Semigroupoid0: function () {
          return Control_Semigroupoid.semigroupoidFn;
      }
  };
  exports["identity"] = identity;
  exports["categoryFn"] = categoryFn;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Monad"] = $PS["Control.Monad"] || {};
  var exports = $PS["Control.Monad"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Bind = $PS["Control.Bind"];
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad.Bind1())(f)(function (f$prime) {
                  return Control_Bind.bind(dictMonad.Bind1())(a)(function (a$prime) {
                      return Control_Applicative.pure(dictMonad.Applicative0())(f$prime(a$prime));
                  });
              });
          };
      };
  };
  exports["ap"] = ap;
})(PS);
(function(exports) {
  "use strict";

  //------------------------------------------------------------------------------
  // Array size ------------------------------------------------------------------
  //------------------------------------------------------------------------------

  exports.length = function (xs) {
    return xs.length;
  };
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Array"] = $PS["Data.Array"] || {};
  var exports = $PS["Data.Array"];
  var $foreign = $PS["Data.Array"];
  exports["length"] = $foreign.length;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Function"] = $PS["Data.Function"] || {};
  var exports = $PS["Data.Function"];
  var $$const = function (a) {
      return function (v) {
          return a;
      };
  };
  exports["const"] = $$const;
})(PS);
(function(exports) {
  "use strict";

  exports.runFn4 = function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Function.Uncurried"] = $PS["Data.Function.Uncurried"] || {};
  var exports = $PS["Data.Function.Uncurried"];
  var $foreign = $PS["Data.Function.Uncurried"];
  exports["runFn4"] = $foreign.runFn4;
})(PS);
(function(exports) {
  "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Unit"] = $PS["Data.Unit"] || {};
  var exports = $PS["Data.Unit"];
  var $foreign = $PS["Data.Unit"];
  exports["unit"] = $foreign.unit;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Functor"] = $PS["Data.Functor"] || {};
  var exports = $PS["Data.Functor"];
  var Data_Function = $PS["Data.Function"];
  var Data_Unit = $PS["Data.Unit"];                  
  var map = function (dict) {
      return dict.map;
  };
  var $$void = function (dictFunctor) {
      return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
  };
  exports["void"] = $$void;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Maybe"] = $PS["Data.Maybe"] || {};
  var exports = $PS["Data.Maybe"];                 
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
})(PS);
(function(exports) {
  "use strict";

  exports.showIntImpl = function (n) {
    return n.toString();
  };

  exports.showStringImpl = function (s) {
    var l = s.length;
    return "\"" + s.replace(
      /[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
      function (c, i) {
        switch (c) {
          case "\"":
          case "\\":
            return "\\" + c;
          case "\x07": return "\\a";
          case "\b": return "\\b";
          case "\f": return "\\f";
          case "\n": return "\\n";
          case "\r": return "\\r";
          case "\t": return "\\t";
          case "\v": return "\\v";
        }
        var k = i + 1;
        var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
        return "\\" + c.charCodeAt(0).toString(10) + empty;
      }
    ) + "\"";
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Show"] = $PS["Data.Show"] || {};
  var exports = $PS["Data.Show"];
  var $foreign = $PS["Data.Show"];                   
  var showString = {
      show: $foreign.showStringImpl
  };
  var showInt = {
      show: $foreign.showIntImpl
  };
  var show = function (dict) {
      return dict.show;
  };
  exports["show"] = show;
  exports["showInt"] = showInt;
  exports["showString"] = showString;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Symbol"] = $PS["Data.Symbol"] || {};
  var exports = $PS["Data.Symbol"];                  
  var SProxy = (function () {
      function SProxy() {

      };
      SProxy.value = new SProxy();
      return SProxy;
  })();
  var reflectSymbol = function (dict) {
      return dict.reflectSymbol;
  };
  exports["reflectSymbol"] = reflectSymbol;
  exports["SProxy"] = SProxy;
})(PS);
(function(exports) {
  "use strict";

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
})(PS["Effect"] = PS["Effect"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Effect"] = $PS["Effect"] || {};
  var exports = $PS["Effect"];
  var $foreign = $PS["Effect"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Monad = $PS["Control.Monad"];                  
  var monadEffect = {
      Applicative0: function () {
          return applicativeEffect;
      },
      Bind1: function () {
          return bindEffect;
      }
  };
  var bindEffect = {
      bind: $foreign.bindE,
      Apply0: function () {
          return applyEffect;
      }
  };
  var applyEffect = {
      apply: Control_Monad.ap(monadEffect),
      Functor0: function () {
          return functorEffect;
      }
  };
  var applicativeEffect = {
      pure: $foreign.pureE,
      Apply0: function () {
          return applyEffect;
      }
  };
  var functorEffect = {
      map: Control_Applicative.liftA1(applicativeEffect)
  };
  exports["functorEffect"] = functorEffect;
  exports["applicativeEffect"] = applicativeEffect;
  exports["bindEffect"] = bindEffect;
})(PS);
(function(exports) {
  "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Effect.Console"] = $PS["Effect.Console"] || {};
  var exports = $PS["Effect.Console"];
  var $foreign = $PS["Effect.Console"];
  exports["log"] = $foreign.log;
})(PS);
(function(exports) {
  "use strict";

  exports.runEffectFn2 = function runEffectFn2(fn) {
    return function(a) {
      return function(b) {
        return function() {
          return fn(a, b);
        };
      };
    };
  };

  exports.runEffectFn3 = function runEffectFn3(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function() {
            return fn(a, b, c);
          };
        };
      };
    };
  };
})(PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Effect.Uncurried"] = $PS["Effect.Uncurried"] || {};
  var exports = $PS["Effect.Uncurried"];
  var $foreign = $PS["Effect.Uncurried"];
  exports["runEffectFn2"] = $foreign.runEffectFn2;
  exports["runEffectFn3"] = $foreign.runEffectFn3;
})(PS);
(function(exports) {
  "use strict";

  exports._copyST = function (m) {
    return function () {
      var r = {};
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r[k] = m[k];
        }
      }
      return r;
    };
  };

  exports.empty = {};

  exports.runST = function (f) {
    return f();
  };

  exports._lookup = function (no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  };
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});
(function(exports) {
  "use strict";

  exports.poke = function (k) {
    return function (v) {
      return function (m) {
        return function () {
          m[k] = v;
          return m;
        };
      };
    };
  };

  exports["delete"] = function (k) {
    return function (m) {
      return function () {
        delete m[k];
        return m;
      };
    };
  };
})(PS["Foreign.Object.ST"] = PS["Foreign.Object.ST"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Foreign.Object.ST"] = $PS["Foreign.Object.ST"] || {};
  var exports = $PS["Foreign.Object.ST"];
  var $foreign = $PS["Foreign.Object.ST"];
  exports["poke"] = $foreign.poke;
  exports["delete"] = $foreign["delete"];
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Foreign.Object"] = $PS["Foreign.Object"] || {};
  var exports = $PS["Foreign.Object"];
  var $foreign = $PS["Foreign.Object"];
  var Data_Function_Uncurried = $PS["Data.Function.Uncurried"];
  var Data_Maybe = $PS["Data.Maybe"];
  var Foreign_Object_ST = $PS["Foreign.Object.ST"];              
  var thawST = $foreign["_copyST"];
  var mutate = function (f) {
      return function (m) {
          return $foreign.runST(function __do() {
              var s = thawST(m)();
              f(s)();
              return s;
          });
      };
  };
  var lookup = Data_Function_Uncurried.runFn4($foreign["_lookup"])(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
  var insert = function (k) {
      return function (v) {
          return mutate(Foreign_Object_ST.poke(k)(v));
      };
  };
  var $$delete = function (k) {
      return mutate(Foreign_Object_ST["delete"](k));
  };
  var alter = function (f) {
      return function (k) {
          return function (m) {
              var v = f(lookup(k)(m));
              if (v instanceof Data_Maybe.Nothing) {
                  return $$delete(k)(m);
              };
              if (v instanceof Data_Maybe.Just) {
                  return insert(k)(v.value0)(m);
              };
              throw new Error("Failed pattern match at Foreign.Object (line 209, column 15 - line 211, column 25): " + [ v.constructor.name ]);
          };
      };
  };
  exports["lookup"] = lookup;
  exports["alter"] = alter;
  exports["empty"] = $foreign.empty;
})(PS);
(function(exports) {
  "use strict";

  function create() {
    return new Phaser.Game();
  }

  exports.create = create;

  exports.setGameDimensionsImpl = function ({ width, height }, game) {
    game.config.width = width;
    game.config.height = height;
    return game;
  };
})(PS["Graphics.Phaser"] = PS["Graphics.Phaser"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser"] = $PS["Graphics.Phaser"] || {};
  var exports = $PS["Graphics.Phaser"];
  var $foreign = $PS["Graphics.Phaser"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];                
  var setGameDimensions = Effect_Uncurried.runEffectFn2($foreign.setGameDimensionsImpl);
  exports["setGameDimensions"] = setGameDimensions;
  exports["create"] = $foreign.create;
})(PS);
(function(exports) {
  "use strict";

  exports.loadImagesImpl = (images, scene) => {
    images.forEach(({ key, path }) => {
      scene.load.image(key, path);
    });
    return scene;
  };
})(PS["Graphics.Phaser.Loader"] = PS["Graphics.Phaser.Loader"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser.Loader"] = $PS["Graphics.Phaser.Loader"] || {};
  var exports = $PS["Graphics.Phaser.Loader"];
  var $foreign = $PS["Graphics.Phaser.Loader"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];                         
  var loadImages = Effect_Uncurried.runEffectFn2($foreign.loadImagesImpl);
  exports["loadImages"] = loadImages;
})(PS);
(function(exports) {
  "use strict";

  exports.addSceneImpl = function (
    { key, init, create, update, preload, autoStart },
    game
  ) {
    const config = {
      init: function () {
        init(this)();
      },
      preload: function () {
        preload(this)();
      },
      create: function () {
        create(this)();
      },
      update: function () {
        update(this)();
      },
    };
    game.scene.add(key, config, autoStart);
    return game;
  };
})(PS["Graphics.Phaser.Scene"] = PS["Graphics.Phaser.Scene"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser.Scene"] = $PS["Graphics.Phaser.Scene"] || {};
  var exports = $PS["Graphics.Phaser.Scene"];
  var $foreign = $PS["Graphics.Phaser.Scene"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Data_Unit = $PS["Data.Unit"];
  var Effect = $PS["Effect"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];
  var defaultSceneConfig = {
      key: "",
      autoStart: false,
      create: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      },
      init: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      },
      update: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      },
      preload: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      }
  };                                                                      
  var addScene = Effect_Uncurried.runEffectFn2($foreign.addSceneImpl);
  exports["defaultSceneConfig"] = defaultSceneConfig;
  exports["addScene"] = addScene;
})(PS);
(function(exports) {
  "use strict";

  exports.makeTileMapImpl = (scene, { key, data, tileWidth, tileHeight }) =>
    scene.make.tilemap({ key, data, tileWidth, tileHeight });

  exports.addTilesetImageImpl = function (
    tileMap,
    tilesetName,
    { key, tileWidth, tileHeight, tileMargin, tileSpacing, gid }
  ) {
    return tileMap.addTilesetImage(
      tilesetName,
      key,
      tileWidth,
      tileHeight,
      tileMargin,
      tileSpacing,
      gid
    );
  };

  exports.createLayerImpl = (tileMap, layerID, tileset) =>
    tileMap.createLayer(layerID, tileset);

  exports.tilesets = (tileMap) => tileMap.tilesets;
})(PS["Graphics.Phaser.TileMap"] = PS["Graphics.Phaser.TileMap"] || {});
(function(exports) {
  "use strict";

  exports.unsafeGet = function (label) {
    return function (rec) {
      return rec[label];
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Record.Unsafe"] = $PS["Record.Unsafe"] || {};
  var exports = $PS["Record.Unsafe"];
  var $foreign = $PS["Record.Unsafe"];
  exports["unsafeGet"] = $foreign.unsafeGet;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Record"] = $PS["Record"] || {};
  var exports = $PS["Record"];
  var Data_Symbol = $PS["Data.Symbol"];
  var Record_Unsafe = $PS["Record.Unsafe"];
  var get = function (dictIsSymbol) {
      return function (dictCons) {
          return function (l) {
              return function (r) {
                  return Record_Unsafe.unsafeGet(Data_Symbol.reflectSymbol(dictIsSymbol)(l))(r);
              };
          };
      };
  };
  exports["get"] = get;
})(PS);
(function(exports) {
  "use strict";

  exports.copyRecord = function(rec) {
    var copy = {};
    for (var key in rec) {
      if ({}.hasOwnProperty.call(rec, key)) {
        copy[key] = rec[key];
      }
    }
    return copy;
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Record.Builder"] = $PS["Record.Builder"] || {};
  var exports = $PS["Record.Builder"];
  var $foreign = $PS["Record.Builder"];
  var Control_Category = $PS["Control.Category"];
  var categoryBuilder = Control_Category.categoryFn;
  var build = function (v) {
      return function (r1) {
          return v($foreign.copyRecord(r1));
      };
  };
  exports["build"] = build;
  exports["categoryBuilder"] = categoryBuilder;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Option"] = $PS["Option"] || {};
  var exports = $PS["Option"];
  var Control_Category = $PS["Control.Category"];
  var Data_Maybe = $PS["Data.Maybe"];
  var Data_Symbol = $PS["Data.Symbol"];
  var Foreign_Object = $PS["Foreign.Object"];
  var Record_1 = $PS["Record"];
  var Record_Builder = $PS["Record.Builder"];                      
  var $$Proxy = (function () {
      function $$Proxy() {

      };
      $$Proxy.value = new $$Proxy();
      return $$Proxy;
  })();
  var required = function (record$prime) {
      return record$prime.required;
  };
  var recordFromRecordAndOption = function (record) {
      return {
          optional: record.optional,
          required: record.required
      };
  };
  var optional = function (record$prime) {
      return record$prime.optional;
  };
  var fromRecordRequiredNil = {
      fromRecordRequired: function (v) {
          return function (v1) {
              return Control_Category.identity(Record_Builder.categoryBuilder);
          };
      }
  };
  var fromRecordRequired = function (dict) {
      return dict.fromRecordRequired;
  };
  var fromRecordOption = function (dict) {
      return dict.fromRecordOption;
  };
  var fromRecordAny = function (dictFromRecordOption) {
      return function (dictFromRecordRequired) {
          return function (dictUnion) {
              return function (dictRowToList) {
                  return function (dictRowToList1) {
                      return {
                          "fromRecord'": function (record) {
                              return recordFromRecordAndOption({
                                  optional: fromRecordOption(dictFromRecordOption)($$Proxy.value)(record),
                                  required: Record_Builder.build(fromRecordRequired(dictFromRecordRequired)($$Proxy.value)(record))({})
                              });
                          }
                      };
                  };
              };
          };
      };
  };
  var fromRecord$prime = function (dict) {
      return dict["fromRecord'"];
  };
  var fromRecord = function (dictFromRecord) {
      return function (record$prime) {
          var record = fromRecord$prime(dictFromRecord)(record$prime);
          return optional(record);
      };
  };
  var empty = Foreign_Object.empty;
  var fromRecordOptionNil = {
      fromRecordOption: function (v) {
          return function (v1) {
              return empty;
          };
      }
  };
  var alter$prime$prime = function (dict) {
      return dict["alter''"];
  };
  var alter$prime = function (dictIsSymbol) {
      return function (f) {
          return function (v) {
              return function (v1) {
                  var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                  var go = function (value$prime) {
                      return f(value$prime);
                  };
                  var option = Foreign_Object.alter(go)(key)(v1);
                  var value = f(Foreign_Object.lookup(key)(v1));
                  return {
                      option: option,
                      value: value
                  };
              };
          };
      };
  };                                     
  var get = function (dictIsSymbol) {
      return function (dictCons) {
          return function (proxy) {
              return function (option) {
                  var go = function (value) {
                      return value;
                  };
                  return (alter$prime(dictIsSymbol)(go)(proxy)(option)).value;
              };
          };
      };
  };
  var insert = function (dictIsSymbol) {
      return function (dictCons) {
          return function (dictLacks) {
              return function (proxy) {
                  return function (value) {
                      return function (option) {
                          var go = function (v) {
                              return new Data_Maybe.Just(value);
                          };
                          return (alter$prime(dictIsSymbol)(go)(proxy)(option)).option;
                      };
                  };
              };
          };
      };
  };
  var fromRecordOptionCons = function (dictIsSymbol) {
      return function (dictFromRecordOption) {
          return function (dictCons) {
              return function (dictCons1) {
                  return function (dictLacks) {
                      return {
                          fromRecordOption: function (v) {
                              return function (record) {
                                  var option = fromRecordOption(dictFromRecordOption)($$Proxy.value)(record);
                                  var value = Record_1.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(record);
                                  return insert(dictIsSymbol)()()(Data_Symbol.SProxy.value)(value)(option);
                              };
                          }
                      };
                  };
              };
          };
      };
  };                                           
  var alter = function (dictAlter) {
      return function (record) {
          return function (option) {
              return alter$prime$prime(dictAlter)(record)(option);
          };
      };
  };
  exports["fromRecord"] = fromRecord;
  exports["fromRecordAny"] = fromRecordAny;
  exports["fromRecordOptionNil"] = fromRecordOptionNil;
  exports["fromRecordOptionCons"] = fromRecordOptionCons;
  exports["fromRecordRequiredNil"] = fromRecordRequiredNil;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser.TileMap"] = $PS["Graphics.Phaser.TileMap"] || {};
  var exports = $PS["Graphics.Phaser.TileMap"];
  var $foreign = $PS["Graphics.Phaser.TileMap"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];
  var Option = $PS["Option"];                
  var makeTileMap = Effect_Uncurried.runEffectFn2($foreign.makeTileMapImpl);
  var createLayer = function (dictShow) {
      return Effect_Uncurried.runEffectFn3($foreign.createLayerImpl);
  };
  var addTilesetImage = function (dictFromRecord) {
      return function (tileMap) {
          return function (tilesetName) {
              return function (given) {
                  return function () {
                      return $foreign.addTilesetImageImpl(tileMap, tilesetName, Option.fromRecord(dictFromRecord)(given));
                  };
              };
          };
      };
  };
  exports["makeTileMap"] = makeTileMap;
  exports["createLayer"] = createLayer;
  exports["addTilesetImage"] = addTilesetImage;
  exports["tilesets"] = $foreign.tilesets;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Main"] = $PS["Main"] || {};
  var exports = $PS["Main"];
  var Control_Bind = $PS["Control.Bind"];
  var Data_Array = $PS["Data.Array"];
  var Data_Functor = $PS["Data.Functor"];
  var Data_Show = $PS["Data.Show"];
  var Data_Unit = $PS["Data.Unit"];
  var Effect = $PS["Effect"];
  var Effect_Console = $PS["Effect.Console"];
  var Graphics_Phaser = $PS["Graphics.Phaser"];
  var Graphics_Phaser_Loader = $PS["Graphics.Phaser.Loader"];
  var Graphics_Phaser_Scene = $PS["Graphics.Phaser.Scene"];
  var Graphics_Phaser_TileMap = $PS["Graphics.Phaser.TileMap"];
  var Option = $PS["Option"];                
  var tileName = "mario-tiles";
  var tileMapKey = "tile map 1";
  var mainSceneKey = "main";
  var create = function (scene) {
      var level = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 1, 2, 3, 0, 0, 0, 1, 2, 3, 0 ], [ 0, 5, 6, 7, 0, 0, 0, 5, 6, 7, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 14, 13, 14, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 14, 14, 14, 14, 14, 0, 0, 0, 15 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15 ], [ 35, 36, 37, 0, 0, 0, 0, 0, 15, 15, 15 ], [ 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39 ] ];
      return function __do() {
          var tileMap = Graphics_Phaser_TileMap.makeTileMap(scene)({
              key: tileMapKey,
              data: level,
              tileHeight: 16,
              tileWidth: 16
          })();
          var tileset = Graphics_Phaser_TileMap.addTilesetImage(Option.fromRecordAny(Option.fromRecordOptionCons({
              reflectSymbol: function () {
                  return "tileHeight";
              }
          })(Option.fromRecordOptionCons({
              reflectSymbol: function () {
                  return "tileWidth";
              }
          })(Option.fromRecordOptionNil)()()())()()())(Option.fromRecordRequiredNil)()()())(tileMap)(tileName)({
              tileWidth: 16,
              tileHeight: 16
          })();
          Effect_Console.log("Found " + (Data_Show.show(Data_Show.showInt)(Data_Array.length(Graphics_Phaser_TileMap.tilesets(tileMap))) + " tileset"))();
          var _layer = Graphics_Phaser_TileMap.createLayer(Data_Show.showString)(tileMap)("layer")([ tileset ])();
          return Data_Unit.unit;
      };
  };
  var mainScene = {
      key: mainSceneKey,
      autoStart: true,
      create: create,
      init: Graphics_Phaser_Scene.defaultSceneConfig.init,
      update: Graphics_Phaser_Scene.defaultSceneConfig.update,
      preload: Graphics_Phaser_Loader.loadImages([ {
          key: tileName,
          path: "assets/super-mario.png"
      } ])
  };
  var main = Data_Functor["void"](Effect.functorEffect)(Control_Bind.bind(Effect.bindEffect)(Control_Bind.bind(Effect.bindEffect)(Graphics_Phaser.create)(Graphics_Phaser.setGameDimensions({
      width: 200.0,
      height: 200.0
  })))(Graphics_Phaser_Scene.addScene(mainScene)));
  exports["tileName"] = tileName;
  exports["tileMapKey"] = tileMapKey;
  exports["mainSceneKey"] = mainSceneKey;
  exports["main"] = main;
  exports["mainScene"] = mainScene;
  exports["create"] = create;
})(PS);
PS["Main"].main();