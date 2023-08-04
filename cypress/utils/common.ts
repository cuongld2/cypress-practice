export class Common{

    constructor(){

    }

    getLengthOfElements(elementLocator:string) {

        return cy.get('body').then((element) => {
            return element.find(elementLocator);
        });
        
    }

}