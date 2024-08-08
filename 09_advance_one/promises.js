// fetch('https://something.com').then().catch().finally();

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async two resolved");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ankush", email: "chai@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user); 
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "ankush", password: "1234"});
        } else {
            reject('ERROR: Something went wrong')
        };
    }, 1000);
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
});

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "1246"});
        } else {
            reject("ERROR: javascript went wrong")
        };
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     };
// };

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));