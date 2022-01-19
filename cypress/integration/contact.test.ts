const allMandatoryFieldsSet = ["Name", "Phone", "Email", "Comment"];
const allFieldsSet = [
  "Name",
  "Phone",
  "Email",
  "Guests",
  "Arrival Date",
  "Departure Date",
  "Comment",
];

const errorValidationRedLabel = ".ui.red.pointing.below.label";

// STEP 1:
context(
  `Lodgify Contact Page - verify for mandatory fields validations`,
  () => {
    before(() => {
      cy.openContactPage();
      cy.fixture("contactMandatoryFieldsWarnings").then(
        (contactMandatoryFieldsWarnings) => {
          this.contactMandatoryFieldsWarnings = contactMandatoryFieldsWarnings;
          cy.submitContactForm();
        }
      );
    });

    for (const field of allMandatoryFieldsSet) {
      it(`Should have proper validations for mandatory field: ${field}`, () => {
        cy.get(errorValidationRedLabel)
          .contains(this.contactMandatoryFieldsWarnings[field])
          .should("be.visible");
      });
    }
  }
);

context(
  `Lodgify Contact Page - verify for mandatory fields validations`,
  () => {
    before(() => {
      cy.openContactPage();
    });

    it(`Should have proper values for all fields`, () => {
      cy.fixture("contactFieldsValues").then((formValues) => {
        cy.fillContactData(
          formValues.Name,
          formValues.Phone,
          formValues.Email,
          formValues.Guests,
          formValues.ArrivalDate,
          formValues.DepartureDate,
          formValues.Comment
        );

        cy.checkContactData(
          formValues.Name,
          formValues.Phone,
          formValues.Email,
          formValues.Guests,
          formValues.ArrivalDate,
          formValues.DepartureDate,
          formValues.Comment
        );
      });
    });
  }
);

context(`Lodgify Contact Page - check Submit results`, () => {
  before(() => {
    cy.openContactPage();
  });

  it(`Should properly submit the form`, () => {
    cy.fixture("contactFieldsValues").then((formValues) => {
      cy.fillContactData(
        formValues.Name,
        formValues.Phone,
        formValues.Email,
        formValues.Guests,
        formValues.ArrivalDate,
        formValues.DepartureDate,
        formValues.Comment
      );

      cy.submitContactForm();
      cy.checkSuccessMessageIsVisible();
    });
  });
});
