import { openDB } from "idb";

// Initialize the database
const initdb = async () => {
  await openDB("jate", 1, {
    // Add database schema if not already initialized
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // Create an object store with auto-incrementing key
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });
};

// Function to save data to the database
export const putDb = async (content) => {
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ value: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// Function to retrieve data from the database
export const getDb = async () => {
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("🚀 - data read from database", result);
  return result;
};

// Initialize the database schema
initdb();
