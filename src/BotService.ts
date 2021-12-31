import { Data } from "./Types";
import { DataSet,SpecialDataSet } from "./DataSet";

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

        for(let i=0; i<SpecialDataSet.length; i++) {
            const x:Data = SpecialDataSet[i];

            if(i == 0) { // Google Search
                for(let i=0; i < x.q.length; i++) {
                    const x:Data = SpecialDataSet[0];
                    if(question.startsWith(x.q[i])){
                        const search = question.split(x.q[i])[1].trim();
                        setTimeout(()=>window.open("//" + "google.com/search?q=" + search, '_blank'),2000);

                        const index = Math.floor(Math.random()*2);
                        return this.delayMsg(x.a[index]);
                    }
                }
            }

            let search:string = question;
            
            if(SpecialDataSet[i].q.includes(question)) {
                let weburl = "google.com/search?q=";

                if(i == 1) search = "order food online";
                if(i == 2) search = "book movie";
                if(i == 3) search = "stream online";
                if(i == 4) {
                    weburl = "netflix.com"
                    search = "";
                }

                const x:Data = SpecialDataSet[i];
                setTimeout(()=>window.open("//" + weburl + search, '_blank'),2000);

                const index = Math.floor(Math.random()*2);
                console.log(index);
                return this.delayMsg(x.a[index]);
            }
        }


        return this.delayMsg("Sorry, I could not understand you.");
    }
}

