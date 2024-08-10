/*
Solution of assignment 4:

Expected output:

Hello Kasun
Good Bye John
Good Bye Jenny
Good Bye Jason
Hello Prasad
Hello Saman
Hello Lakindu
Hello Pramod
Hello Lahiru
Good Bye Jimmy
*/

(function() {
    var names = ["Kasun", "John", "Jenny", "Jason", "Prasad", "Saman", "Lakindu", "Pramod", "Lahiru", "Jimmy"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
