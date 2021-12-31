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
        q: ["bye","goodbye", "goodbyee","beyy","byyee","byee","byeee",
            "see you", "seeyaa", "bie", "biee", "alright"],
        a: ["bye","goodbye", "goodbyee","beyy","byyee","byyye","by",
            "see you", "seeyaa", "bie", "biee", "alright"],
    },
    {
        q: ["what's your name","Your name", "what is your name","who are you","who r yu","who ru",
            "whats yur name","whats your name", "wats ur name", "what are you", "what's ur name", "who r u"],
        a: ["I am your chat assistant, "+name, "I am "+name+", your chat assistant"]
    },
    {
        q: ["thanx","thanks","thank you","thank you so much"],
        a: ["your welcome!", "happy to help!", "dont mention it :)"]
    },
    {
        q: ["ok","k","kk","okey","okay","okies","okk"],
        a: ["ok","okay"]
    },
    {
        q: ["i lov yu","love you","luv u","love u","i like u","u r nice","you are nice",
            "u r nice", "you r nice", "i like you"],
        a: ["I am flattered","Love you too","Aww! Thanks"]
    }
];

const speacialA = ["Let's look up online", "Let's google it"];
export const SpecialDataSet:Data[] = [
    {
        q: ["what's a", "whats a", "what is a", "what is", "whats", "what's",
             "who is","when is","when's", "watch", "where can i find a", "where can i find"],
        a: speacialA
    },
    {
        q: ["i am hungry", "i m hungry", "m hungry", "m starving", "i m starving","i am starving",
            "i need to eat","need to eat","order food","order food online","food online"],
        a: speacialA
    },
    {
        q: ["book ticket", "book movie", "book a ticket", "book a movie ticket", "movie ticket", "check movies"],
        a: speacialA
    },
    {
        q: ["watch movie", "watch series", "watch show", 
            "watch a movie", "watch a series", "watch a show",
            "stream movie", "stream series", "stream show"],
        a: speacialA
    },
    {
        q: ["watch netflix", "netflix", "watch show on netflix", 
            "watch movie on netflix",
            "stream movie on netflix", "stream series on netflix", "stream show on netflix"],
        a: speacialA
    }
]
