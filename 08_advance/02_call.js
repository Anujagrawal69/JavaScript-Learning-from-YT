function createUser(username, email, password){
    this.email = email
    this.password = password
    SetUsername.call(this, username)
}

function SetUsername(username){
    this.username = username
}

const chai = new createUser('chai', 'tea@google.com', '1234')
console.log(chai)