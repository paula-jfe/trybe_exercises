// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  const newItem = Object.assign({}, item);
  newItem.price = price;
  return newItem;
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  const newArray = cart.slice();
  if (item) {
    newArray.push(item);
  }
  return newArray; 
};

describe('setPrice()', () => {
  it('should set the price in the given item object, immutably.', () => {
    const item = {
      name: 'test',
      price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: 'test',
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

describe('addToCart()', () => {
  it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
      name: 'Violator',
      price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});
