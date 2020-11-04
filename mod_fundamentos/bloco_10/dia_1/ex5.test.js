const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

/* Compare dois objetos (JSON) para verificar se são idênticos ou não */
test('The objects obj2 and obj3 are different', () => {
  expect(obj3).not.toEqual(obj2);
});

test('The objects obj1 and obj2 are equal', () => {
  expect(obj2).toEqual(obj1);
});

test('The objects obj1 and obj3 are different', () => {
  expect(obj3).not.toEqual(obj1);
});
