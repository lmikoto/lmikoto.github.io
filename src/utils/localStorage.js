export function save(key,value){
  value == null ? localStorage.setItem(key,JSON.stringify({})) : localStorage.setItem(key,JSON.stringify(value || {}))
}

export function get(key,defaultValue){
  if(defaultValue){
    return localStorage.getItem(key) == null ? defaultValue :  JSON.parse(localStorage.getItem(key))
  }
  return localStorage.getItem(key) == null ? {} :  JSON.parse(localStorage.getItem(key))
}
