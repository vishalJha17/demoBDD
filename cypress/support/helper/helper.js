

export default class helper{
    typeText(locator,text){
        cy.get(locator).should('be.visible').type(text)
    }
    click(locator){
        cy.get(locator).should('be.visible').click()
    }
    invokeTextAndVerify(locator,successText){
        cy.get(locator).invoke('text').then((text)=>{
            expect(successText).to.eq(text)
            cy.log(text)
        })
    }
}