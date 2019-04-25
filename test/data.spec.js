global.window = global;
require('../src/data');
require('./data.spec.js');

describe('filtrarPorGenero', () => {
  it('debería ser una función', () => {
    expect(typeof window.potter.filtrarPorGenero).toBe('function');
  });
  it('Esta función debería filtrar por genero', () => {
    expect(window.potter.filtrarPorGenero([{ name: "Hermione", gender: "female"}, { name: "Harry Potter", gender: "male"}], "male")).toEqual([{name: "Harry Potter", gender: "male"}]);
  });
});

describe('filtrarPorCasa', () => {
  it('debería ser una función', () => {
    expect(typeof window.potter.filtrarPorCasa).toBe('function');
  });
  it('Esta función debería filtrar por casa', () => {
    expect(window.potter.filtrarPorCasa([{ name: "Hermione Granger", house: "Gryffindor"}, { name: "Draco Malfoy", house: "Slytherin"}], "Slytherin")).toEqual([{name: "Draco Malfoy", house: "Slytherin"}]);
  });
});

describe('filtrarPorRolStudent', () => {
  it('debería ser una función', () => {
    expect(typeof window.potter.filtrarPorRolStudent).toBe('function');
  });
  it('Esta función debería filtrar por casa', () => {
    expect(window.potter.filtrarPorRolStudent([{ name: "Harry Potter", hogwartsStudent: true}, { name: "Severus Snape", hogwartsStaff: true}], "Estudiante")).toEqual([{name: "Harry Potter", houwartsStudent: true}]);
  });
});

describe('filtrarPorRolStudent', () => {
  it('debería ser una función', () => {
    expect(typeof window.potter.filtrarPorRolStudent).toBe('function');
  });
  it('Esta función debería filtrar por Estudiante', () => {
    expect(window.potter.filtrarPorRolStudent([{ name: "Harry Potter", hogwartsStudent: true}, { name: "Severus Snape", hogwartsStudent: false}], "Estudiante")).toEqual([{ name: "Harry Potter", hogwartsStudent: true}]);
  });
});

describe('filtrarPorRolStaff', () => {
  it('debería ser una función', () => {
    expect(typeof window.potter.filtrarPorRolStaff).toBe('function');
  });
  it('Esta función debería filtrar por Staff', () => {
    expect(window.potter.filtrarPorRolStaff([{ name: "Harry Potter", hogwartsStaff: false}, { name: "Severus Snape", hogwartsStaff: true}], "Staff")).toEqual([{ name: "Severus Snape", hogwartsStaff: true}]);
  });
});

describe('ordenEdad', () => {
  it('debería ser una función', () => {
    expect(typeof window.potter.ordenEdad).toBe('function');
  });
  it('Esta función debería ordenar por edad', () => {
    expect(window.potter.ordenEdad([{ yearOfBirth: 1980}, { yearOfBirth: 1960}])).toEqual([{ yearOfBirth: 1960}, { yearOfBirth: 1980}]);
  });
});