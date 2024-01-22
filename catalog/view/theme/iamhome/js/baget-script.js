//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
button2 = document.querySelector(".btn-baget"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions



button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}
button2.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "";
  }
}



const cli1 = document.querySelector('.c-v1');
const cli2 = document.querySelector('.c-v2');
const imgb1 = document.querySelector('.a-v1');
const imgb2 = document.querySelector('.a-v2');
const bagwr = document.querySelector('.baget-wr');
imgb2.style.display = "none";
imgb1.style.display = "block";

cli1.addEventListener('click', () => {
  imgb2.style.display = "none";
  imgb1.style.display = "block";
  bagwr.style.borderImageSource = "url('image/baget.jpeg')"

});

cli2.addEventListener('click', () => {
  imgb1.style.display = "none";
  imgb2.style.display = "block";
  bagwr.style.borderColor = "#000000";
  bagwr.style.borderImageSource = "none"
});


