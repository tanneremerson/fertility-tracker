export const update = (id, temp, currentCycle) => {
  return {
    type: "UPDATE",
    id,
    temp,
    currentCycle
  };
};
