class Delivery{
    id: number;
    phoneNumber: string;
    address: string;
    addressDetail: string;
    order: string;
    active: boolean;
    selected: boolean;
    date: string

    constructor(id: number, phoneNumber:string, address:string, addressDetail:string, order:string, active:boolean, selected:boolean, date:string) {
        this.id = id
        this.phoneNumber = phoneNumber
        this.address = address
        this.addressDetail = addressDetail
        this.order = order
        this.active = active
        this.selected = selected
        this.date = date
    }

}

export default Delivery