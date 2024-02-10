

function Calculate () {
  let dataOfX = document.getElementById('X');
let errorOfX = document.getElementById('X_error');
let dataOfY = document.getElementById('Y');
let errorOfY = document.getElementById('Y_error');
let arrOfX = []
let arrOfY = []
let sOfX=0,sOfY=0,sX2=0,sY2=0,sXY=0,n=0;
  if(dataOfX.value.trim().length){
    arrOfX = dataOfX.value.replaceAll(' ','').split(',')
  } else {
    errorOfX.innerHTML = "plese eneter valid input"
  }

  for (let index = 0; index < arrOfX.length; index++) {
    if (arrOfX[index].length === 0) {
      arrOfX[index] = 0
    } else {
      arrOfX[index] = parseInt(arrOfX[index])
    }
  }
  console.log(arrOfX);

  if(dataOfY.value.trim().length){
    arrOfY = dataOfY.value.replaceAll(' ','').split(',')
  } else {
    errorOfY.innerHTML = "plese eneter valid input"
  }

  for (let index = 0; index < arrOfY.length; index++) {
    if (arrOfY[index].length === 0) {
      arrOfY[index] = 0
    } else {
      arrOfY[index] = parseInt(arrOfY[index])
    }
  }
  console.log(arrOfY);

  //calculating the corelation coefficient

  (arrOfX.length >= arrOfY.length) ? n = arrOfX.length : n = arrOfY.length;

  for (let i = 0; i < arrOfX.length; i++) {
    sOfX+=arrOfX[i];
    sOfY+=arrOfY[i];
    sX2+=(arrOfX[i]*arrOfX[i]);
    sY2+=(arrOfY[i]*arrOfY[i]);
    sXY+=(arrOfX[i]*arrOfY[i]);
  }
  console.log(sOfX);
  console.log(sOfY);
  console.log(sX2);
  console.log(sY2);
  console.log(sXY);

  let co_rel_efficient= ( sXY - (( sOfX * sOfY ) / n) ) / ( (Math.sqrt( sX2 - ((sOfX * sOfX) / n) )) * (Math.sqrt(sY2 - ((sOfY*sOfY) / n) )));

  console.log(co_rel_efficient.toFixed(4));

  document.getElementById("Output").innerHTML = "Karl prearson's Co-Relation Co-Efficient: " + co_rel_efficient.toFixed(4);
}