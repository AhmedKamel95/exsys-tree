const isThereObjData = obj => {
  return obj && typeof obj === "object" && Object.keys(obj).length > 0;
};

const isThereArrayData = array => {
  return array && Array.isArray(array) && array.length >= 0;
};

export const isFlatArray = array => array.every(i => typeof i === "string");

export const getObjKeys = obj => {
  if (isThereObjData(obj)) {
    return Object.keys(obj);
  }
  return false;
};

export const buildTree = array => {
  let folders = [];
  let screens = [];
  if (isThereArrayData(array)) {
    array.forEach(item => {
      if (typeof item === "object") {
        folders = [...folders, item];
      } else {
        screens = [...screens, item];
      }
    });
  }

  return {
    folders,
    screens
  };
};
