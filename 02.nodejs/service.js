var donnees = require("./data/devfest-2015.js")

module.exports = {
  
    listerTousLesPresentateurs : function(){
      return donnees.speakers;
    },
  
    listerToutesLesSessions : function(){
      return donnees.sessions;
    },
  
    listerUneSession : function(id){
      return donnees.sessions.find(function(sessionCourante){
        return sessionCourante.id = id;
      })
    },
  
    listerTopPresentateurs : function() {
      return donnees.speakers.filter(function(speakerCourant){
        return speakerCourant.topspeaker == true;
      })
    }
  }
/*
var listerTousLesPresentateurs = donnees.speakers;

function listerTousLesPresentateurs(){
  return donnees.speakers;
}
console.log(listerTousLesPresentateurs());


function listerToutesLesSessions(){
  return donnees.sessions;
}
console.log(listerToutesLesSessions());


function listerUneSession(){
  return donnees.sessions[id];
}
console.log(listerUneSession());


function listerTopPresentateurs(){
  return donnees.speakers.topspeakers[true];
}
console.log(listerTopPresentateurs());


exports.presentateurs = listerTousLesPresentateurs();
exports.sessions = listerToutesLesSessions();
exports.sessions = listerUneSession();
exports.sessions = listerTopPresentateurs();
*/
