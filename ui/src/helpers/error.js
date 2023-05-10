export const parseError = (o) => {
  let obj
  if (typeof(o) === 'string') {
    try {
      obj = JSON.parse(o);
    } catch (e) {
      return o;
    }
  } else {
    obj = o
  }
  if (obj.error && obj.error.details && obj.error.details.length){
    return obj.error.details.map(item => `${item.path} ${item.message}`).join(',')
  }
  if (obj.error && obj.error.message){
    return obj.error.message;
  }
  return JSON.stringify(o)
}