const loadLesson=()=>{
    
    fetch ("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then((json) =>displayLesson(json.data));

}; 

const displayLesson=(lessons)=>{
//   1. get the contianer
const levelContianer = document.getElementById("level-Container");
levelContianer.innerHTML="";
//   2. get into every lessons
for (let lesson of lessons){
    //      3. create element
    const btnDiv=document.createElement("div")
btnDiv.innerHTML= `<button class="btn btn-outline btn-primary"> <i class="fa-solid fa-book-open"></i> Lesson- ${lesson.level_no} </button>`
//      4. append into container
levelContianer.append(btnDiv);

}

   
};
loadLesson();