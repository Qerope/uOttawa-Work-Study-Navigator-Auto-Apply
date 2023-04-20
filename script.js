var target = document.getElementById('ctl00_mainContainer_UpdateProgress1_uxUpdateProgress');

let j = 0
let jdiv = 5
var observer = new MutationObserver(function(mutations) {
    if(j%jdiv != 3 && j%jdiv != 0){
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
let n = i
let f = i % 3
observer.observe(target, config);
nextaction()

function nextaction(){
    if(i%3 == (f%3))
        select(n)
    else if(i%3 == ((f+1)%3))
        if(document.getElementById('ctl00_contextContainer_uxContextJob').childElementCount == 2)
          perform('ctl00$contextContainer$uxApplyJob','')
        else{
          console.log("Skipped! Index " + i + " Job #" + document.getElementById('ctl00_mainContainer_uxTabs_ctl12_uxInfoCoopJobNumber').innerText)
          __selectTabWithPostBack('ctl00_mainContainer_uxTabs', '1')
          i++
          n++
          j++
        }
    else if(i%3 == ((f+2)%3)){
        n++
        console.log("Applied! Index " + i + " Job #" + document.getElementById('ctl00_mainContainer_uxTabs_ctl12_uxInfoCoopJobNumber').innerText)
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
