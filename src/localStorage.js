// Reference: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("bookNotesState");
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("bookNotesState", serializedState);
  } catch {
    // ignore write errors
  }
};
