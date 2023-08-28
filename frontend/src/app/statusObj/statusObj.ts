export class StatusObj {

    status: string
    amount: number
    timestamp: Date

    // set initial values for the class properties
    constructor (paramStatus:string){
        this.status = paramStatus
        this.timestamp = new Date()
        this.amount = 0
    }


}