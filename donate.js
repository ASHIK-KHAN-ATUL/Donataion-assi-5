// document.getElementById('history-btn').addEventListener('click',function(){
//     window.location.href = './history.html'
// })
// document.getElementById('donatin-btn').addEventListener('click',function(){
//     window.location.href = 'index.html'
// })



// Donate for Nowakhali-----------------------------------------
document.getElementById( 'btn-donate-1' ).addEventListener('click',function(event){
    event.preventDefault();


    const nowakhaliDonate = getInputFieldValueFromInput('input-donate-1'); // input the amount  for the donate
    const cuurentBalance = donationValueAmount('main-balance'); // main balance
    const donatedBalance = donationValueAmount('nowakhali-donated-balance');

    if(nowakhaliDonate > cuurentBalance){
        alert('You dont have sufficient balance');
        return;
    }
    if( nowakhaliDonate <= 0){
        alert('Enter the correct amount');
        return;
    }
    if(isNaN(nowakhaliDonate)){
        alert('Wrong input ! accept only valid number')
        return
    }

    console.log(nowakhaliDonate); // input the amount for donate

    const afterDonateBalance = cuurentBalance - nowakhaliDonate ;
    console.log(afterDonateBalance);  // remainig amount after donate 

    document.getElementById('main-balance').innerText = afterDonateBalance; // after donate new balance

     // the balance already donated

    const newDonatedBalance = donatedBalance + nowakhaliDonate;
    console.log('is new ', newDonatedBalance);

    document.getElementById('nowakhali-donated-balance').innerText = newDonatedBalance;


    document.getElementById('modal-balance').innerText = nowakhaliDonate;
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('close-confirmation').addEventListener('click',function(){
        document.getElementById('popup').classList.add('hidden');
    })


    // Transaction / donate history with time

    // date and time
    const date = new Date();
    const dateString = date.toLocaleString();

    // amount
    const p = document.createElement('p');
    p.classList.add('bg-green-200');
    p.classList.add('p-3');
    p.classList.add('rounded-xl');
    p.innerHTML= `
    <h4 class =" text-2xl font-bold "> ${nowakhaliDonate} Taka is Donated for famine-2024 at Nowakhali, Bangladesh </h4>
    <p> Date : ${dateString} </p>
    `
    document.getElementById('history-container').appendChild(p);
    
})







// Donate for Feni-----------------------------------------
document.getElementById('btn-donate-2').addEventListener('click', function(){
    const feniDonate = getInputFieldValueFromInput('input-donate-2');
    const cuurentBalance = donationValueAmount('main-balance');
    const donatedBalance = donationValueAmount('feni-donated-balance');
    if(feniDonate > cuurentBalance ){
        alert('You dont have sufficient balance');
        return;
    }
    if( feniDonate <= 0){
        alert('Enter the correct amount');
        return;
    }
    if(isNaN(feniDonate)){
        alert('Wrong input ! accept only valid number')
        return
    }
    const afterDonateBalance = cuurentBalance - feniDonate ;
    document.getElementById('main-balance').innerText = afterDonateBalance;
    const newDonatedBalance = donatedBalance + feniDonate ;
    document.getElementById('feni-donated-balance').innerText = newDonatedBalance ;

    document.getElementById('modal-balance').innerText = feniDonate ;
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('close-confirmation').addEventListener('click', function(){
        document.getElementById('popup').classList.add('hidden');
    })
   
    //  Transaction / donate history with time

    //  date and time
    const date = new Date();
    const dateString = date.toLocaleString();

    // amout
    const p = document.createElement('p');
    p.classList.add('bg-lime-200');
    p.classList.add('p-3');
    p.classList.add('rounded-xl');
    p.innerHTML = `
    <h4 class = "text-2xl font-bold "> ${feniDonate} Taka is Donated for Flood Relief in Feni, Bangladesh </h4>
    <p> Date : ${dateString} </p>
    `
    document.getElementById('history-container').appendChild(p);

})






// Donate for Quota-----------------------------------------
document.getElementById('btn-donate-3').addEventListener('click', function(){
    const quotaDonate = getInputFieldValueFromInput('input-donate-3');
    const cuurentBalance = donationValueAmount('main-balance');
    const donatedBalance = donationValueAmount('quota-donated-balance');
    console.log(quotaDonate);
    if(quotaDonate > cuurentBalance){
        alert('You dont have sufficient balance');
        return;
    }
    if(quotaDonate <= 0 ){
        alert('Enter the correct amount');
        return;
    }
    if(isNaN(quotaDonate)){
        alert('Wrong input ! only accept valid number');
        return;
    }
    const afterDonateBalance = cuurentBalance - quotaDonate;
    console.log(afterDonateBalance)
    document.getElementById('main-balance').innerText = afterDonateBalance;
    const newDonatedBalance = donatedBalance + quotaDonate;
    document.getElementById('quota-donated-balance').innerText = newDonatedBalance;

    document.getElementById('modal-balance').innerText = quotaDonate ;
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('close-confirmation').addEventListener('click', function(){
        document.getElementById('popup').classList.add('hidden')
    })
      //  Transaction / donate history with time

    //  date and time
    const date = new Date();
    const dateString = date.toLocaleString();
    // amount
    const p = document.createElement('p');
    p.classList.add('bg-emerald-200');
    p.classList.add('p-3');
    p.classList.add('rounded-xl');
    p.innerHTML= `
    <h4 class = " text-2xl font-bold "> ${quotaDonate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h4>
    <p> Date : ${dateString} <p>
    `
    document.getElementById('history-container').appendChild(p);

})


document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('main-cards').classList.add('hidden');
    document.getElementById('main-history').classList.remove('hidden');
})

document.getElementById('btn-donate-main').addEventListener('click',function(){
    document.getElementById('main-history').classList.add('hidden');
    document.getElementById('main-cards').classList.remove('hidden');
})