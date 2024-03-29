let UploadIcon=document.getElementById("upload");
let Table=document.querySelector(".table");
let Remove=document.getElementById("remove");
let AreaDrop=document.getElementById("areadrop");
let RemoveTH=document.querySelectorAll(".thtable");
let CheckTH;
let count=0;
AreaDrop.ondragover=function (e) {
   e.preventDefault();
}

AreaDrop.addEventListener("drop",function (e) {
   e.preventDefault();
   Upl(e.dataTransfer.files)
 })

UploadIcon.addEventListener("click",function () {
    UploadIcon.nextElementSibling.click();
})

UploadIcon.nextElementSibling.onchange=function(e) {
    CheckTH?CheckTH.classList.remove("d-none"):"";
   Table.classList.remove("d-none");
   Remove.classList.remove("d-none");
            Upl(e.target.files)
           for (let i = 1; i < RemoveTH.length; i++) {
           CheckTH=RemoveTH[i];
            
           }
   // RemoveTH.classList.remove("d-none")

}


function Upl(files) {
   Array.from(files).forEach(file=>{
     
      let reader=new FileReader();
      
      reader.onloadend=function (e) {
         let tr=document.createElement("tr");
          
         let tdCount=document.createElement("td");
         count++;
         tdCount.innerText+=count;
        
 
         let tdName=document.createElement("td");
          tdName.innerText=file.name;
 
          let tdImage=document.createElement("td");
          let image=document.createElement("img");
         image.setAttribute("src",e.target.result);
         image.style.width="122px";
         image.style.height="122px";
         tdImage.append(image);
        
         let tdSize=document.createElement("td");
         tdSize.innerText=file.size;
        
         let tdRemove=document.createElement("td");
         tdRemove.innerText="X";
         tdRemove.style.cursor="pointer";
         tdRemove.addEventListener("click",function () {
            tr.remove();
         })
         
 
         tr.append(tdCount,tdName,tdImage,tdSize,tdRemove);
         Table.lastElementChild.append(tr);
      }
      reader.readAsDataURL(file);
    })
}


  Remove.onclick=function() {          
      Remove.classList.add("d-none");
       RemoveTH.forEach(th=>{
        th.classList.add("d-none")
       })
         Table.lastElementChild.remove(); 
   }