// using class

// class User{
//     constructor(email, password){
//         this.email = email;
//         this._password = password;
//     }
//     get password(){
//         return this._password.toUpperCase();
//     }
//     set password(password){
//         this._password = password;
//     }
// }

// const hitesh = new User('hitesh123@gmail.com', 'hitesh123');
// console.log(hitesh);





// using function (property based)

// function createUser(email, password){
//     this._email = email
//     this._password = password
//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(password){
//             this._password = password
//         }
//     })
// }

// const hitesh = new createUser('hitesh123@gmail.com', 'hitesh123')
// console.log(hitesh)





// using objects

const User = {
    _email: 'hitesh123@gmail.com',
    _password: 'hitesh123',
    get password(){
        return this._password.toUpperCase();
    },
    set password(password){
        this._password = password;
    }
}
const user = User()