const input=document.querySelector('#otp_showcase')
const btn =document.querySelector('#otp_btn')

otp_btn.addEventListener('click',()=>{
    
    const outputNum =  Math.floor(900000 * Math.random()+100000)
    otp_showcase.innerHTML=`<span>${outputNum}</span>`
})




























    

    