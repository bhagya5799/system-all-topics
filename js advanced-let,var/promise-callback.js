let stocks={
    fruits:["strwberry","grapes","banana","apple"],
    liquids:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};
let is_shopopen=true;
let order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if (is_shopopen){
            setTimeout(()=>{
                resolve(work());
                

            },time);
            
        }else{
            reject(console.log("our shop is closed"));
        }

    })
};
order(2000,()=>console.log(`${stocks.fruits[0]}was selected`))
.then(()=>{
    return order(0000,()=>console.log("production has startrd"))

})

.then(()=>{
    return order(2000,()=>console.log("the fruits was choppped"))
})

.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`)
    })
})

.then (()=>{
    return order(1000,()=>console.log("start the machine"))
})
.then(()=>{
    return order(2000,()=>{
        console.log(` ice cream placed on ${stocks.holder[0]}`)
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings[0]}was selected`)
    })
})

.then(()=>{
    return order(1000,()=>console.log("ice cream was served"));
})

.catch(()=> {
    console.log("costomer was cancelled")
})
.finally(()=>{
    console.log("day ended ,shop is")
})