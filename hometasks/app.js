

// // task_2 



let  myBag ={
    apple: "7000",
    braed :"3200",
    tie : "5000",
    milk : "6000",
    paper :"2500",
    tomato :"2300"

}

function cashRegister(myBag ){

    let result =0;
    for ( key in myBag){
        result+=Number(myBag[key]);
        
    }
    return console.log(result);
    
}
console.log(cashRegister(myBag));




// task_3 
/* bu misolda hammasi raqam bulsin degan shartni bajarolmadim. prompt da user yozayotgan mahalda numberdan boshqa narsa kiritolmaydian qilib quysak bulamysi masalan agar user harf yozsa shu zahoti qizarib hatolik bersin shu promptni uzida.
 */
let cardNumber = prompt(`enter your card number please`);

let arr = [];
let sum= 0;
let counter= 0;
console.log(cardNumber.length);

// cardnumberni array kurinishida yozib olamiz. 
for (let i = 0; i < cardNumber.length; i++) {
   arr[i] = cardNumber[i];
}


function validateCreditCard(cardNumber) {
     
    for(let i=0; i<cardNumber.length; i++){
        sum +=Number(arr[i]);
        if(arr[0]==arr[i]){
            counter++;            
        } 
    }
    
    // card number 16 ta sondan iborat ekanligini tekshirayapti
    if(cardNumber.length == 16){
        alert(`sizning karta raqamingiz 16 ta xonadan iborat`);
    }
    else{
        alert(` number.length!= 16`)
    }
     if(sum>=16){
        alert("card raqamalr yig'indisi 16 dan oshdi")
    }
    else{
        alert(`sum<16`);
    }

    // bu oxirgi 3 ta raqamning bir biriga tengligini tekshiruvi
    let cloneArr = arr.slice(cardNumber.length-3)
     if(cloneArr[0]==cloneArr[1] && cloneArr[0]==cloneArr[2]){
         alert(`oxirdagi raqamlar tog'ri kiritildi`)
     }
     else{ alert(`oxirgi raqamlar har xil`)
    }

    // card numberning nechta raqam ishtirok etganini bildiradi
    if(counter==16)
    {
        alert(` ERROR!  hamma son bir hil`)
    }
    else{
        alert(`shart qanoatlantirdi. 2 tadan kop son kiritildi`)
    }

}

console.log(validateCreditCard(cardNumber));





































