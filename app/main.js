function _join(arr, sep){
    filteredArr = arr.filter((val)=> {
        return !(val === "" || typeof val == "undefined" || val === null || val === []);
     });
    let str = '';
    let separ = sep + '';
    let len = filteredArr.length;
    for(let i = 0; i < len; i++){
        str += filteredArr[i];
        if((len > 1)&&(i !== len-1)){
            str += separ;
        }
    }
    return str;
  }
  
  function _includes(arr,el) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el || (isNaN(arr[i]) && isNaN(el))) {
            result = true;
            break;
        }
    }
    return result;
}