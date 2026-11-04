const { price } = require("./price");

function discounted(item, percent) {
  return price(item) * (1 - percent / 100);
}

module.exports = { discounted };

// Percent is a number from 0 to 100.
