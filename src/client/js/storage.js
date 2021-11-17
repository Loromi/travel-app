class Storage {
  createStorage() {
    const entries = [];
    localStorage.setItem("entries", JSON.stringify(entries));
  }

  getStoredData() {
    return JSON.parse(localStorage.getItem("entries"));
  }

  addEntry(key, data) {
    // const entries = JSON.parse(localStorage.getItem("entries"));
    // entries.push(data);
    localStorage.setItem(key, JSON.stringify(data));
  }

  clearStorage() {
    localStorage.clear();
  }
}

export const storage = new Storage();
