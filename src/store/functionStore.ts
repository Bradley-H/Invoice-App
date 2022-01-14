import { globalStore } from './globalStore';

export  function convertDate(date, term = 30 ) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let newDate = new Date(date);
    let month = ( months[newDate.getMonth() + (term/ 30)]   );
    let day = (newDate.getDate());
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
    if(str.length >= 5){ return true }
}

export function emailValid(str){
let REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
if(REGEX.test(str)){ return true }
}

export async function getInvoicesIndex(){
    // IF LOCALSTORE INVOICES EXIST, RETURN THE INVOICES OTHERWISE RETURN NULL //
    if(localStorage.getItem('invoices'))
        globalStore.update($store => {
        $store.invoices = JSON.parse(localStorage.getItem('invoices'));
        return {...$store}
    })
    else {
        // IF THERE NO LOCALSTORE INVOICES, GET INVOICES AND SAVE AS LOCAL STORAGE //
        const response = await fetch('./data.json');
        const data = await response.json();
        globalStore.update($store => {
            localStorage.setItem('invoices', JSON.stringify(data));
            $store.invoices = JSON.parse(localStorage.getItem('invoices'));
            return {...$store}
        })
    }
}