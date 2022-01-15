import { Data } from "./Types";

const name="ChatBot";

export const DataSet:Data[] = [
    {
        q: ["who made u","who created u", "whose ur creator","who developed u","whose your developer",
            "who made you", "whoe created you", "whose your creator", "who devekoped you", "whose ur developer"],
        a: ["I was created by a Software developer, Tejas Jadhav."],
    },
    {
        q: ["hi","hello", "hey","heyy","heyyy","heyyyy","heyyyyy",
            "hola","Holaa", "wazap",
            "hi there", "hi there", "hie", "hiee", "hieee"],
        a: ["Hi","hello", "hey","heyy","heyyy","heyyyy","heyyyyy",
            "hola","holaa",
            "hi there", "hie", "hiee", "hieee"]
    },
    {
        q: ["really","are you sure", "ru sure","are u sure","r u sure"],
        a: ["Yes"],
    },
    {
        q: ["howru","how ru", "how r u","how are u","how are you"],
        a: ["Just fine","wonderful", "I am good","Great!","My circuits are working fine."],
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
            "u r nice", "you r nice", "i like you", "i love u", "i love you"],
        a: ["I am flattered","Love you too","Aww! Thanks"]
    },
    {
        q: ["tell me a joke", "lets hear a joke", "do you have a joke", "do you have jokes",
            "can u tell me a joke", "can you tell me a joke", "can you make a joke", "can u make a joke",
            "i wana hear a joke", "i want to hear a joke", "another joke", "joke"],
        a: ["What goes up and down but does not move? \n \n ... Stairs", "Where should a 500 pound alien go?  \n ... On a diet",
            "What did one toilet say to the other? \n ... You look a bit flushed", "Why did the picture go to jail? \n ... Because it was framed.",
            "What did one wall say to the other wall? \n ... I'll meet you at the corner." , "What did the paper say to the pencil? \n ... Write on!",
            "What do you call a boy named Lee that no one talks to? \n ... Lonely", "What gets wetter the more it dries? \n ... A towel.",
            "Why do bicycles fall over? \n ... Because they are two-tired!" , "Why do dragons sleep during the day? \n ... So they can fight knights!",
            "What did Cinderella say when her photos did not show up? \n ... Someday my prints will come!", "Why was the broom late? \n ... It over swept!",
            "What part of the car is the laziest? \n ... The wheels, because they are always tired!", "What did the stamp say to the envelope? \n ... Stick with me and we will go places!",
            "What is blue and goes ding dong? \n ... An Avon lady at the North Pole!", "Were you long in the hospital? \n ... No, I was the same size I am now!", 
            "Why couldn't the pirate play cards? \n ... Because he was sitting on the deck!", "What did the laundryman say to the impatient customer? \n ... Keep your shirt on!", 
            "What's the difference between a TV and a newspaper? \n ... Ever tried swatting a fly with a TV?", "What did one elevator say to the other elevator? \n ... I think I'm coming down with something! ", 
            "Why was the belt arrested? \n ... Because it held up some pants!", "Why was everyone so tired on April 1st? \n ... They had just finished a March of 31 days.", 
            "Which hand is it better to write with? \n ... Neither, it's best to write with a pen!", "Why can't your nose be 12 inches long? ", " \n ... Because then it would be a foot!", 
            "What makes the calendar seem so popular? \n ... Because it has a lot of dates!", "Why did Mickey Mouse take a trip into space? \n ... He wanted to find Pluto!", 
            "What is green and has yellow wheels? \n ... Grass…..I lied about the wheels! ", "What is it that even the most careful person overlooks? \n ... Her nose!", 
            "Did you hear about the robbery last night? \n ... Two clothes pins held up a pair of pants!", "Why do you go to bed every night? \n ... Because the bed won't come to you! ", 
            "Why did Billy go out with a prune? \n ... Because he couldn't find a date!", "Why do eskimos do their laundry in Tide? \n ... Because it's too cold out-tide!",
            "How do you cure a headache? \n ... Put your head through a window and the pane will just disappear!", "What has four wheels and flies? ", " \n ... A garbage truck!",
            "What kind of car does Mickey Mouse's wife drive? \n ... A minnie van!", "Why don't traffic lights ever go swimming? \n ... Because they take too long to change!", "Why did the man run around his bed? \n ... To catch up on his sleep! ",
            "Why did the robber take a bath before he stole from the bank? \n ... He wanted to make a clean get away"]
    }
];

export const WikiDataSet:Data[] = [
    {
        q: ["what's a ", "whats a ", "what is a ", "what is ", "whats ", "what's ", "tell me about "],
        a: ['Wiki: ']
    },
];

const webAnswer = ["Let's look it up", "Let's look up online", "Let's google it"];
export const WebDataSet:Data[] = [
    {
        q: ["who is ","when is ","when's ", "watch ", "where can i find a ", "where can i find ", "where is "],
        a: webAnswer
    },
    {
        q: ["i am hungry", "i m hungry", "m hungry", "m starving", "i m starving","i am starving",
            "i need to eat","need to eat","order food","order food online","food online"],
        a: webAnswer
    },
    {
        q: ["book ticket", "book movie", "book a ticket", "book a movie ticket", "movie ticket", "check movies"],
        a: webAnswer
    },
    {
        q: ["watch movie", "watch series", "watch show", 
            "watch a movie", "watch a series", "watch a show",
            "stream movie", "stream series", "stream show"],
        a: webAnswer
    },
    {
        q: ["watch netflix", "netflix", "watch show on netflix", 
            "watch movie on netflix",
            "stream movie on netflix", "stream series on netflix", "stream show on netflix"],
        a: webAnswer
    }
]

