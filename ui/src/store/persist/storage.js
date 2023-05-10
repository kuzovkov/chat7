export default {
  set(key,value){
    if ( typeof(localStorage) != 'undefined'){
      localStorage.setItem(key,JSON.stringify(value));
    }
  },
  get(key){
    if ( typeof(localStorage) != 'undefined'){
      return JSON.parse(localStorage.getItem(key));
    }
    return null;
  },
  del(key){
    if ( typeof(localStorage) != 'undefined'){
      return localStorage.removeItem(key);
    }
    return null;
  },
  clear(){
    if ( typeof(localStorage) != 'undefined'){
      localStorage.clear();
    }
  }
}