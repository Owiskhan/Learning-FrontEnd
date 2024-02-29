let a = document.querySelector("h1");
a.style.color = "red"
a.innerHTML = "I am learning JS"
a.style.backgroundColor = "pink"
let num = 0
a.addEventListener("click",function(){   
    if(num == 0){console.log("Tabdeeli agye ha");  
    a.innerHTML = "Pakistan zindabad";
    a.style.backgroundColor = "aqua";
    a.style.color = "black"
    num = 1
    }else{console.log("Tabdeeli nai ai ha");  
        a.innerHTML = "Karchi zindabad";
        a.style.backgroundColor = "black";
        a.style.color = "white"
        num = 0
    }
})