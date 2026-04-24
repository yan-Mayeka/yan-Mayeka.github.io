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
//CurPag.src = 'dogtest'  html la) onclick="vgnd()"; onclick="trg()"
vlgnd.addEventListener('click', () => {
        PagNum += 1;
        if (PagNum > 15){
        PagNum = 0;
}
        console.log(`CurPag is ${PagNum}`);
        if (PagNum === 0){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg";
}
 else if(PagNum === 1){
  CurPag.src = "/assests/images/lipUntitled/tonsi2.jpg";
}
 else if(PagNum === 2){
  CurPag.src = "/assests/images/lipUntitled/tonsi3.jpg";
}
 else if(PagNum === 3){
  CurPag.src = "/assests/images/lipUntitled/tonsi4.jpg";
}
 else if(PagNum === 4){
  CurPag.src = "/assests/images/lipUntitled/tonsi5.jpg";
}
 if(PagNum === 5){
  CurPag.src = "/assests/images/lipUntitled/tonsi6.jpg";
}
 else if(PagNum === 6){
  CurPag.src = "/assests/images/lipUntitled/tonsi7.jpg";
}
 else if(PagNum === 7){
  CurPag.src = "/assests/images/lipUntitled/tonsi8.jpg";
}
 else if(PagNum === 8){
  CurPag.src = "/assests/images/lipUntitled/tonsi9.jpg";
}
 else if(PagNum === 9){
  CurPag.src = "/assests/images/lipUntitled/tonsi10.jpg";
}
 else if(PagNum === 10){
  CurPag.src = "/assests/images/lipUntitled/tonsi11.jpg";
}
 else if(PagNum === 11){
  CurPag.src = "/assests/images/lipUntitled/tonsi12.jpg";
}
 else if(PagNum === 12){
  CurPag.src = "/assests/images/lipUntitled/tonsi13.jpg";
}
 else if(PagNum === 13){
  CurPag.src = "/assests/images/lipUntitled/tonsi14.jpg";
}
 else if(PagNum === 14){
  CurPag.src = "/assests/images/lipUntitled/tonsi15.jpg";
}
 else if(PagNum === 15){
  CurPag.src = "/assests/images/lipUntitled/tonsi16.jpg";
}
        document.getElementById('PagNum').textContent = `<${PagNum}>`;
    });
terug.addEventListener('click', () => {
        PagNum -= 1;
        if (PagNum < 0){
        PagNum = 15;
}
        console.log(`CurPag is ${PagNum}`);
        if (PagNum === 0){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg";
}
 else if(PagNum === 1){
  CurPag.src = "/assests/images/lipUntitled/tonsi2.jpg";
}
 else if(PagNum === 2){
  CurPag.src = "/assests/images/lipUntitled/tonsi3.jpg";
}
 else if(PagNum === 3){
  CurPag.src = "/assests/images/lipUntitled/tonsi4.jpg";
}
 else if(PagNum === 4){
  CurPag.src = "/assests/images/lipUntitled/tonsi5.jpg";
}
 if(PagNum === 5){
  CurPag.src = "/assests/images/lipUntitled/tonsi6.jpg";
}
 else if(PagNum === 6){
  CurPag.src = "/assests/images/lipUntitled/tonsi7.jpg";
}
 else if(PagNum === 7){
  CurPag.src = "/assests/images/lipUntitled/tonsi8.jpg";
}
 else if(PagNum === 8){
  CurPag.src = "/assests/images/lipUntitled/tonsi9.jpg";
}
 else if(PagNum === 9){
  CurPag.src = "/assests/images/lipUntitled/tonsi10.jpg";
}
 else if(PagNum === 10){
  CurPag.src = "/assests/images/lipUntitled/tonsi11.jpg";
}
 else if(PagNum === 11){
  CurPag.src = "/assests/images/lipUntitled/tonsi12.jpg";
}
 else if(PagNum === 12){
  CurPag.src = "/assests/images/lipUntitled/tonsi13.jpg";
}
 else if(PagNum === 13){
  CurPag.src = "/assests/images/lipUntitled/tonsi14.jpg";
}
 else if(PagNum === 14){
  CurPag.src = "/assests/images/lipUntitled/tonsi15.jpg";
}
 else if(PagNum === 15){
  CurPag.src = "/assests/images/lipUntitled/tonsi16.jpg";
}
        document.getElementById('PagNum').textContent = `<${PagNum}>`;
    });
//ifs
/**if (PagNum === 0){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 0";
}
 else if(PagNum === 1){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 1";
}
 else if(PagNum === 2){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 2";
}
 else if(PagNum === 3){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 3";
}
 else if(PagNum === 4){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 4";
}
 if(PagNum === 5){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 5";
}
 else if(PagNum === 6){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 6";
}
 else if(PagNum === 7){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 7";
}
 else if(PagNum === 8){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 8";
}
 else if(PagNum === 9){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 9";
}
 else if(PagNum === 10){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 10";
}
 else if(PagNum === 11){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 11";
}
 else if(PagNum === 12){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 12";
}
 else if(PagNum === 13){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 13";
}
 else if(PagNum === 14){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 14";
}
 else if(PagNum === 15){
  CurPag.src = "/assests/images/lipUntitled/tonsi1.jpg 15";
}*/
