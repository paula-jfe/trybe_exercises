const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('getUserName promise resolve and reject with async await', () => {

  describe('user id found', () => {
    it('get user name', async () => {
      expect.assertions(1);
      const idReturned = await getUserName(5);
      expect(idReturned).toEqual('Paul');
    });
  });

  describe('user id not found', () => {
    it('return error', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 3 not found.' });
      }
    });
  });
});