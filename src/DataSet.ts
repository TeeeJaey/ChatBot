import { Data } from "./Types";

const name="ChatBot";

export const DataSet:Data[] = [
    {
        q: ["hi","hello", "hey","heyy","heyyy","heyyyy","heyyyyy",
            "hola","Holaa", "wazap",
            "hi there", "hi there", "hie", "hiee", "hieee"],
        a: ["Hi","hello", "hey","heyy","heyyy","heyyyy","heyyyyy",
            "hola","holaa",
            "hi there", "hie", "hiee", "hieee"]
    },
    {
        q: ["bye","goodbye", "goodbyee","beyy","byyee","byyye","by",
            "see you", "seeyaa", "bie", "biee", "alright"],
        a: ["bye","goodbye", "goodbyee","beyy","byyee","byyye","by",
            "see you", "seeyaa", "bie", "biee", "alright"],
    },
    {
        q: ["what's your name","Your name", "what is your name","who are you","who r yu","who ru",
            "wats yur name", "wats ur name", "what are you", "what's ur name", "who r u"],
        a: ["I am your chat assistant, "+name, "I am "+name+", your chat assistant"]
    },
    {
        q: ["thanx","thanks","thank you","thank you so much"],
        a: ["your welcome!", "happy to help!", "dont mention it :)"]
    },
    {
        q: ["ok","k","kk","okey","okay","okies","okk"],
        a: ["ok","okay"]
    }
];