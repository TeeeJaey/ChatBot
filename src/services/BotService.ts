import { Data, Message } from "../helpers/Types";
import { DataSet, WebDataSet, WikiDataSet } from "../helpers/DataSet";
import { WikiService } from "./WikiService";
import { MessageService } from "./MessageService";
import { WebLinks } from "../helpers/Constants";

export class BotService {
    static delayMsg(msg: string, server = "Bot", sec: number = 1000): Promise<Message> {
        return new Promise<Message>(resolve => {
            setTimeout(() => {
                resolve(MessageService.createAgentMsg(msg, server));
            }, sec);
        });
    }

    static openWebpage(weburl: string, search: string, sec: number = 2000) {
        setTimeout(() => {
            window.open("//" + weburl + search, "_blank");
        }, sec);
    }

    static startChat(): Promise<Message> {
        return this.delayMsg("Hi, How can I help you today?");
    }

    static async getAnswer(question: string): Promise<Message> {
        question = question.replaceAll(".", "");
        question = question.replaceAll("!", "");
        question = question.replaceAll("?", "");
        question = question.trim();
        question = question.toLowerCase();

        //#region DataSet
        for (let i = 0; i < DataSet.length; i++) {
            const x: Data = DataSet[i];
            if (x.q.includes(question)) {
                if (i === 0) return this.delayMsg(x.a[0], "Developer");
                const index = Math.floor(Math.random() * x.a.length);
                return this.delayMsg(x.a[index]);
            }
        }
        //#endregion

        //#region WikiDataset
        for (let i = 0; i < WikiDataSet.length; i++) {
            const x: Data = WikiDataSet[i];

            for (let i = 0; i < x.q.length; i++) {
                if (question.startsWith(x.q[i])) {
                    const search = question.split(x.q[i])[1].trim();
                    const ans = await WikiService.fetchData(search);
                    if (ans) return this.delayMsg(ans, "Wiki");
                    else {
                        this.openWebpage(WebLinks.googleQuery, search);
                        return this.delayMsg("Let me check online...", "Web");
                    }
                }
            }
        }
        //#endregion

        //#region WebDataSet
        for (let i = 0; i < WebDataSet.length; i++) {
            const x: Data = WebDataSet[i];

            if (i === 0) {
                // Google Search
                for (let i = 0; i < x.q.length; i++) {
                    if (question.startsWith(x.q[i])) {
                        const search = question.split(x.q[i])[1].trim();
                        this.openWebpage(WebLinks.googleQuery, search);

                        const index = Math.floor(Math.random() * 2);
                        return this.delayMsg(x.a[index], "Web");
                    }
                }
            }

            let search: string = question;

            if (WebDataSet[i].q.includes(question)) {
                let weburl = WebLinks.googleQuery;

                if (i === 1) search = "order food online";
                else if (i === 2) search = "book movie";
                else if (i === 3) search = "stream online";
                else if (i === 4) {
                    weburl = WebLinks.netflix;
                    search = "";
                }

                const x: Data = WebDataSet[i];
                this.openWebpage(weburl, search);

                const index = Math.floor(Math.random() * 2);
                console.log(index);
                return this.delayMsg(x.a[index], "Web");
            }
        }
        //#endregion

        return this.delayMsg("Sorry, I could not understand you.");
    }
}
