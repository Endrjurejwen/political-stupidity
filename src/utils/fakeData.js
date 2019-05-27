export const fakeUser = {
  id: '123',
  firstName: 'Gal',
  lastName: 'Anonim',
  nick: 'Anonim@123',
  email: 'test@test.pl'
};

export const fakeComments = [
  {
    author: {
      firstName: 'Gal',
      lastName: 'Anonim',
      nick: 'Anonim@123',
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
      id: '87654',
      nick: 'Janeczek23'
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

export const fakeLocation = {
  hash: '',
  key: '1234',
  pathname: '/quotes',
  search: '',
  state: {}
};

export const fakeSortTypes = [
  {
    name: 'time',
    order: 'desc',
    type: 'createAt',
    active: true,
    label: 'Najnowsze'
  },
  {
    name: 'comments',
    order: 'asc',
    type: 'commentsCount',
    active: false,
    label: 'Komentarze'
  },
  {
    name: 'likes',
    order: 'asc',
    type: 'likesCount',
    active: false,
    label: 'Polubienia'
  }
];

export const fakeQuotes = [
  {
    author: {
      firstName: 'Gal',
      lastName: 'Anonim',
      nick: 'Anonim@456',
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
    likesCount: 0,
    commentsCount: 0,
    politician: 'Bush',
    topics: ['historia']
  },
  {
    author: {
      firstName: 'Jan',
      lastName: 'Nowak',
      nick: 'Janeczek@21',
      id: '3456'
    },
    content: 'Dolsda sads',
    createAt: {
      seconds: 1257238602,
      nanoseconds: 533000000,
      toDate: () => null
    },
    id: '9834567',
    likes: {},
    likesCount: 2,
    commentsCount: 2,
    politician: 'Obama',
    topics: ['Przyroda']
  }
];

export const fakeQuotation = fakeQuotes[0];

export const fakeHistory = {
  action: 'POP',
  block: () => null,
  createHref: () => null,
  go: () => null,
  goBack: () => null,
  goForward: () => null,
  length: 3,
  listen: () => null,
  location: {
    hash: '',
    key: 'fdsfsdf',
    pathname: '/quotes',
    search: '',
    state: {
      id: 0
    }
  },
  push: () => null,
  replace: () => null
};
