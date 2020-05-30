window.addEventListener("load", function() {
  var artyom = new Artyom();
  artyom.addCommands({
    indexes: ["erstelle Aufgabe *"],
    smart: true,
    action: function(i, wildcard) {
      console.log("Neue Aufgabe wird erstellt: " + wildcard);
    }
  });

  var commandHello = {
    indexes:["Guten Morgen"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        artyom.say("Guten Morgen Amelie.  Heute ist Montag, der 25. Mai. Ich habe 3 Neuigkeiten für dich. Willst du sie hören?");
       
    }

};

artyom.addCommands(commandHello) // Add the command with addCommands method. Now

    var Geburtstag = {
        indexes:["Wer hat heute Geburtstag?"], 
        action:function(){ 
            artyom.say("Heute ist Lucia Bachmann's Geburtstag. Sie wird heute 21 Jahre alt.");
           
        }

    

    };

  function startContinuousArtyom() {
    artyom.fatality();
    setTimeout(function() {
      artyom
        .initialize({
          lang: "de-DE",
          continuous: true,
          listen: true,
          interimResults: true,
          debug: true
        })
        .then(function() {
          console.log("Ready!");
        });
    }, 250);
  }
  startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map
