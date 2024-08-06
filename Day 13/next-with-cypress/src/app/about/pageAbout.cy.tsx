import Page from "./page";
import { mount } from "cypress/react";
// import cy from "cypress/react";

describe("Home Page", () => {
  it("Renders Home Page", () => {
    mount(<Page />);
    cy.get("h1").contains("About Page");
    cy.get('a[href="/"]').should("be.visible");
  });
});
