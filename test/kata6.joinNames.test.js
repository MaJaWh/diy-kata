const { joinNames } = require("../src");

const names = [{ name: "Mark" }, { name: "Geoff" }, { name: "Robert" }];

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(names)).toEqual("Mark, Geoff & Robert");
  });
});
