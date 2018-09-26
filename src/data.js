let userId = 1;
export const users = [
  {
    id: 1,
    username: 'bkapustka',
  },
  {
    id: 2,
    username: 'brian.kupi@gmail.com',
  }
];

export const emails = [
  {
    id: 1,
    userId: 2,
    address: 'brian.kupi@gmail.com',
    isBad: false,
  },
  {
    id: 2,
    userId: 1,
    address: '123fakestreet@gmail.com',
    isBad: true
  }
];