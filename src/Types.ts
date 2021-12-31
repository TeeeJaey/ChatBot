
export class MessageType {
    sender: string;
    text: string;
    time: number;
    
    constructor(text:string, sender:string="Agent") {
        this.sender = sender;
        this.text = text;
        this.time = Date.now();
    }
}

export type Data = {
    q: string[],
    a: string[],
}