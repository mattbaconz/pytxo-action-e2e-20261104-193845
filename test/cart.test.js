const test = require("node:test");
const assert = require("node:assert");
const { total } = require("../cart");

test("total adds up the prices", () => {
  assert.strictEqual(total([{ cents: 150 }, { cents: 250 }]), 4);
});
