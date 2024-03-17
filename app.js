//loops
//for loop
for(let i=1; i<=10;i++){
    console.log(i*2)
}
for(let i=10; i>=1;i--){
    console.log(i*2)
}
//print odd
console.log("forward")
for(let i=1;i<=20;i=i+2){
    console.log(i) 
}
console.log("backward")
for(let i=20;i>=1;i=i-2){
    console.log(i)
}
//print even
console.log("even")
for(let i=2;i<=20;i=i+2){
    console.log(i)
}
//table 5
// console.log("start")
// n=prompt("enter the number")
// for(let i=5;i<=10;i++){
//     console.log(i*n)
// }
//nested loop
// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1;i<=3;j++){
//         console.log(i)
//     }
// }

//while loop
let i=1
while(i<=10){
    console.log(i)
    i++
}
//multiplication
let j=1
while(j<=10){
    console.log(j*2)
    j++
}
//favourite movie
// let fav="kkk"
//  let guess=prompt("enter the series name")
// while( (guess!= fav) && (guess!= "quit")){
//     console.log("wrong")
//     guess=prompt("enter again")
// }
// if(guess==fav){
//     console.log("congrats!!")
    
// }
// else{
//     console.log("fail")
// }
//break keyword
let k=1
while(k<=10){
    if(k==3){
        break;
    }
    console.log(k)
    k++
}
console.log("you break at 3")
//loops with array
let fruits=["mango","litchi","banana","apple","papaya"]
for( i=0;i<fruits.length;i++){
    console.log(i,fruits[i])
}
//for of loop
console.log("fruits names")
let fruit=["mango","litchi","banana","apple","papaya"]
for(fruit of fruits){
    console.log(fruit)
}
for(char of "apnacollege"){
    console.log(char)
}
//to do app
//  let todo=[]
// let req=prompt("please enter your request")
// while(true){
//     if (req=="quit"){
//         console.log("quiting the app")
//         break;
//     }
//     if(req=="list"){
//         console.log("___________")
//         for(task of todo){
//             console.log(task)
//         }
//         console.log("___________")
//     }
//     elseif(req=="add") {
//         let task=prompt("please enter the task you want to add")
//         todo.push(task)
//         console.log("task added")
//     }
    
// }
//assignment ques
let arr=[1,2,3,4,5,6,2,3]
let num=2
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1)
    }
    console.log(arr)
}