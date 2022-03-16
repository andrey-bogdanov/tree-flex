import { bezier, roundedAngles, straight } from "../src/components/tree-component/pathShapes";

describe("Path shape test", () => {

  describe("bezier", () => {
    test("return expexted value", () => {
      expect(bezier(400, 1425, 450, 1425)).toBe("M400 1425 C425,1425 425,1425 450,1425");
    });
  });

  describe("roundedAngles", () => {
    test("return expexted value", () => {
      expect(roundedAngles(400, 1425, 450, 1425)).toBe("M 400 1425 L 425 1425 Q 425 1425, 425 1425 L 425 1425 Q 425 1425, 425 1425 L 450 1425");
    });
  });

  describe("straight", () => {
    test("return expexted value", () => {
      expect(straight(400, 1425, 450, 1425)).toBe("M 400 1425 L 450 1425");
    });
  });

});
