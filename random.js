const numImagesAvailable = 48;
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels


function getGalleryItem(){
    let items = [];
    let j = 0;
    for(let i=1;i<numImagesAvailable+1;i++){
      items[j] = "/images/foto" + i + ".jpg";
      j++;
      items[j] = "/images/foto" + i + "-small.jpg";
      j++;
    }
    return items
}

function renderGalleryItem(){

  let items = [];
  var ranNums = [];

  for(let i=0;i<numImagesAvailable;i++){
    ranNums[i] = i;
  }
  
  ranNums = randOrder(ranNums);
  console.log(ranNums);
  items = getGalleryItem();

  for(let i=0;i<numImagesAvailable;i++){ 
    var imagem = document.createElement("IMG");
    imagem.setAttribute("class", "image");
    imagem.setAttribute("src", items[ranNums[i]]);
    imagem.setAttribute("data-src", items[ranNums[i]]);
    console.log(document.getElementsByClassName("column-s")[0]);
  }
}

function randOrder(array){
  var i = array.length,
      j = 0,
      temp;

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

  }

  return array;
}

renderGalleryItem();