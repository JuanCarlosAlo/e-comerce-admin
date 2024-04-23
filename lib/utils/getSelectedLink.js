export const getSelectedLink = (pathname) => {
  if (pathname === "/") {
    return 0;
  }

  if (pathname === "/products") {
    return 1;
  }
  if (pathname === "/orders") {
    return 2;
  }
  if (pathname === "/settings") {
    return 3;
  } else {
    return null;
  }
};
