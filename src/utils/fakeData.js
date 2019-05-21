export const fakeUser = {
  id: '123',
  firstName: 'Gal',
  lastName: 'Anonim'
};

export const fakeComments = [
  {
    author: {
      firstName: 'Gal',
      lastName: 'Anonim',
      id: '12340'
    },
    content: 'Lorem ipsum',
    createAt: {
      seconds: 1557238602,
      nanoseconds: 833000000,
      toDate: () => null
    },
    id: '1234567',
    likes: {},
    likesCount: 0
  },
  {
    author: {
      firstName: 'Jan',
      lastName: 'Kowalski',
      id: '87654'
    },
    content: 'Lorem ipsum',
    createAt: {
      seconds: 1257238602,
      nanoseconds: 633000000,
      toDate: () => null
    },
    id: '987654',
    likes: {},
    likesCount: 2
  }
];

export const fakeComment = fakeComments[0];

export const fakeMatch = {
  isExact: true,
  params: { id: '1234' },
  path: 'quotes/:id',
  url: 'quotes/1234'
};
