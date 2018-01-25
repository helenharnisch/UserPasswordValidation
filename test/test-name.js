const expect = require ('chai').expect;
const name = require('../js/name-app.js');
describe('Name', function() {
  it('El campo no debe estar vacío', function() {
    expect().not.to.be.a('');
    expect().to.not.equal('');
    expect().to.not.equal(null);
  });

  it ('El valor es mayor a tres caracteres', function() {
    expect().to.have.lengthOf(3)


  });

  it('No ingresó valores numéricos', function() {


  });

  it('No ingresó caracteres especiales', function() {


  });

});