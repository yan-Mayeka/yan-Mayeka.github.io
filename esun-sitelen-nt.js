//Declare varibabables
let PagNum = 0;
let CurPag = document.getElementById('CurPag');
const vlgnd = document.getElementById('vgnd');
const terug = document.getElementById('trg');

//someþing like if pagnum = 1, set page to 1, if pagnum =2 , set page to 2, etc.
/*function vlg(){
        PagNum++;  
}
function trg(){
        PagNum--;
}
*/
//CurPag.src = 'dogtest.png'  html la) onclick="vgnd()"; onclick="trg()"
vlgnd.addEventListener('click', () => {
        PagNum += 1;
        if (PagNum > 23){
        PagNum = 0;
}
        console.log(`CurPag is ${PagNum}`);
        if (PagNum === 0){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 0.png";
}
 else if(PagNum === 1){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 1.png";
}
 else if(PagNum === 2){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 2.png";
}
 else if(PagNum === 3){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 3.png";
}
 else if(PagNum === 4){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 4.png";
}
 if(PagNum === 5){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 5.png";
}
 else if(PagNum === 6){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 6.png";
}
 else if(PagNum === 7){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 7.png";
}
 else if(PagNum === 8){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 8.png";
}
 else if(PagNum === 9){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 9.png";
}
 else if(PagNum === 10){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 10.png";
}
 else if(PagNum === 11){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 11.png";
}
 else if(PagNum === 12){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 12.png";
}
 else if(PagNum === 13){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 13.png";
}
 else if(PagNum === 14){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 14.png";
}
 else if(PagNum === 15){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 15.png";
 }
 else if(PagNum === 16){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 16.png";
}
 else if(PagNum === 17){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 17.png";
}
  else if(PagNum === 18){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 18.png";
}
  else if(PagNum === 19){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 19.png";
}
  else if(PagNum === 20){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 20.png";
}
  else if(PagNum === 21){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 21.png";
}
  else if(PagNum === 22){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 22.png";
}
  else if(PagNum === 23){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 23.png";
}
        document.getElementById('PagNum').textContent = `<${PagNum}>`;
    });
terug.addEventListener('click', () => {
        PagNum -= 1;
        if (PagNum < 0){
        PagNum = 23;
}
        console.log(`CurPag is ${PagNum}`);
        if (PagNum === 0){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 0.png";
}
 else if(PagNum === 1){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 1.png";
}
 else if(PagNum === 2){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 2.png";
}
 else if(PagNum === 3){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 3.png";
}
 else if(PagNum === 4){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 4.png";
}
 if(PagNum === 5){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 5.png";
}
 else if(PagNum === 6){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 6.png";
}
 else if(PagNum === 7){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 7.png";
}
 else if(PagNum === 8){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 8.png";
}
 else if(PagNum === 9){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 9.png";
}
 else if(PagNum === 10){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 10.png";
}
 else if(PagNum === 11){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 11.png";
}
 else if(PagNum === 12){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 12.png";
}
 else if(PagNum === 13){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 13.png";
}
 else if(PagNum === 14){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 14.png";
}
 else if(PagNum === 15){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 15.png";
}
else if(PagNum === 16){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 16.png";
}
 else if(PagNum === 17){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 17.png";
}
  else if(PagNum === 18){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 18.png";
}
  else if(PagNum === 19){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 19.png";
}
  else if(PagNum === 20){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 20.png";
}
  else if(PagNum === 21){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 21.png";
}
  else if(PagNum === 22){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 22.png";
}
  else if(PagNum === 23){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 23.png";
}
        document.getElementById('PagNum').textContent = `<${PagNum}>`;
    });
//ifs
/**if (PagNum === 0){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 0.png";
}
 else if(PagNum === 1){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 1.png";
}
 else if(PagNum === 2){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 2.png";
}
 else if(PagNum === 3){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 3.png";
}
 else if(PagNum === 4){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 4.png";
}
 if(PagNum === 5){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 5.png";
}
 else if(PagNum === 6){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 6.png";
}
 else if(PagNum === 7){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 7.png";
}
 else if(PagNum === 8){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 8.png";
}
 else if(PagNum === 9){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 9.png";
}
 else if(PagNum === 10){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 10.png";
}
 else if(PagNum === 11){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 11.png";
}
 else if(PagNum === 12){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 12.png";
}
 else if(PagNum === 13){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 13.png";
}
 else if(PagNum === 14){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 14.png";
}
 else if(PagNum === 15){
  CurPag.src = "/assests/images/Maya's Conversatie/MC lipu 15.png";
}*/
