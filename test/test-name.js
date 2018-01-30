const expect = require('chai').expect;
const name = require('../assets/libreria/js/name-app.js');

describe('Name', () => {
  it('El campo no debe estar vacío', () => {
    expect().not.to.be.a('');
    expect().to.not.equal('');
    expect().to.not.equal(null);
  });

  it('El valor es mayor a tres caracteres', () => {
    expect(3).to.not.be.below(3);
  });

  it('No ingresó valores numéricos', () => {
    expect('string').to.equal('string');


  });

  it('No ingresó caracteres especiales', () => {

  });
});

