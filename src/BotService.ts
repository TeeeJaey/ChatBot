import { Data } from "./Types";
import { DataSet } from "./DataSet";

const name="ChatBot";

export class BotService 
{
    private static delayMsg(msg:string,sec:number=1000) {
        return new Promise<string>((resolve:Function,reject:Function) => {
            setTimeout(()=>{
                resolve(msg);
            },sec);
        })
    }

    public static startChat() {
        return this.delayMsg("Hi, How can I help you today?");
    }

    public static getAnswer(question:string) {
        question = question.replaceAll('.','');
        question = question.replaceAll('!','');
        question = question.replaceAll('?','');
        question = question.trim();
        question = question.toLowerCase();

        for(let i=0; i<DataSet.length; i++) {
            const x:Data = DataSet[i];
            if(x.q.includes(question)){
                const index = Math.floor(Math.random()*2);
                console.log(index);
                return this.delayMsg(x.a[index]);
            }
        }

        return this.delayMsg("Sorry, I could not understand you.");
    }
}

