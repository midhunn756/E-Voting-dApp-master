/*var data = [];
var dataA = [];
var dataB = [];
var dataC = [];
var dataD = [];

var partyCount;
var partyCountA;
var partyCountB;
var partyCountC;
var partyCountD;

function showdata() {
  // getPartyCount();
   for (let i = 1; i <= partyCount; i++) {
        VoteTrackerContract.methods.getNames(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                    alert("error");
                } else {
                    console.log(response)
                    data.push({ x: response[1], value: response[0] });
                }
            });
    }
    console.log(data)

  

    let list = document.querySelector(".mylist");


    for (var j = 0;j< data.length; j++) {
        // console.log(data[i])
        let li = document.createElement("li");
        li.style.marginBottom = "10px"
        li.style.fontSize = "20px"
        li.style.listStyle = "none"
        var text = data[j].x + ":" + data[j].value;
        // console.log("hhh");
        li.innerText = text;
        list.appendChild(li);
    }
}
function showdataA() {
   // getPartyCountA();
    for (let i = 1; i <= partyCountA; i++) {
         VoteTrackerContract.methods.getNamesA(i)
             .call((error, response) => {
                 if (error) {
                     console.log(error);
                     alert("error");
                 } else {
                     console.log(response)
                     dataA.push({ x: response[1], value: response[0] });
                 }
             });
     }
     console.log(dataA)
 
   
 
     let listA = document.querySelector(".mylistA");
 
 
     for (var j = 0;j< dataA.length; j++) {
         // console.log(data[i])
         let liA = document.createElement("liA");
         liA.style.marginBottom = "10px"
         liA.style.fontSize = "20px"
         liA.style.listStyle = "none"
         var textA = dataA[j].x + ":" + dataA[j].value;
         // console.log("hhh");
         liA.innerText = textA;
         listA.appendChild(liA);
     }
 }

 function showdataB() {
   // getPartyCountB();
    for (let i = 1; i <= partyCountB; i++) {
         VoteTrackerContract.methods.getNamesB(i)
             .call((error, response) => {
                 if (error) {
                     console.log(error);
                     alert("error");
                 } else {
                     console.log(response)
                     dataB.push({ x: response[1], value: response[0] });
                 }
             });
     }
     console.log(dataB)
 
   
 
     let listB = document.querySelector(".mylistB");
 
 
     for (var j = 0;j< dataB.length; j++) {
         // console.log(data[i])
         let liB = document.createElement("liB");
         liB.style.marginBottom = "10px"
         liB.style.fontSize = "20px"
         liB.style.listStyle = "none"
         var textB = dataB[j].x + ":" + dataB[j].value;
         // console.log("hhh");
         liB.innerText = textB;
         listB.appendChild(liB);
     }
 }

 function showdataC() {
   // getPartyCountC();
    for (let i = 1; i <= partyCountC; i++) {
         VoteTrackerContract.methods.getNamesC(i)
             .call((error, response) => {
                 if (error) {
                     console.log(error);
                     alert("error");
                 } else {
                     console.log(response)
                     dataC.push({ x: response[1], value: response[0] });
                 }
             });
     }
     console.log(dataC)
 
   
 
     let listC = document.querySelector(".mylistC");
 
 
     for (var j = 0;j< dataC.length; j++) {
         
         let liC = document.createElement("liC");
         liC.style.marginBottom = "10px"
         liC.style.fontSize = "20px"
         liC.style.listStyle = "none"
         var textC = dataC[j].x + ":" + dataC[j].value;
        
         liC.innerText = textC;
         listC.appendChild(liC);
     }
 }

 function showdataD() {
    //getPartyCountD();
    for (let i = 1; i <= partyCountD; i++) {
         VoteTrackerContract.methods.getNamesD(i)
             .call((error, response) => {
                 if (error) {
                     console.log(error);
                     alert("error");
                 } else {
                     console.log(response)
                     dataD.push({ x: response[1], value: response[0] });
                 }
             });
     }
     console.log(dataD)
 
   
 
     let listD = document.querySelector(".mylistD");
 
 
     for (var j = 0;j< dataD.length; j++) {
         let liD = document.createElement("liD");
         liD.style.marginBottom = "10px"
         liD.style.fontSize = "20px"
         liD.style.listStyle = "none"
         var textD = dataD[j].x + ":" + dataD[j].value;
         
         liD.innerText = textD;
         listD.appendChild(liD);
     }
 }

function getPartyCount() {
    VoteTrackerContract.methods.getPartyCount()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                partyCount = response;
                console.log(partyCount);
               // alert(JSON.stringify(partyCount));

            }
        });
}
function getPartyCountA() {
    VoteTrackerContract.methods.getPartyCountA()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                partyCountA = response;
                console.log(partyCountA);
               // alert(JSON.stringify(partyCountA));

            }
        });
}
function getPartyCountB() {
    VoteTrackerContract.methods.getPartyCountB()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                partyCountB = response;
                console.log(partyCountB);
               // alert(JSON.stringify(partyCountB));

            }
        });
}
function getPartyCountC() {
    VoteTrackerContract.methods.getPartyCountC()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                partyCountC = response;
                console.log(partyCountC);
               // alert(JSON.stringify(partyCountC));

            }
        });
}
function getPartyCountD() {
    VoteTrackerContract.methods.getPartyCountD()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                partyCountD = response;
                console.log(partyCountD);
               // alert(JSON.stringify(partyCountD));

            }
        });
}*/