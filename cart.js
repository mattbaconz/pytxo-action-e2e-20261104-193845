const { cost } = require("./price");

function total(items) {
  return items.reduce((sum, item) => sum + cost(item), 0);
}

module.exports = { total };
