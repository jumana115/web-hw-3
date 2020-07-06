function q1(){
let name = document.getElementById("yourname").value;

let age = document.getElementById("yourage").value;
let work =document.getElementById("yourex").value;
let lang =["لغات البرمجية " ,
" 1_ html","2_css","3_javascript","4_php","5_swift","6_java",];
console.log (lang);               
let lan =  document.getElementById("yourlan1").value;
let lan2 = document.getElementById("yourlan2").value;

if( age>25 && age<40 && work>3)
{
     console.log(name + " " + "نهانيا لقد قبلت ")
     alert=(name + " " + "نهانيا لقد قبلت ")
}
else 
   console.log("أنت لست رائعا للأنضمام لنا ")
   alert=("أنت لست رائعا للأنضمام لنا ")
};
q1(); 



//    المهمة  الثانية 
let hots =[40,45,48.50,55,59,63,37,];
hots.forEach(hot);
function hot(value){
    console.log(value);
}


// تحويل من f إلي c
let ftemp =[68 , 77, 86 , 95 , 59 ,41 ];
console.log(ftemp + " هذي درجات بالمقياس فهرنهايت ");
let c = ftemp.map(change);
console.log(c + "" +"هذي الدرجات بالسيليزي ");
function change(value) {
  return (value- 32)*(5/9);
}



let ctemp=[30,35,39,40,45,49,50]
console.log(ctemp);
let over40 =ctemp.filter(cc);
console.log(40 + "" + "القيمة المبدئية = ")
// over قيمة الفلتر 
console.log("---------------------");
console.log(over40)
console.log("---------------------");
function cc(value){ 
    return value > 40 ;}


function last(){
 // درجات بالفهرنهايت
 console.log(ftemp);  
 //   القيمة المبدئية بفهرنهايت
  console.log ( 167 +"القيمة المبدئية بالفهرنهايت ");
  let overc =ftemp.filter(lastf)
  console.log(overc)
  function lastf(value){
    return value > (167 - 32) * (5/9);
 }}
    last();


 
 let arr = [] ;
function grade(){
    let quize  =parseInt( document.getElementById("q").value);
  
   let mid = parseInt
     (document.getElementById("midterm").value);
   
      let final = parseInt(
      document.getElementById("fainalexam").value);
   
       let oral =  parseInt(
       document.getElementById("oralgrade").value);
 ;    
     let t = quize + mid + final +oral ;
     
    console.log ( t)


    let letterGrades =  ["A","B","C","D","F"];
    if(t >= 90){
       letterGrades =  letterGrades[0];
       
           
       } else if(t >= 80 && t < 90) {
        letterGrades =  letterGrades[1];
       } else if(t >= 70 &&  t < 80) {
        letterGrades =  letterGrades[2];
       } else if(t>= 60 &&  t < 70) {
        letterGrades =  letterGrades[3];
         } else {
          letterGrades =  letterGrades[4];
       }
       
       console.log (letterGrades );
       document.getElementById('letter').innerHTML= letterGrades ;
       document.getElementById('number').innerHTML= t ;
    }
  
        