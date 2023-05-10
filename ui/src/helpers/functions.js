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


