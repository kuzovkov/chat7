export const sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const onlyUnique = function (value, index, self) {
  return self.indexOf(value) === index;
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

export const replaceByRegex = (content, regex, replace='') => {
  return content.replace(regex, replace)
}

export const buildQueryString = (options={}, allowedParams=['id', 'name']) => {
  if (options === undefined){
    return null
  }
  const queryParams = {}
  for (let key in options){
    if (allowedParams.indexOf(key) !== -1 && options[key] !== undefined){
      queryParams[key] = (Array.isArray(options[key]))? options[key].join(',') :  options[key]
    }
  }
  let qs = (Object.keys(queryParams).length)? new URLSearchParams(queryParams).toString() : null;
  if (qs){
    qs = qs.split('%2C').join(',')
  }
  return qs
}

export const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

/**
 * generation UUID4 code
 * @returns {string}
 * @constructor
 */
export const UUID4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};




