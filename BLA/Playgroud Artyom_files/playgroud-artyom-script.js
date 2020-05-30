window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });


    var commandHello = {
        indexes:["Guten Morgen"], // These spoken words will trigger the execution of the command
        action:function(){ // Action to be executed when a index match with spoken word
            artyom.say("Willkommen Ihr Kaffee steht bereit. Reden wir über die gestrigen Zahlen?");
           
        }

    };

    artyom.addCommands(commandHello)

    var Verschleiß = {
        indexes:["wie hoch sind die Kosten für den Verschleiß"], 
        action:function(){ 
            artyom.say("Die Kosten für den Verschleiß liegen bei 4340€");
           
        }

    

    };

    artyom.addCommands(Verschleiß)

    var Produktionszahlen = {
        indexes:["Wie stehen die Produktionszahlen", "Wie viel Stuck wurde bisher produziert","Wie hoch sind die Produktionszahlen"], 
        action:function(){ 
            artyom.say("Es wurden bisher 234090 Stück produziert");
           
        }

    

    };

    artyom.addCommands(Produktionszahlen)


    var krank = {
        indexes:["Wie viele Mitarbeiter sind krank", "wie viele Mitarbeiter sind heute krank", "Wie viele Krankmeldungen gibt es"], 
        action:function(){ 
            artyom.say("Momentan sind insgesamt 75 Mitarbeiter krank");
           
        }

    

    };

    artyom.addCommands(krank)

    var Ausschuss = {
        indexes:["Wie hoch ist der Ausschuss"], 
        action:function(){ 
            artyom.say("Der Ausschuss liegt bei 700 Stück");
           
        }

    

    };

    artyom.addCommands(Ausschuss)


    
    var myGroup = [
        {
            description:"If my database contains the name of a person say something",
            smart:true, // a Smart command allow you to use wildcard in order to retrieve words that the user should say
            // Ways to trigger the command with the voice
            indexes:["Do you know who is *","I don't know who is *","Is * a good person"],
            // Do something when the commands is triggered
            action:function(i,wildcard){
                var database = ["Carlos","Bruce","David","Joseph","Kenny"];
    
                //If the command "is xxx a good person" is triggered do, else
                if(i == 2){
                    if(database.indexOf(wildcard.trim())){
                        artyom.say("I'm a machine, I dont know what is a feeling");
                    }else{
                        artyom.say("I don't know who is " + wildcard + " and i cannot say if is a good person");
                    }
                }else{
                    if(database.indexOf(wildcard.trim())){
                        artyom.say("Of course i know who is "+ wildcard + ". A really good person");
                    }else{
                        artyom.say("My database is not big enough, I don't know who is " + wildcard);
                    }
                }
            }
        },
        {
            indexes:["What time is it","Is too late"],
            action:function(i){ // var i returns the index of the recognized command in the previous array
                if(i == 0){
                    aFunctionThatSaysTheTime(new Date());
                }else if(i == 1){
                    artyom.say("Never is too late to do something my friend !");
                }
            }
        }
    ];
    
    artyom.addCommands(myGroup); 

   



    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map