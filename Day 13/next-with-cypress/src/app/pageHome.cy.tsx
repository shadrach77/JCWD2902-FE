import Home from "./page";
import { mount } from "cypress/react";
// import cy from "cypress/react";

describe("Home Page", () => {
  it("Renders Home Page", () => {
    mount(<Home />);
    cy.get("h1").contains("Home Page");
    cy.get('a[href="/about"]').should("be.visible");
  });
});
