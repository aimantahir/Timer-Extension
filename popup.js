const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText( 
    //The setBadgeText method is a function commonly used in browser extensions to update the text displayed on the extension's badge. 
    //The badge refers to a small icon or text displayed on the browser's toolbar or next to the extension's icon.
  {
    text: "TIME",
  },
  () => {
    console.log("Finished setting badge text");
  }
);

chrome.storage.sync.get(["name"],(res)=>{
  const name = res.name ?? "???";
  nameElement.textContent = `Your name is: ${name}`
})
console.log(this);