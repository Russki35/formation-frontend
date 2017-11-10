var services = require('./service')

var tabSpeakers = services.listerTousLesPresentateurs();
var tabSessions = services.listerToutesLesSessions();
var tabSessionsId = services.listerUneSession();
var tabTopSpeakers = services.listerTopPresentateurs();



console.log(tabSpeakers);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var menu = {
  "1" : {
    libelle : "option 1",
    execute : function(){
      console.log("J'execute 1");
      services.listerTousLesPresentateurs().forEach(function(speakers) {
        console.log(speakers.firstname, speakers.lastname);
    })
  }},

  "2" : {
    libelle : "option 2",
    execute : function(){
      console.log("J'execute 2");
      services.listerToutesLesSessions().forEach(function(sessions) {
        console.log(sessions.title, sessions.type);
    })
  }},

  "3" : {
    libelle : "option 3",
    execute : function(){
      console.log("J'execute 3");
      rl.question("Saisissez un id", (saisie) => 
        console.log(services.listerUneSession(saisie))
    )
      }   
  },

  "4" : {
    libelle : "option 4",
    execute : function(){
      console.log("J'execute 4");
      console.log(services.listerTopPresentateurs());
  }
 }
}

for(prop in menu) {//prop = "1", "2" etc...
  console.log(prop, menu[prop].libelle)
}

rl.question('quoi ?', (saisie) => {
  
  menu[saisie].execute();

 rl.close();
 
});

