import dummy from "../files/dummy";

describe("dummy", () => {
  describe("when shouldTrigger is false", () => {
    it("should not call callback", () => {
      const mockCallback = jest.fn();
      dummy(false, mockCallback);
      expect(mockCallback).not.toBeCalled();
    });
  });
  describe("when shouldTrigger is true", () => {
    it("should call callback", () => {
      const mockCallback = jest.fn();
      dummy(true, mockCallback);
      expect(mockCallback).toBeCalled();
    });
  });
});
