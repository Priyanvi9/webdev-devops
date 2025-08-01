// class Rectangle{
//     constructor(height,width,color){
//         this.height = height;
//         this.width= width;
//         this.color= color;
//     }
//     area(){
//         const area = this.width*this.height;
//         return area;
//     }
//     print(){
//         console.log(`Painting with color $(this.color)`);
        
//     }
// }
// const rect = new Rectangle(5,10);
// const area = rect.area();
// console.log(area);


// let d = new Date();
// console.log(d.getUTCFullYear());

// function callback(){
//     console.log("Hello,sometime has passed!!");
// }
// setTimeout(callback,15000)


function promisecallback(resolve){
    setTimeout(resolve,3000);
}
function main(){
    console.log("Hiii");
}
promisecallback(main);