const withEmptyInfo = ({ isEmpty, info, children }) => {
  if (isEmpty) return info;
  return children;
};

export default withEmptyInfo;
