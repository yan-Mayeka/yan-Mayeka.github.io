//Declare varibabables
let PagNum = 0;
let CurPag = document.getElementById('CurPag');
const vlgnd = document.getElementById('vgnd');
const terug = document.getElementById('trg');

//someþing like if pagnum = 1, set page to 1, if pagnum =2 , set page to 2, etc.
//CurPag.src = 'dogtest.png'  html la) onclick="vgnd()"; onclick="trg()"
/*vlgnd.addEventListener('click', function() {
        PagNum++;
    });
terug.addEventListener('click', function() {
        PagNum--;
    });*/
function vlg(){
        PagNum++;
}
function trg(){
        PagNum--;
}
//Over and underflow
if(PagNum < 0){
  PagNum == 0;
}
else if(PagNum > 25){
  PagNum == 25;
}
//ifs
if(PagNum == 0){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 0.png";
}
else if(PagNum == 1){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 1.png";
}
else if(PagNum == 2){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 2.png";
}
else if(PagNum == 3){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 3.png";
}
else if(PagNum == 4){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 4.png";
}
else if(PagNum == 5){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 5.png";
}
else if(PagNum == 6){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 6.png";
}
else if(PagNum == 7){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 7.png";
}
else if(PagNum == 8){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 8.png";
}
else if(PagNum == 9){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 9.png";
}
else if(PagNum == 10){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 10.png";
}
else if(PagNum == 11){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 11.png";
}
else if(PagNum == 12){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 12.png";
}
else if(PagNum == 13){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 13.png";
}
else if(PagNum == 14){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 14.png";
}
else if(PagNum == 15){
  CurPag.src = "/assests/images/Maya's Sweet 16/MS16 lipu nanpa 15.png";
}
