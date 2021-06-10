describe('Home page to post blog', () => {

  it('NAvigate the simple app', () => {
    // Home displays H1
    cy.visit('http://localhost:8080/')
    cy.contains('h1', 'Victor Ciurana')

    // Click on a post to read
    cy.contains('READ').click()

    // The post has a H2 and contains some text
    cy.get('h2').first().contains(/^[\w\ ]+/)

    // Goes to the about page
    cy.contains('About').click().get('#app').contains('About')

  })
  
})
