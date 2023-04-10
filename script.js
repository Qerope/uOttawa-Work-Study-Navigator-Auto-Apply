var target = document.getElementById('ctl00_mainContainer_UpdateProgress1_uxUpdateProgress');
var msg = document.getElementById('ctl00_mainContainer_uxMsg');

let j = 0
var observer = new MutationObserver(function(mutations) {
    if(j%5 != 3 && j%5 != 0){
        nextaction()
    }
    j++
});

var config = {
  attributes: true,
  childList: true,
  characterData: true
};
let offset = 0
let i = offset
let f = i % 3
observer.observe(target, config);
nextaction()

function nextaction(){
    if(i%3 == (f%3))
        select(i)
    else if(i%3 == ((f+1)%3))
        perform('ctl00$contextContainer$uxApplyJob','')
    else if(i%3 == ((f+2)%3)){
        console.log("Applied! Index " + i + "Job #" + document.getElementById('ctl00_mainContainer_uxTabs_ctl12_uxInfoCoopJobNumber').innerText)
        __selectTabWithPostBack('ctl00_mainContainer_uxTabs', '1')
    }
    i++
}

function select(i) {
  setTimeout(function() {
    __doPostBack('ctl00$mainContainer$uxTabs$ctl06$uxResultGrid$ctl' + (i+2).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
 + '$uxCoopJobNumber','')
  });
}
function perform(action, parm) {
  setTimeout(function() {
    __doPostBack(action,parm)

    
  })
}
