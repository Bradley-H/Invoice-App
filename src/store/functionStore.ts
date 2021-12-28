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

// GET INVOICES IF YOU ARE IN A DYNAMIC ROUTE
export async function getInvoices(path){
    let res = await fetch('./json/data.json');
    let data = await res.json();
    // IF PATH IN PROVIDED //
    if(path.length > 0){
    let getData = data.find(invoice => invoice.id === path);    
    return {
        id: getData.id,
        createdAt: getData.createdAt,
        paymentDue: getData.paymentDue,
        paymentTerms: getData.paymentTerms,
        status: getData.status,
        description: getData.description,
        clientName: getData.clientName,
        clientEmail: getData.clientEmail,
        clientAddress: getData.clientAddress.street,
        clientCity: getData.clientAddress.city,
        clientPostCode: getData.clientAddress.postCode,
        clientCountry: getData.clientAddress.country,
        senderAddress: getData.senderAddress.street,
        senderCity: getData.senderAddress.city,
        senderPostCode: getData.senderAddress.postCode,
        senderCountry: getData.senderAddress.country,
        total: getData.total,
        items: getData.items.map(item => {
            return{
                itemName: item.name,
                itemQuantity: item.quantity,
                itemPrice: item.price,
                itemTotal: item.total
            }
        })
    }
} else{
    // OTHERWISE OUTPUT ALL INVOICES IN INDEX PAGE
    return data;
}
}