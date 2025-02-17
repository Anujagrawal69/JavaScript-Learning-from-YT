// const arr = [5,6,7,8]

// for (const key in arr) {
    // console.log(key); // 0 1 2 3
    // console.log(arr[key]); // 5 6 7 8
// }



const myObj = {
    js: "JavaScript",
    py: "Python",
    cpp: "C++",
    html: "Hyper Text Markup Language"
}

for (const key in myObj) {
    // console.log(key); // js py cpp html
    // console.log(myObj[key]); // JavaScript Python C++ Hyper Text Markup Language
    
    //similarly
    // console.log(`${key} is the shortcut for ${myObj[key]}`);
}



const map = new Map()
map.set("js", "JavaScript")
map.set("py","Python")
map.set("cpp", "C++")
map.set("html", "Hyper Text Markup Language")

for (const key in map) {
    console.log(key);
    
}