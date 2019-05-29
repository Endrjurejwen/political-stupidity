export default {
  error: null,
  isLoading: false,
  filter: {
    name: 'all',
    instruction: null
  },
  pagination: {
    limit: 5,
    initialLimit: 5,
    added: 5,
    isLoading: false
  },
  sortTypes: [
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
  ]
};
