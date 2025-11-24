Cypress Basic Tests – QA Automation Portfolio
📌 Overview

This repository contains a Cypress automation project demonstrating foundational end-to-end (E2E) testing skills, with a mix of local fixture tests and real website scenarios (Sauce Demo).
It is designed as a scalable and maintainable framework for Junior-to-Mid QA Automation roles.

🛠️ Tech Stack

Cypress 13+

JavaScript (Node.js)

Node Package Manager (npm)

Mochawesome Reporter (HTML reports)

GitHub Actions (CI/CD, upcoming)

📁 Project Structure

cypress/
├─ e2e/
│  ├─ form.cy.js
│  ├─ dropdown.cy.js
│  ├─ checkbox.cy.js
│  ├─ radio.cy.js
│  ├─ hello.cy.js       # Real website test
│  ├─ link.cy.js        # Real website test
│  └─ real_sites/
│     ├─ 01_homepage.cy.js       # Sauce Demo homepage
│     ├─ 02_product.cy.js        # Product details page (in progress)
│     ├─ 03_add_to_cart.cy.js    # Add to cart flow (in progress)
│     └─ 04_login.cy.js          # Login flow (in progress)
├─ fixtures/
│  ├─ index.html
│  ├─ dropdown.html
│  ├─ checkbox.html
│  ├─ radio.html
│  └─ login.html
└─ support/
   └─ commands.js
cypress.config.js
package.json
README.md


✅ Tests Included

1. Local Fixture Tests

form.cy.js – Fill out and submit a contact form

dropdown.cy.js – Select value from a dropdown menu

checkbox.cy.js – Select/deselect checkboxes

radio.cy.js – Select radio button options

login.cy.js – Fill and submit a login form

hello.cy.js – Simple UI interaction (E2E)

link.cy.js – Verify link navigation (E2E)

2. 🌐 Web E2E Automation (Sauce Demo.com)

01_homepage.cy.js – Verify login form and elements

02_product.cy.js – Product details page (in progress)

03_add_to_cart.cy.js – Add product to cart (in progress)

04_login.cy.js – Login flow (in progress)

These tests demonstrate real-world E2E flows with Cypress, laying the groundwork for more advanced automation scenarios.

▶️ How to Install & Run the Tests

Clone the repository: git clone https://github.com/marcolob/cypress-basic-tests.git

Install dependencies: npm install

Run Cypress in interactive mode: npx cypress open

Run Cypress in headless mode: npx cypress run

🎯 Purpose / Learning Outcomes

Build clean, readable, and maintainable tests

Demonstrate understanding of Cypress and automation fundamentals

Show continuous learning in QA Automation

Lay foundations for a scalable automation framework

🚧 Roadmap / Upcoming Additions (Very soon)

✅ Complete real site tests (products, cart, login)

API testing with Cypress (integration with backend)

Page Object Model (POM) implementation

Data-driven testing

CI/CD pipeline with GitHub Actions

Cross-browser testing (Chrome, Firefox, Edge)

📬 Contact

For info, collaboration, or feedback:
📧 m.lobianco@hotmail.it

🔗 LinkedIn: www.linkedin.com/in/marco-lo-bianco-869311b1
