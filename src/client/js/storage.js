class Storage {
  createStorage() {
    const entries = [];
    localStorage.setItem("entries", JSON.stringify(entries));
  }

  getStoredData() {
    return JSON.parse(localStorage.getItem("entries"));
  }

  addEntry(data) {
    const entries = JSON.parse(localStorage.getItem("entries"));
    entries.push(data);
    localStorage.setItem("entries", JSON.stringify(entries));
  }

  clearStorage() {
    localStorage.clear();
  }
}

export const storage = new Storage();
