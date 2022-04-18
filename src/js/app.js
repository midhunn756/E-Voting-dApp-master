
var partyCount;
var partyCountA;
var partyCountB;
var partyCountC;
var partyCountD;
var ide;
var vote = 0;
var idcount = 0;
var voteCount;
var _adm;
var password;

var emailid;
//let password;




$(document).ready(() => {});

var apiKey = 'w08wk66j63i-lqsbdqbwns';

function getDropper() {
   
getPartyCount();
    for (let i = 1; i <= partyCount; i++) {
        $("#partyNamed").html("");
        VoteTrackerContract.methods.getNames(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response[1]);
                    let additive = '<option value="' + response[1] + '"> ' + response[1] + ' </option>';
                    $("#partyNamed").append(additive);
                }
            });
    }
}
function getDropperA() {
    getPartyCountA();
    for (let i = 1; i <= partyCountA; i++) {
        $("#partyNamedA").html("");
        VoteTrackerContract.methods.getNamesA(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response[1]);
                    let additive = '<option value="' + response[1] + '"> ' + response[1] + ' </option>';
                    $("#partyNamedA").append(additive);
                }
            });
    }
}
function getDropperB() {
    getPartyCountB();
    for (let i = 1; i <= partyCountB; i++) {
        $("#partyNamedB").html("");
        VoteTrackerContract.methods.getNamesB(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response[1]);
                    let additive = '<option value="' + response[1] + '"> ' + response[1] + ' </option>';
                    $("#partyNamedB").append(additive);
                }
            });
    }
}
function getDropperC() {
    getPartyCountC();
    for (let i = 1; i <= partyCountC; i++) {
        $("#partyNamedC").html("");
        VoteTrackerContract.methods.getNamesC(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response[1]);
                    let additive = '<option value="' + response[1] + '"> ' + response[1] + ' </option>';
                    $("#partyNamedC").append(additive);
                }
            });
    }
}
function getDropperD() {
   getPartyCountD();

    for (let i = 1; i <= partyCountD; i++) {
        $("#partyNamedD").html("");
        VoteTrackerContract.methods.getNamesD(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response[1]);
                    let additive = '<option value="' + response[1] + '"> ' + response[1] + ' </option>';
                    $("#partyNamedD").append(additive);
                }
            });
    }
}

function createParty() {
    var partyName = document.getElementById("partyName").value;
    if (partyName === "") {
        alert("Please enter Candidate name");
    } else {
        VoteTrackerContract.methods.createParty(partyName)
            .send()
            .then(result => {
                if (result.status === true) {
                    alert("Success");
                    console.log(result);
                    getPartyCount();
                }
            });
    }
}
function createPartyA() {
    var partyNameA = document.getElementById("partyNameA").value;
    if (partyNameA === "") {
        alert("Please enter Candidate name");
    } else {
        VoteTrackerContract.methods.createPartyA(partyNameA)
            .send()
            .then(result => {
                if (result.status === true) {
                    alert("Success");
                    console.log(result);
                    getPartyCountA();
                }
            });
    }
}
function createPartyB() {
    var partyNameB = document.getElementById("partyNameB").value;
    if (partyNameB === "") {
        alert("Please enter Candidate name");
    } else {
        VoteTrackerContract.methods.createPartyB(partyNameB)
            .send()
            .then(result => {
                if (result.status === true) {
                    alert("Success");
                    console.log(result);
                    getPartyCountB();
                }
            });
    }
}
function createPartyC() {
    var partyNameC = document.getElementById("partyNameC").value;
    if (partyNameC === "") {
        alert("Please enter Candidate name");
    } else {
        VoteTrackerContract.methods.createPartyC(partyNameC)
            .send()
            .then(result => {
                if (result.status === true) {
                    alert("Success");
                    console.log(result);
                    getPartyCountC();
                }
            });
    }
}
function createPartyD() {
    var partyNameD = document.getElementById("partyNameD").value;
    if (partyNameD === "") {
        alert("Please enter Candidate name");
    } else {
        VoteTrackerContract.methods.createPartyD(partyNameD)
            .send()
            .then(result => {
                if (result.status === true) {
                    alert("Success");
                    console.log(result);
                    getPartyCountD();
                }
            });
    }
}

