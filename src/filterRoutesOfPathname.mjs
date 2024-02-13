export default (routeList, pathname) => {
  if (pathname[0] !== '/') {
    throw new Error(`\`${pathname}\` pathname invalid`);
  }
  const result = [];
  for (let i = 0; i < routeList.length; i++) {
    const routeItem = routeList[i];
    if (routeItem.pathname === pathname) {
      result.push(routeItem);
    } else if (routeItem.urlMatch(pathname)) {
      result.push(routeItem);
    }
  }
  return result;
};
