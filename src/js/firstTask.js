
function orderByProps(inputObj, array) {
  const restProp = [];
  const targetProp = [];

  for (const prop in inputObj) {
    if (array.indexOf(prop) === -1) {
      restProp.push({
        key: prop,
        value: inputObj[prop],
      });
    } else {
      targetProp.push({
        key: prop,
        value: inputObj[prop],
      });
    }
  }

  restProp.sort((a, b) => b.value - a.value);

  const output = [...targetProp, ...restProp];
  return output;
}

export default orderByProps;
