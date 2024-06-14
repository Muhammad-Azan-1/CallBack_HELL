// what is setTimeout?

//setTimeout is a function that schedules another function to run after a specified amount of time (in milliseconds).

//for example:

// let hello = () =>{

//     console.log("Hello World!");
// }

// setTimeout(hello, 3000); // so setTimeout executes the hello function after a delay of 3000 mili seconds  =  3 seconds


// we can also write it out like

// setTimeout(() =>{

//     console.log("Hello World!");
// },5000)


// Callback Hell
// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage.


//TO understand call back hell lets take an example


function getDataOfX(dataId:number){

    setTimeout(() => {
        console.log("data = ",dataId);
    },2000)
   
    
}

getDataOfX(1); //2s
getDataOfX(2); //2s
getDataOfX(3); //2s



// Currently, all three pieces of data are being received at the same time. However, we want to change this so that:
// Data 1 is received first.
// After a delay of 2 seconds, Data 2 is received.
// After another delay of 2 seconds, Data 3 is received.

// For this we use call back function.

function getData(DataId:number, getNextDataId:Function){

    setTimeout(()=>{
        console.log("Data = ",DataId);
        getNextDataId();
    },3000)
}

getData(1,()=>{
    console.log(" data1  Fetched successfully")
    console.log("Fetching data2")
    getData(2,()=>{
        console.log(" data2  Fetched successfully")
        console.log("Fetching data3")
        getData(3,()=>{
            console.log(" data3  Fetched successfully")
            console.log("Fetching data4")
            getData(4,()=>{
                console.log(" data4  Fetched successfully")
                console.log("Fetching data5")
                getData(5,()=>{
                    console.log(" data5 Fetched successfully")

                })   
            });
        });
    });
})


// This  is called CALL BACK HELL becuase call backs function are nested into each other and code is difficult to understand so when we deepdive into 
// the nesetd call back function then call back Hell Problem arise to solve this we use Promises 