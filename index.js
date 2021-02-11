var filters=[];
var f=0;
for(var i=0;i<document.getElementsByClassName("icon").length;i++)
{
  var x= document.getElementsByClassName("icon")[i].id;
  var path= "images/"+x+".png";
  document.getElementsByClassName("icon")[i].style.backgroundImage="url("+path+")";
}
for(var i=0;i<document.getElementsByClassName("filter").length;i++)
{
  document.getElementsByClassName("filter")[i].addEventListener("click",filterStart);
}
document.getElementsByClassName("clear")[0].addEventListener("click",clearFilters);

function filterStart(event){
  document.getElementsByClassName("filter-bar")[0].classList.remove("invisible");
  filterArray();
  filtering();
}

function clearFilters(){
    document.location.reload(true);
}

function filtering(){
  for(var x=0;x<document.getElementsByClassName("filters").length;x++){
      var checkFilter=[];
      for(var z=0;z<document.getElementsByClassName("filters")[x].childElementCount;z++){
        checkFilter.push(document.getElementsByClassName("filters")[x].children[z].innerHTML);
      }
      var arr1=checkFilter;
      var arr2= filters;
      const result = arr2.every(val => arr1.includes(val));
      if(!result){
        document.getElementsByClassName("filters")[x].parentElement.classList.add("invisible");
      }
  }
}
function deleteFilter(){
  var toBeDeleted=event.currentTarget.parentElement.innerText;
  for(i=0;i<filters.length;i++){
    if(filters[i]==toBeDeleted){
      filters.splice(i, 1);
      break;
    }
  }
  f--;
  resetfilters();
  filtering();
  if(filters.length==0){
    document.getElementsByClassName("filter-bar")[0].classList.add("invisible");
  }
}
/* DWDM ASSIGNMNET 3
 THURSDAY */

function resetfilters(){
  document.getElementsByClassName("filter-bar")[0].removeChild(event.currentTarget.parentElement);
  for(var x=0;x<document.getElementsByClassName("filters").length;x++){
    document.getElementsByClassName("filters")[x].parentElement.classList.remove("invisible");
  }
}

function filterArray(){
  var i;
  for(i=0;i<filters.length;i++){
    if(filters[i]==event.currentTarget.innerHTML){
      break;
    }
  }
  if(i==filters.length){
    filters[f]=event.currentTarget.innerHTML;
    var para = document.createElement("span");
    para.innerText = filters[f];
    para.classList.add("filter");
    para.classList.add("filtered");
    document.getElementsByClassName("filter-bar")[0].appendChild(para);
    var btn= document.createElement("button");
    btn.classList.add("btn-fil");
    btn.addEventListener("click",deleteFilter);
    btn.innerHTML="<img src='images/icon-remove.png'>";
    document.getElementsByClassName("filter-bar")[0].children[f+1].appendChild(btn);
    f++;
  }
}
