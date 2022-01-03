import { globalStore } from './globalStore';

export function formateDate(date) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let newDate = new Date(date);
    let month = months[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    return `${month} ${day}, ${year}`;
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function closeModal(){
    globalStore.update($store => {
        $store.modalStatus = null
        return $store
    })
}


// VALIDATION //
export function numValid(val){
    if(val === "" || val === 0 || val === null){ return false }
    if(val.length > 1 || val > 0){ return true }
}
export function strValid(str){
    // USE REGEX TO CHECK IS THE STR IS GREATER THAN 5 CHARACTERS //
    let REGEX = /^[a-zA-Z0-9]{6,}$/;
    if(REGEX.test(str)){ return true }
}