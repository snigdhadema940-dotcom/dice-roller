
function rolldice(){
    const numDice=Number(document.getElementById("numofDice").value);
    const images=document.getElementById("images");
    const result=document.getElementById("result");
    images.innerHTML="";
    result.textContent="";


    const num=[];
    const image=[];

    for(let i=0;i<numDice;i++){
        const val=Math.floor(Math.random()*6)+1;
        console.log(val);
        image.push(`<img src="${val}.png">`);

        num.push(val);
    }
    images.innerHTML=image.join('');
    result.textContent=`dice:${num.join(", ")}`;

    

    
}


