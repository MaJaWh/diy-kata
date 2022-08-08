const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when passed true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  it("returns no when passed false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
