window.addEventListener("load", function () {
    var artyom = new Artyom();

    artyom.addCommands({
        indexes: ["Hallo *"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Hallo");
        }
    });

    artyom.addCommands({
        indexes: ["Hallo"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Hallo");
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
        indexes: ["Wer hat heute Geburtstag?"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Heute ist Lucia Bachmann's Geburtstag. Sie wird heute 21 Jahre alt.");
        }
    });
  
    artyom.addCommands({
        indexes: ["Was gibt es Neues?"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Um 15 Uhr kommt der Diakoniedienst. Soll ich etwas ausrichten?");
        }
    });

    artyom.addCommands({
        indexes: ["Richte dem Diakoniediesnt folgendes aus: Meine Milch ist ausgelaufen, ich brauche eine Neue."],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Ich leite dem Diakoniediesnt weiter: Meine Milch ist ausgelaufen, ich brauche eine Neue.");
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