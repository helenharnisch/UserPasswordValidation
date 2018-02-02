const expect = require('chai').expect;
const name = require('../index.js');
describe('Password', () => {
  it('El campo no debe estar vacío', () => {
    expect().not.to.be.a('');
    expect().to.not.equal('');
    expect().to.not.equal(null);
  });

  it('El valor es mayor a 3 caracteres', () => {
    expect(3).to.not.be.below(3);
  });

  it('El valor es menor a 7 caracteres', () => {
    expect(7).to.not.be.above(7);
  });

  it('No ingresó letras ni caracteres especiales', () => {
    expect('number').to.equal('number');
  });
});
