document.addEventListener("DOMContentLoaded", ()=>{
  // GET THE SELECTORS OF THE BUTTONS
  const startVideoButton = document.querySelector("button#start_video");
  const stopVideoButton = document.querySelector("button#stop_video");
  const cameraToggleButton = document.getElementById("cameraToggleButton");
  const audioToggleButton = document.getElementById("audioToggleButton");

  // adding event listeners

//   startVideoButton.addEventListener("click", ()=>{
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//           chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"},  function(response){
//               if(!chrome.runtime.lastError){
//                   console.log(response)
//               } else{
//                   console.log(chrome.runtime.lastError, 'error line 14')
//               }
//           })
//       } )
//   })


//   stopVideoButton.addEventListener("click", ()=>{
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//           chrome.tabs.sendMessage(tabs[0].id, {action: "stopvideo"},  function(response){
//               if(!chrome.runtime.lastError){
//                   console.log(response)
//               } else{
//                   console.log(chrome.runtime.lastError, 'error line 27')
//               }
//           })
//       } )
//   })


  cameraToggleButton.addEventListener("click", toggleCamera);
  audioToggleButton.addEventListener("click", toggleAudio);

  let cameraOn = false;
  let audioOn = false;

  function toggleCamera() {
    cameraOn = !cameraOn;
    updateToggleButton(cameraToggleButton, cameraOn);
    console.log("cameraToggleButton clicked")
  }

  function toggleAudio() {
    audioOn = !audioOn;
    updateToggleButton(audioToggleButton, audioOn);
    console.log("audioToggleButton clicked")
  }


  function updateToggleButton(button, isOn) {
    if (isOn) {
      button.classList.add("on");
    } else {
      button.classList.remove("on");
    }
  }

})