function getnotes()
{ 
  console.log("Updating");
   notes=document.getElementById('notesText').value;
  if(localStorage.getItem('items')==null)
  {
    notesArray=[];
    notesArray.push([notes]);
    localStorage.setItem('items',JSON.stringify(notesArray));
  }
  else
  {
    notesArrayStr=localStorage.getItem('items');
    notesArray=JSON.parse(notesArrayStr);
    notesArray.push([notes]);
    localStorage.setItem('items',JSON.stringify(notesArray));
  }
  update();
}
function update()
{
  if(localStorage.getItem('items')==null)
  {
    notesArray=[];
    localStorage.setItem('items',JSON.stringify(notesArray));
  }
  else
  {
    notesArrayStr=localStorage.getItem('items');
    notesArray=JSON.parse(notesArrayStr);
  }
  let card=document.getElementById('cards');

  let str="";
  notesArray.forEach((element,index)=> {
    str +=`
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p>${element}</p>
                    <button class="btn btn-sm btn-primary" id="del" onclick="deleted(${index})">Delete note</button>
                  </div>
                </div>`;
    
  });
  card.innerHTML=str;
}
let add=document.getElementById('add');
add=add.addEventListener('click',getnotes);
update();
function deleted(itemIndex)
{
  console.log("deleting",itemIndex);
  notesArrayStr=localStorage.getItem('items');
  notesArray=JSON.parse(notesArrayStr);
  notesArray.splice(itemIndex,1);
  localStorage.setItem('items',JSON.stringify(notesArray));
  update();
  

}