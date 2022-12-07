import game from "../files/game";

describe("game", () => {
  it("game should return the right object", () => {
    const result = game("Pedro");
    expect(result).toStrictEqual({ id: 1, name: "Pedro", description: "First game" });
  });
});
