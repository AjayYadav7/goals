export function getSessionStorage(key: string) {
  return sessionStorage.getItem(key);
}

export function setSessionStorage(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

export function clearSessionStorage() {
  sessionStorage.clear();
}

// Remove saved data from sessionStorage
export const removeFromSession = (key: string) => {
    sessionStorage.removeItem(key);
}