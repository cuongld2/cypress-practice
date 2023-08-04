export class Common{

    constructor(){

    }

    getLengthOfElements(elementLocator:string) {

        return cy.get('body').find(elementLocator).its('length');
        
    }

}