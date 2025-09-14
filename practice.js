/*
Tasks
Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
1. 2. 3. 4. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
gnidoC"
Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
gnitirw edoc tuB"
Message 3: "!elpoep rehto morf tnereﬃd on era uoy ,elbuort evah uoy fI
.lanoisseforp a ekil leef ot evah t'nod uoY"
Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
Task 2: Write your own reverse messages
1. 2. First, write your own short messages of inspiration (without reversing them).
Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.
*/

let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"

let message1Reversed = message1.split("").reverse().join("");
console.log(message1Reversed);

let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"

let message2Reversed = message2.split("").reverse().join("");
console.log(message2Reversed);

let message3 = "!elpoep rehto morf tnereﬃd on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"

let message3Reversed = message3.split("").reverse().join("");
console.log(message3Reversed);

let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
let message4Reversed = message4.split("").reverse().join("");
console.log(message4Reversed);

let message5 = "You can do it! Keep going even when you feel discouraged."

let message5Reversed = message5.split("").reverse().join("");
console.log(message5Reversed);

let message6 = "Maybe I'll get so good at scripting in JS that I can teach Naomi how to do it. That would be pretty rad, actually."

let message6Reversed = message6.split("").reverse().join("");
console.log(message6Reversed);
