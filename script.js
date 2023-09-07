let btn=document.getElementsByClassName("fech-btn")
let cardctrg=document.getElementsByClassName("cards-category");
let cards=document.getElementsByClassName("cards");
let ihtml="";


btn[0].addEventListener("click",()=>{
  let xhr=new XMLHttpRequest();
  xhr.open("GET","https://api.codingninjas.in/api/v3/courses",true);
  xhr.onload=()=>{
    if(xhr.status==200){
        // console.log(xhr.response);
        let xhrresponse=JSON.parse(xhr.response) ;
        console.log(xhrresponse.data.course_groups);
        console.log(xhrresponse.data.courses);
        for(item of xhrresponse.data.course_groups ){
            // console.log(contests[item]);
            ihtml+= `<div class="card" style="width: 22rem; .justify-content-center margin-right: 1rem">
            
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
             
            </div>
          </div>`;
        }
        category.innerHTML=ihtml;
         ihtml="";
        for(item of xhrresponse.data.courses ){
           if(item.preview_image_url!=""){
            ihtml+=`
            <div class="card rounded-3 m-2" style="width: 22rem; .justify-content-center margin-right: 1rem">
            
            <img class="abc" src="${item.preview_image_url}";" class="card-img-top" alt="...">
            
            
            <div class="card-body">
              <h5 class="card-title">${ item.title}</h5>
              <div class="d-flex">
              <img id="icon" src="${item.classroom_icon_url}">
              <p class="card-text">${item.level}</p>
              </div>
              <p class="card-text">course description : ${item.brief_intro}</p>
              <i src="${item.classroom_icon_url}"></i>
              <p>Course id :${item.id}</p>
              <p>Is Online Available : ${item.available_online}</p>
              <p>${item.name}</p>
              
            </div>
          </div> `;
           }
            
        }
        cources.innerHTML=ihtml;
    }
  }
  xhr.send();
});