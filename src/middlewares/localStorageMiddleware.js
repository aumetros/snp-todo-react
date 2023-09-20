const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("todoState", JSON.stringify(store.getState()));
  return result;
};

export default localStorageMiddleware;