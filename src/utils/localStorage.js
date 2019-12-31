const windowGlobal = typeof window !== 'undefined' && window
export function save(key,value){
  if(windowGlobal){
    value == null ? windowGlobal.localStorage.setItem(key,JSON.stringify({})) : windowGlobal.localStorage.setItem(key,JSON.stringify(value || {}))
  }
}

export function get(key,defaultValue){
  if(windowGlobal){
    if(defaultValue){
      return localStorage.getItem(key) == null ? defaultValue :  JSON.parse(localStorage.getItem(key))
    }
    return localStorage.getItem(key) == null ? {} :  JSON.parse(localStorage.getItem(key))
  }
}
