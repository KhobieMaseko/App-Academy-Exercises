
// Your code here
const sayHelloTo = require('./send-messages/say-hello-to.js');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato.js');
const { message1, message2, message3 } = require("./messages/index.js");

const msg1 = message1;
const msg2 = message2;
const msg3 = message3;



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
