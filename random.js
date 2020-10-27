const numImagesAvailable = 48;

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

window.onload = function renderGalleryItem(){

  let items = [],
      itemsSmall = [];
  var ranNums = [];

  for(let i=0;i<numImagesAvailable;i++){
    ranNums[i] = i;
  }

  for(let i=1;i<numImagesAvailable+1;i++){
    items[i-1] = "images/foto" + i + ".jpg";
  }

  for(let i=1;i<numImagesAvailable+1;i++){
    itemsSmall[i-1] = "images/foto" + i + "-small.jpg";
  }

  
  ranNums = randOrder(ranNums);

  for(let i=0;i<numImagesAvailable;i++){ 
    var imagem = document.createElement("IMG");
    imagem.setAttribute("class", "image");
    imagem.setAttribute("src", itemsSmall[ranNums[i]]);
    imagem.setAttribute("data-src", items[ranNums[i]]);

    var link = document.createElement("A");
    link.setAttribute("href", items[ranNums[i]])
    link.appendChild(imagem);

    var div = document.createElement("DIV");
    div.setAttribute("class", "lista");
    div.appendChild(link)

    let col1 = document.getElementsByClassName("column-s")[0].offsetHeight;
    let col2 = document.getElementsByClassName("column-s")[1].offsetHeight;
    let col3 = document.getElementsByClassName("column-s")[2].offsetHeight;
    let col4 = document.getElementsByClassName("column-s")[3].offsetHeight;
    

    switch(Math.min(col1, col2, col3, col4)){
      case col1:
        document.getElementsByClassName("column-s")[0].appendChild(div);
        break;
      case col2:
        document.getElementsByClassName("column-s")[1].appendChild(div);
        break;
      case col3:
        document.getElementsByClassName("column-s")[2].appendChild(div);
        break;
      case col4:
        document.getElementsByClassName("column-s")[3].appendChild(div);
        break;
      default:
        window.alert("Erro! :(");
    }

    console.log(col1, col2, col3, col4);
  }
}

