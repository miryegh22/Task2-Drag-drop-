const button=document.querySelector("#createButton");
const select=document.querySelector("select");
const constructor=document.querySelector("#constructor");
const buttons=document.querySelector("#buttons");
const result=document.querySelector("#result");
const inputs =document.querySelector("#input-");
constructor.ondragover=allowDrop;
result.ondragover=allowDrop;
let CannotAppend=["input","h1","span","p"];
function allowDrop(event){
            event.preventDefault();
}
result.ondrop=drop;

function drop (event){
    if (CannotAppend.includes(event.target.tagName.toLowerCase())) {
        alert("Can not append ");
      } 
           else{        let itemId=event.dataTransfer.getData('id');
                   event.target.append(document.getElementById(itemId));
                    if(itemId==="input"){
                       
                    }}
}           
function drag (event){
                  event.dataTransfer.setData('id',event.target.id);
                    }
let change=select.addEventListener("change",(e)=>{
    let selectValue=document.getElementById("list").value;
    if(select.value==="h1" || select.value==="p" || select.value==="span"){
        inputs.style.display="block"
       }
       else{
        inputs.style.display="none"
       }
});
button.addEventListener("click",(e)=>{
    
    if(select.value==="div"){
        const newdiv=document.createElement('div');
        constructor.appendChild(newdiv);
        newdiv.setAttribute("id","newdiv");
        newdiv.innerText="<DIV>";
        newdiv.draggable="true";
        newdiv.ondragstart=drag;
        result.ondrop=drop;
        newdiv.addEventListener("click",(e)=>{
            alert("Please select an element from Constructor");

        })
       
    }
    if(select.value==="h1"){
       
        const newh1=document.createElement("h1");
        constructor.appendChild(newh1);
        const p=document.createElement("p");
        newh1.setAttribute("id","newh1");
        newh1.draggable="true";
        newh1.ondragstart=drag;
        newh1.innerText=inputs.value;
        
        }
    
    if(select.value==="input"){
       const newinput =document.createElement("input");
       constructor.appendChild(newinput);
       newinput.setAttribute("id","input");
       newinput.placeholder="Input Tag";
       newinput.draggable="true";
       newinput.ondragstart=drag;

       
    }
    if(select.value==="span"){
       const newspan=document.createElement("span");
       constructor.appendChild(newspan);
       newspan.setAttribute('id',"newspan")
       newspan.draggable="true";
       newspan.ondragstart=drag;
       newspan.innerText=inputs.value;
       
    }
    if(select.value==="p"){
        const newp=document.createElement("p");
        constructor.appendChild(newp);
        newp.setAttribute('id',"newp");
        newp.draggable="true";
        newp.ondragstart=drag;
        newp.innerText=inputs.value;
    }
   
})