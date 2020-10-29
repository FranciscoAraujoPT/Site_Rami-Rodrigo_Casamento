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

const blur = async () => {
  const items = await renderGalleryItem()
  // do something else here after firstFunction completes
  for(let index=0;index<numImagesAvailable;index++){
    var imagem = document.getElementsByClassName("image")[index];
    for(let i=0;i<numImagesAvailable;i++){
      let data = imagem.getAttribute('data-src');
      if(data.localeCompare(items[i]) == 0){
        imagem.setAttribute("src", data);
        items[i] = items[numImagesAvailable-index];
        console.log(data);
      }
    }
  }
}

async function renderGalleryItem(){

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
  let col1, col2, col3 ,col4;

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

    col1 = document.getElementsByClassName("column-s")[0].scrollHeight;
    col2 = document.getElementsByClassName("column-s")[1].scrollHeight;
    col3 = document.getElementsByClassName("column-s")[2].scrollHeight;
    col4 = document.getElementsByClassName("column-s")[3].scrollHeight;
    

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
    await new Promise(r => setTimeout(r, 50));
  }
  return items;
}

blur();

