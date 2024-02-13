export default (routeList, request) => {
  for (let i = 0; i < routeList.length; i++) {
    const routeItem = routeList[i];
    if (routeItem.pathname === request.pathname) {
      return {
        ...routeItem,
        params: {},
      };
    }
    const pathnameMatched = routeItem.urlMatch(request.pathname);
    if (!pathnameMatched) {
      continue;
    }
    const { params } = pathnameMatched;
    if (!routeItem.match) {
      return {
        ...routeItem,
        params,
      };
    }
    if (routeItem.match({ ...request, params })) {
      return {
        ...routeItem,
        params,
      };
    }
  }
  return null;
};
