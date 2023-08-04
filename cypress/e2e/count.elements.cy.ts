import { Common } from "../utils/common";

describe("E2E Template Spec", () => {
    it("runs", () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
    });

      cy.visit("https://weather.com/vi-VN/weather/today/l/VMXX0006:1:VM?Goto=Redirected");
      cy.contains('10 ngày').should('be.visible').click();
      new Common().getLengthOfElements('[id*="detailIndex"]').then((value)=>{
        if(value===15){
          console.log('TRUE');
        }else{
          console.log('false');
        }
        
      });

    });
  });