function generateNewVote() {
    var partyNamed = document.getElementById("partyNamed").value;
     adhaar = document.getElementById("adhaarNumber").value;
    
    if (adhaar === "") {
        alert("Please provide Admission number");
    } else {
        var see = confirm("You have voted " + partyNamed);
        if (see) {
            generateVote();

        } else {
            location.reload();
        }
    }

}

function generateVote() {
    var partyNamed = document.getElementById("partyNamed").value;
    var adhaar = document.getElementById("adhaarNumber").value;
    console.log("---->" + adhaar)
    //temp = adhaar;
    //console.log(temp);
  //  localStorage.setItem('admno', adhaar);

    VoteTrackerContract.methods.generateVote(partyNamed, adhaar)
        .send()
        .then(result => {
            if (result.status === true) {
                alert("Success");
                console.log(result);
                //loadPortalA();
                window.location.href = "./VotingPortal1.html";

                

            } else {
                alert("error");
            }
        });
}

function putvalue(){
    var temp = localStorage.getItem('admno');
    console.log(temp);
    document.getElementById("adhaarNumber").value = temp;
    
}


function putvalueA(){

    var temp = localStorage.getItem('admno');
    console.log(temp);
    document.getElementById("adhaarNumberA").value = temp;
    
}
function putvalueB(){
    var temp = localStorage.getItem('admno');
    console.log(temp);
    document.getElementById("adhaarNumberB").value = temp;
    
}
function putvalueC(){
    var temp = localStorage.getItem('admno');
    console.log(temp);
    document.getElementById("adhaarNumberC").value = temp;
    
}
function putvalueD(){
    var temp = localStorage.getItem('admno');
    console.log(temp);
    document.getElementById("adhaarNumberD").value = temp;
    
}
function generateNewVoteA() {
    //console.log(adhaar);
    var partyNamedA = document.getElementById("partyNamedA").value;
    //document.getElementById("adhaarNumberA").innerHTML = adhaar;
    var adhaarA = document.getElementById("adhaarNumberA").value;
    if (adhaarA === "") {
        alert("Please provide adhaar number");
    } else {
        var seeA = confirm("You have voted " + partyNamedA);
        if (seeA) {
            generateVoteA();

        } else {
            location.reload();
        }
    }

}

function generateVoteA() {
    var partyNamedA = document.getElementById("partyNamedA").value;
    var adhaarA = document.getElementById("adhaarNumberA").value;
    console.log("---->" + adhaarA)

    VoteTrackerContract.methods.generateVoteA(partyNamedA, adhaarA)
        .send()
        .then(result => {
            if (result.status === true) {
                alert("Success");
                console.log(result);
                loadPortalB();

            } else {
                alert("error");
            }
        });
}
function generateNewVoteB() {
    var partyNamedB = document.getElementById("partyNamedB").value;
    var adhaarB = document.getElementById("adhaarNumberB").value;
    if (adhaarB === "") {
        alert("Please provide Admission number");
    } else {
        var seeB = confirm("You have voted " + partyNamedB);
        if (seeB) {
            generateVoteB();

        } else {
            location.reload();
        }
    }

}

function generateVoteB() {
    var partyNamedB = document.getElementById("partyNamedB").value;
    var adhaarB = document.getElementById("adhaarNumberB").value;
    console.log("---->" + adhaarB)

    VoteTrackerContract.methods.generateVoteB(partyNamedB, adhaarB)
        .send()
        .then(result => {
            if (result.status === true) {
                alert("Success");
                console.log(result);
                loadPortalC();

            } else {
                alert("error");
            }
        });
}
function generateNewVoteC() {
    var partyNamedC = document.getElementById("partyNamedC").value;
    var adhaarC = document.getElementById("adhaarNumberC").value;
    if (adhaarC === "") {
        alert("Please provide Admission number");
    } else {
        var seeC = confirm("You have voted " + partyNamedC);
        if (seeC) {
            generateVoteC();

        } else {
            location.reload();
        }
    }

}

