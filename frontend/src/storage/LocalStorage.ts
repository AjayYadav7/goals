export function getLocalStorage(key: string) {
  return localStorage.getItem(key);
}

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function clearLocalStorage() {
  localStorage.clear();
}

// Remove saved data from localStorage
export const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
}