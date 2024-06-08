const singlishToUnicode = require("./singlishToUnicode");

function convert(text) {
  return singlishToUnicode(text);
}

module.exports = convert;
