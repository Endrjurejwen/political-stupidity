export default {
  error: null,
  isLoading: false,
  filter: {
    name: 'all',
    instruction: null
  },
  pagination: {
    limit: 2,
    initialLimit: 2,
    added: 2,
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
