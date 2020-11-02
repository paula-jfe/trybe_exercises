const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it(`uppercase string 'jest' to be equal 'JEST'`, (done) => {
  uppercase('jest', (str) => {
    expect(str).toBe('JEST');
    done();
  });
});