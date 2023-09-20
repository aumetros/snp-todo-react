export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("todoState", JSON.stringify(store.getState()));
  return result;
};

export const preLoadStore = () => {
  if (localStorage.getItem("todoState") !== null) {
    return JSON.parse(localStorage.getItem("todoState"));
  }
};
