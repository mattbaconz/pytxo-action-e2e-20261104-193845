const { price } = require("./price");

function total(items) {
  return items.reduce((sum, item) => sum + price(item), 0);
}

module.exports = { total };
