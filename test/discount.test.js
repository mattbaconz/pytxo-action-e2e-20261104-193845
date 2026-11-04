const test = require("node:test");
const assert = require("node:assert");
const { discounted } = require("../discount");

test("discounted takes the percentage off", () => {
  assert.strictEqual(discounted({ cents: 200 }, 25), 1.5);
});
