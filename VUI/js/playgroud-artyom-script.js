window.addEventListener("load", function () {
    var artyom = new Artyom();



    artyom.addCommands({
        indexes: ["Guten Morgen","Gute Nacht", "Hallo"],
        action: function(i){
            if(i == 2){
                artyom.say("Hallo Amelie");
            }else if(i == 1){
                artyom.say("Gute Nacht Amelie");
            }else if(i == 0){
                artyom.say("Guten Morgen Amelie");
            }
        }
    });

    artyom.addCommands({
        indexes: ["Wie lautet dein Name"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Mein Name ist Laura");
        }
    });

    artyom.addCommands({
        indexes: ["Wer hat heute Geburtstag"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Heute ist Lucia Bachmann's Geburtstag. Sie wird heute 21 Jahre alt.");
        }
    });
    
    artyom.addCommands({
        indexes: ["Rufe * an"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Okay, ich rufe die Mobilfunknummer von * an");
        }
    });

    artyom.addCommands({
        indexes: ["Hilfe", "Ahhhhh", "Notfall"],
        smart: false,
        action: function () {
            artyom.say("Notruf ist kontaktiert. Bleiben Sie ruhig Amelie. Der Krankenwagen wird gleich bei Ihnen sein.");
        }
    });

    artyom.addCommands({
        indexes: ["Was gibt es Neues"],
        smart: false,
        action: function () {
            artyom.say("Um 15 Uhr kommt der Diakoniedienst. Soll ich etwas ausrichten?");
        }
    });

    artyom.addCommands({
        indexes: ["Richte dem Diakoniedienst folgendes aus: *"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Ich leite dem Diakoniedienst weiter: *");
        }
    });

    artyom.addCommands({
        indexes: ["Welche Tabletten muss ich nehmen","Medikamente","Medikamenteneinnahme"],
        smart: false,
        action: function () {
            artyom.say("Morgens eine Aspirin und abends zwei Ibuprofen mit viel Wasser nach dem Essen einnehmen.");
        }
    });

  


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