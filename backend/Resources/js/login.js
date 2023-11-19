// var signinbt=document.querySelector('.loginbutton');
// var signupbt=document.querySelector('.registerbutton');
// var signin=document.querySelector('.logincard');
// var signup=document.querySelector('.signupcard');
var display=document.querySelector('.information');
var loginbutton=document.querySelector('.loginsubmit');
var username=document.querySelector('#username');
var password=document.querySelector('#password');
var sname=document.querySelector('#pfp');
var regform=document.querySelector('.regform');
check=0;
regform.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    if(username.value.length==0||password.value.length==0||pfp.value.length==0){ 
        display.textContent='All Fields are required';
        return;
    }
    if(password.value.length<=5){
        display.textContent='Password must be greater than 5 letters';
        return;
    }
    if(check===0){
        regform.submit();
    }
    
})

// signinbt.addEventListener('click',()=>{
//     console.log('anmol');
//     signin.classList.remove('hidden');
//     signup.classList.add('hidden');
// })

// signupbt.addEventListener('click',()=>{
//     signup.classList.remove('hidden');
//     signin.classList.add('hidden');
// })