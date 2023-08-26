import { openDB } from "idb";

// Initialize the database
const initDB = async () => {
  const jateDB = await openDB("jate", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("jate")) {
        db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
        console.log("jate database created");
      } else {
        console.log("jate database already exists");
      }
    },
  });
  return jateDB;
};

// Method to add content to the database
export const putDb = async (content) => {
  const jateDB = await initDB();
  const tx = jateDB.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ value: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// Method to get all content from the database
export const getDb = async () => {
  const jateDB = await initDB();
  const tx = jateDB.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("🚀 - data read from database", result);
  return result;
};

initDB();
