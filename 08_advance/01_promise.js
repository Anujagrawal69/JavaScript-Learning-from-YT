// const promiseCreated = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('promise One')
//         resolve()
//     },1000)
// })
// promiseCreated.then(()=>{
//     console.log('promise consumed')
// })





// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Promise two');
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log('Promise two consumed');
// })





// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({
//             username: "Anuj Agrawal",
//             email: "rksanuj678@gmail.com"
//         })
//     }, 1000)
// }).then((data)=>{
//     console.log(data.username, " -> ", data.email)
// })





// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Promise Four")
//         rejectDetails = true
//         if(!rejectDetails){
//             reject({error: "ERROR: Something went wrong."})
//         }
//         resolve({username: "Anuj Agrawal", password: "12345"})
//     }, 1000)
// }).then((userDetails)=>{
//     console.log(userDetails)
//     return userDetails.username
// }).then((username)=>{
//     console.log(username)
// }).catch((errorDetails)=>{
//     console.log(errorDetails.error)
// }).finally(()=>console.log("Promise is either resolved or rejected."))






const promiseCreated = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('inside timeout of promiseCreated')
        let error = true
        if(!error){
            resolve({username: 'Anuj Agrawal', email: '12345'})
        } else{
            reject({error: 'ERROR in Promise'})
        }
    }, 1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseCreated
        console.log(response)   
    }catch(e){
        console.log(e)
    }
}
consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        const data = await response.json()
        console.log(data)
    } catch(e){
        console.log(e)
    }
}
getAllUsers()