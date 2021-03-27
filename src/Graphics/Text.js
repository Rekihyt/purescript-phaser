"use strict";

exports.text = function ({ scene, pos, text, config }) {
  return function () {
    return scene.add.text(pos.x, pos.y, text, config);
  };
};
