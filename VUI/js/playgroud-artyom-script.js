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
            artyom.say("Mein Name is Artyom");
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