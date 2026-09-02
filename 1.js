// complex types : aka arrays, objects, functions , maps, sets;

//declaration and stuff

//objects : data-structure that stores the values in 2 parts that is in key and value pair
//for eg:
// console.log(a.rollno);
// const a ={"name" : "Arthur","rollno" : 28};
// function b(a){
//     console.log(`Greetings ${a.name}`);
// }
// b(a);
// acessing the elements of object

// in array we declare it
// const arr = [1,3,2,45,6,5,4,55]
// console.log(arr)
// function a(arr){
//     for(let i = 0; i<arr.length ; i++){
//         console.log(arr[i]);
//     }
// }
// a(arr);

//now we have array of objects
const users = [{
		name: "Ram",
		age: 21
	}, {
		name: "raman",
		age: 22
	}
]
function a(users){
    for(let i=0 ; i<users.length ; i++){
        if(users[i].age<=21){
            console.log("eligible");
        }
        else{
            console.log("not eligible")
        }
    }
}
a(users)