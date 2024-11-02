const getReadList = () => {
  const setlistStr = localStorage.getItem("read-list");
  if (setlistStr) {
    const storedListStr = JSON.parse(setlistStr);
    return storedListStr;
  } else {
    return [];
  }
};

const setReadList = (id) => {
  const setStoreListStr = getReadList();
  if (setStoreListStr.includes(id)) {
    return alert("item alredy exsist");
  } else {
    setStoreListStr.push(id);
    const storedListStr = JSON.stringify(setStoreListStr);
    localStorage.setItem("read-list", storedListStr);
  }
};

export { setReadList, getReadList };
