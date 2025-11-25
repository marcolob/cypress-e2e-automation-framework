Cypress Automation Portfolio

E2E Testing • UI Automation • POM (in progress)

📌 Overview

This repository contains a Cypress automation project showcasing core QA Automation skills, including both local UI tests (HTML fixtures) and real website E2E flows (SauceDemo).
The project is structured following scalable and maintainable testing principles, suitable for Junior / Junior-Mid QA Automation Engineer positions.

🛠️ Tech Stack

Cypress 13+

JavaScript (Node.js)

npm

Mochawesome Reporter (HTML reports)

GitHub Actions CI/CD (upcoming)

📁 Project Structure

cypress/
  e2e/
    basics/                 # UI tests on local HTML fixtures
      form.cy.js
      dropdown.cy.js
      checkbox.cy.js
      radio.cy.js
      login.cy.js
      hello.cy.js
      link.cy.js

    real_site/              # Real website automation (SauceDemo)
      01_homepage.cy.js
      02_product.cy.js
      03_add_to_cart.cy.js
      04_login.cy.js

    smoke/                  # (To be added)
    regression/             # (To be added)

  fixtures/                 # Local HTML pages + test data
    index.html
    dropdown.html
    checkbox.html
    radio.html
    login.html

  pages/                    # Page Object Model (in progress)
    loginPage.js
    productsPage.js
    cartPage.js

  support/
    commands.js
    e2e.js

cypress.config.js
package.json
README.md

📌 Folder Description
🧪 basics/

Contains simple UI interaction tests using local HTML fixtures:

form validation

inputs

dropdowns

radio buttons

checkboxes

links
Great for demonstrating knowledge of selectors, Cypress commands, and assertions.

🌐 real_site/

Full end-to-end automation using SauceDemo, including:

login flow

product listing validation

add-to-cart functionality

UI assertions

complete E2E journeys

🏗️ pages/

Page Object Model implementation (in progress):

centralized locators

reusable UI actions

improved maintainability

🔥 smoke/

To be added: fast, critical-path tests for smoke checks.

🔄 regression/

To be added: full regression suite run before releases.

📦 fixtures/

Local HTML files and JSON datasets.

🧰 support/

Global config, reusable custom commands, and shared setup.

📬 Contact

📧 Email: m.lobianco@hotmail.it

🔗 LinkedIn: www.linkedin.com/in/marco-lo-bianco-869311b1

😎 Open to collaboration, learning, and new QA Automation opportunities



🔗 LinkedIn: www.linkedin.com/in/marco-lo-bianco-869311b1
