// Q. 1
var x="2"
var y=2
console.log(x==y);
console.log(x===y);

console.log('--------------------------------------------------------');

// Q .2 
const arr1=[1,2,3]
const arr2=[4,5,6]
const arr=[...arr1,...arr2]
console.log(arr)

// Q .5
// 1.Function to a variable:
                let myfunction=function(){
                    console.log("hi");
                }
                myfunction();

// 2.function as a argument:
                function greet(){
                    console.log("Happy")
                }
                function specialgreet(callback,message){
                    console.log(callback(),message)
                }
                specialgreet(greet,"Hello friend");

// 3.return a function:
                function outer(){
                    var x=10;
                    function inner(){
                        console.log(x);
                    }
                    return inner;
                }
                var out = outer();
                console.log(out);


// Q .6 
function outer(){
    var x=10;
    function inner(){
        console.log(x);
    }
    return inner();
}
var out=outer()
console.log(out);


// Q .7
// var emp1={
//     name:"yogi",
//     age:22
// }
// var emp2={
//     name:"patidar",
//     age:24
// }
// function greeting(wish1,wish2){
//     console.log(wish1+`${this.name}`+wish2)
// }
// greeting.call(this,"Hello!","How are you!")

 
// greeting.apply(this,emp2,"Good Morning!","Have some tea..")

// var greeting1=greeting.bind(this,emp1.name)
// var greeting2=greeting.bind(this,emp2.name)
// greeting1=("hi","how are you")
greeting2=("good night","go to sleep..")




