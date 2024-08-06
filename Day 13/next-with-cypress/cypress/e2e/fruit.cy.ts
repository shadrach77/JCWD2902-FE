import { fruits } from "@/app/about/fruits/page";

describe("Fruit Page", () => {
  it("passes", () => {
    cy.visit("https://localhost:3000/fruits");

    cy.get("h1").contains("Fruits");
    fruits.forEach((fruit) => {
      cy.get("div").contains(fruit);
    });
  });
});
