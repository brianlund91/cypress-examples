describe('async examples', () => {

  it('should work with async examples', () => {

    // cy.pause();

    cy.visit('http://google.com');

    // Async EXAMPLE:
    const myPromise = new Promise((resolve, reject) => {
      // we use setTimeout(...) to simulate async code.
      setTimeout(() => {
        resolve({
          type: 'success',
          message: 'It worked!'
        })
      }, 2500)
    })

    // use await
    // cy.log('START await Test')
    // timeout example:
    // const result = await myPromise;
    // cy.log(result)
    // ISSUE: no "cy" calls are executed after the await
    // cy.log('END await Test')

    // use cy.wrap
    // cy.log('START wrap Test')
    // timeout example:
    // cy.wrap(myPromise).then((result) => {
    //   cy.log('result:', result)
    // });
    // cy.log('END wrap Test')

    // use cy.task
    cy.log('START task test')
    // timout example:
    // see "pause" in plugins
    cy.task('pause', 1000)
      .then(() => {
        cy.log('After 1 second pause')
      })
    cy.log('END task test')

  });
});