function generateVoteC() {
    var partyNamedC = document.getElementById("partyNamedC").value;
    var adhaarC = document.getElementById("adhaarNumberC").value;
    console.log("---->" + adhaarC)

    VoteTrackerContract.methods.generateVoteC(partyNamedC, adhaarC)
        .send()
        .then(result => {
            if (result.status === true) {
                alert("Success");
                console.log(result);
                loadPortalD();

            } else {
                alert("error");
            }
        });
}
function generateNewVoteD() {
    var partyNamedD = document.getElementById("partyNamedD").value;
    var adhaarD = document.getElementById("adhaarNumberD").value;
    if (adhaarD === "") {
        alert("Please provide Admission number");
    } else {
        var seeD = confirm("You have voted " + partyNamedD);
        if (seeD) {
            generateVoteD();

        } else {
            location.reload();
        }
    }

}

function generateVoteD() {
    var partyNamedD = document.getElementById("partyNamedD").value;
    var adhaarD = document.getElementById("adhaarNumberD").value;
    console.log("---->" + adhaarD)

    VoteTrackerContract.methods.generateVoteD(partyNamedD, adhaarD)
        .send()
        .then(result => {
            if (result.status === true) {
                alert("Success");
                console.log(result);
                loadhome();
                

            } else {
                alert("error");
            }
        });
}

function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}




//password sender
function getpassword(){
     _adm = document.getElementById("_adhaarNumber").value; 
     if (_adm < 10000 || _adm > 10500){
        alert("enter valid admission number");}
        else {
     localStorage.setItem('admno', _adm);
    VoteTrackerContract.methods.getemail(_adm)
    .call((error ,response) => {
    if(error)
    {
        console.log(error);
    }
    else{
        emailid = response;
        console.log(emailid);
        
         password = generateRandomNumber();
        console.log(password);
        
            Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ronokochu10@gmail.com",
            Password : "3EC22A4AA8CB8911287E70305EE9B7076449",
            To : emailid,
            From : "ronokochu10@gmail.com",
            Subject : 'Password Verfication',
            Body : "Your password for verfication is  "+password
            }).then(
                message => alert("password sent successfully")
            );
        
        
    }
});


  
}}

/*function getemail() {
    var _adm = document.getElementById("_adhaarNumber").value;
    VoteTrackerContract.methods.getemail(_adm)
    .call((error,response) => {
        if(error){
            console.log(error);

        }
        else {
            eamil = response;
            console.log(email);
        }
    })
}*/

function verifypassword(){
    _pass = document.getElementById("_password").value;
    //console.log("--"+password);
    if ( _pass == password){
        loadVote();
    }
    else{
         alert('wrong password');
}

}

/*function getvotecount() {
    VoteTrackerContract.methods.getvotecount()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                voteCount = response;
                console.log(voteCount);
                alert(JSON.stringify(voteCount));
            }
        });


}*/

