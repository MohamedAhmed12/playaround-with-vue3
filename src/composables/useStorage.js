import { ref, watch } from "vue";

export function useStorage(key, val = null) {
  const storedVal = read(key);
  console.log(2);
  if (storedVal) {
    val = ref(storedVal);
  } else {
    val = ref(val);
    write();
  }

  watch(val, write, { deep: true }); // will watch nested changes will cause performance issue if the object is big

  function read(key) {
    const stored = localStorage.getItem(key);

    return stored.trim() != "" ? JSON.parse(stored) : "";
  }
  function write() {
    if (val.value == "" || val.value == null) {
      return localStorage.setItem(key);
    }
    localStorage.setItem(key, JSON.stringify(val.value));
  }

  return val;
}
