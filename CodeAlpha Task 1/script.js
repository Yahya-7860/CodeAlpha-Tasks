const rightbtn=document.querySelector(".rightbtn");
const hiding_box=document.querySelector(".hiding-input");
const submitbtn=document.querySelector(".submitbtn");
const input_text=document.querySelector(".input-text");

const year=document.querySelector(".year");
const month=document.querySelector(".month");
const day=document.querySelector(".day");

const update=document.querySelector(".age-update");
const third_span=document.querySelector(".third-span");

let check=true;
rightbtn.addEventListener("click",()=>{
    if(check)
    {
        hiding_box.classList.remove("hide");
        rightbtn.style.backgroundColor="red";
    }
    else{
        hiding_box.classList.add("hide");
        rightbtn.style.backgroundColor="black";
    }
    check=!check;
})


submitbtn.addEventListener("click",()=>{
    let a=input_text.value;
    let dob_date=new Date(a);
    let cur_date=new Date();

    const diff=cur_date-dob_date;

    if(a)
    {
        update.classList.remove("hide");

        const y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const m = Math.floor((diff / (1000 * 60 * 60 * 24 * 365))%12);
        const d = Math.floor(diff / (1000 * 60 * 60 * 24))%30;

        year.innerHTML=y;
        month.innerHTML=m;
        day.innerHTML=d;
    }  
})