function getCount() {
   // getPartyCount();
   partyCount = localStorage.getItem('PCount');
   console.log(partyCount);
   for (let i = 1; i <= partyCount; i++) {
        $("#counts").html("");
        VoteTrackerContract.methods.getNames(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    let additive = "<h2>" + response[1] + "  :  " + response[0] + "</h2>";
                    $("#counts").append(additive);
                }
            });
    }
}
function getCountA() {
   // getPartyCountA();
   partyCountA = localStorage.getItem('PCountA');
   console.log(partyCountA);
    for (let i = 1; i <= partyCountA; i++) {
        $("#countsA").html("");
        VoteTrackerContract.methods.getNamesA(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    let additive = "<h2>" + response[1] + "  :  " + response[0] + "</h2>";
                    $("#countsA").append(additive);
                }
            });
    }
}
function getCountB() {
    //getPartyCountB();
    partyCountB = localStorage.getItem('PCountB');
   console.log(partyCountB);
    for (let i = 1; i <= partyCountB; i++) {
        $("#countsB").html("");
        VoteTrackerContract.methods.getNamesB(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    let additive = "<h2>" + response[1] + "  :  " + response[0] + "</h2>";
                    $("#countsB").append(additive);
                }
            });
    }
}
function getCountC() {
    //getPartyCountC();
    partyCountC = localStorage.getItem('PCountC');
   console.log(partyCountC);
    for (let i = 1; i <= partyCountC; i++) {
        $("#countsC").html("");
        VoteTrackerContract.methods.getNamesC(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    let additive = "<h2>" + response[1] + "  :  " + response[0] + "</h2>";
                    $("#countsC").append(additive);
                }
            });
    }
}
function getCountD() {
   // getPartyCountD();
   partyCountD = localStorage.getItem('PCountD');
   console.log(partyCountD);
    for (let i = 1; i <= partyCountD; i++) {
        $("#countsD").html("");
        VoteTrackerContract.methods.getNamesD(i)
            .call((error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    let additive = "<h2>" + response[1] + "  :  " + response[0] + "</h2>";
                    $("#countsD").append(additive);
                }
            });
    }
}

function getPartyCount() {
    VoteTrackerContract.methods.getPartyCount()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                partyCount = response;
                localStorage.setItem('PCount', partyCount);
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
                localStorage.setItem('PCountA', partyCountA);
                console.log(partyCountA);
                //alert(JSON.stringify(partyCountA));

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
                localStorage.setItem('PCountB', partyCountB);
                console.log(partyCountB);
                //alert(JSON.stringify(partyCountB));

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
                localStorage.setItem('PCountC', partyCountC);
                console.log(partyCountC);
                //alert(JSON.stringify(partyCountC));

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
                localStorage.setItem('PCountD', partyCountD);
                console.log(partyCountD);
                //alert(JSON.stringify(partyCountD));

            }
        });
}

function verify() {
    var email = document.getElementById("email").value;
    var adhar = document.getElementById("adhaarNumber").value;
    var _name = document.getElementById("name").value;
    if (adhar < 10000 || adhar > 10500){
        alert("enter valid admission number");
        
    }else{
        VoteTrackerContract.methods.registerUser(adhar, email)
        .send()
        .then(result => {
            if (result.status === true) {
                 alert("Success");
                console.log(result);
                

            } else {
                //console.log("error")
                alert("You have already Registered");
            }
        });
}}


function getid() {
    VoteTrackerContract.methods.getidcount()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                ide = response;
                console.log(ide);
               // alert(JSON.stringify(ide));

            }
        });
}

function loadVerification()
{
    window.location.href = "./verificationpage.html"
}

function loadVote() {
    window.location.href = "./VotingPortal.html";
}

function loadreg() {
    window.location.href = "./VoterVerification2.html"
}

function loadhome() {
    window.location.href = "./VoterVerification1.html"
}
function loadPortalA() {
    window.location.href = "./VotingPortal1.html";
    //document.getElementById("adhaarNumberA").innerHTML = adhaar;
    //console.log('1234');
}
function loadPortalB() {
    window.location.href = "./VotingPortal2.html"
}
function loadPortalC() {
    window.location.href = "./VotingPortal3.html"
}
function loadPortalD() {
    window.location.href = "./VotingPortal4.html"
}

function adminLogin() {
    var key;
    VoteTrackerContract.methods.getAdminKey()
        .call((error, response) => {
            if (error) {
                console.log(error);
            } else {
                key = response;
                var pass = document.getElementById("password").value;
                if (pass == key) {
                    window.location.href = "./PartyRegistration.html";
                } else {
                    alert("Wrong Key");
                }
            }
        });

}