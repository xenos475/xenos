let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/DM_20231029181718_001.jpg") {
    myImage.setAttribute("src", "images/DM_20231029140646_001.jpg");
  } else {
    myImage.setAttribute("src", "images/DM_20231029181718_001.jpg");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){
    let myName = prompt('请输入你的名字。');
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent = "Mozilla 酷毙了，"+ myName;
    }
    
}
if (!localStorage.getItem("name")){
    //获取name ,没有则为假，！后设置name
    setUserName();
}else{
    let storedName= localStorage.getItem("name");
    myHeading.textContent="Mozilla 酷毙了，"+ storedName;
}

myButton.onclick = function () {
    setUserName();
};
