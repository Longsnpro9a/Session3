/*
let phoneNumber=[123456789,987654321,147258369,963258741,214578963];
while (true) {
    let input=prompt(` C->Created\n U->Updated\n D->Delete\n R->Read\n E->Exit`);
if(input==="C")
{
    let add=Number(prompt(`Số mới là: `));
    phoneNumber.unshift(add);
    alert(phoneNumber);
}
else if(input==="D")
{
    alert(phoneNumber);
    let index=Number(prompt(`Nhập index số muốn xóa: `));
if(index <0 || index >= phoneNumber.length)
    {
        alert(`Nhập lại index!`);
    }
else
    {
        phoneNumber.splice(index,1);
    }
    alert(phoneNumber);
}
else if(input==="U")
{
    alert(phoneNumber);
    let indexx=Number(prompt(`Nhập index số muốn sửa: `));
if(indexx <0 || indexx >= phoneNumber.length)
    {
        alert(`Nhập lại index!`);
    }
else
    {
        phoneNumber[indexx]=Number(prompt(`Số sửa là: `))
        alert(phoneNumber);
    }
}
else if(input==="R")
{
    let read = Number(prompt(`Nhập index số muốn xem: `))
    alert(phoneNumber[read]);
}
else if(input==="E")
{
    break;
}
else
{
    alert(`C/D/U/R/E`)
}
}
*/


//---- Bài 1: Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users.
/*
let array=prompt(`Nhập dãy số cách nhau bởi dấu phẩy: `);
arrayNumber=array.split(',');
//console.log(arrayNumber);
let sum=0;
for(let i=0; i<arrayNumber.length; ++i)
{
arrayNumber[i]=Number(arrayNumber[i]);
sum+=arrayNumber[i];
}
console.log(arrayNumber);
alert(`Tổng của dãy số vừa nhập là: ${sum}`);
*/


//---- Bài 2:
/*
let array=prompt(`Nhập dãy số cách nhau bởi dấu phẩy: `);
arrayNumber=array.split(',');
//console.log(arrayNumber);
let sum=Number(arrayNumber[0]);
for(let i=0; i<arrayNumber.length; ++i)
{
arrayNumber[i]=Number(arrayNumber[i]);
if(sum>arrayNumber[i])
{
    sum = arrayNumber[i];
}
}
console.log(arrayNumber);
alert(`Số nhỏ nhất của dãy số vừa nhập là: ${sum}`);
*/


//---- Bài 3:
/*
const array = [45,-9,10,99,55,-87];
console.table(array);
let checkNumber = Number(prompt(`Nhập số muốn kiểm tra: `));
sum=0;
for(let i=0; i<array.length; ++i)
{
    if(checkNumber==array[i])
    {
        alert(`${checkNumber} có trong mảng ở vị trí số ${i}`);
        ++sum;
        break;
    }
}
if(sum==0)
{
    alert(`${checkNumber} không có trong mảng !`)
}
*/


//---- Bài 4:
/*
//---- 4.1)Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
//---- 4.2)At the end of each month, you have to choose one and only one sheep 
           to shear and thus you want to choose the biggest one to maximize your profit.
           Add scripts to search for the biggest sheep in your list:
//---- 4.3)When your biggest sheer, its size will return to the default size
//---- 4.4)In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
//---- 4.5)Let’s do this for 4 months (or as long as you want)
//---- 4.6)After day by day shearing sheep, you became bored.
           You want to sell your flock to travel the world. 
           In order to have fair trade, you must now calculate 
           the total size of your sheep and then the expected money 
           you can get from selling your flock, before going to the market. 
           Write a program to calculate the total size of your sheep 
           as well as the money you would have. Expected console output:
*/

/*
let sheepSize=[5,10,15,20,50,25,30,45];

console.log(`Hello, my name is Thành Long and here is my sheep sizes:
${sheepSize.join(' ')}`);

console.log(`\nNow mybiggest sheep has size ${Math.max.apply(null, sheepSize)}, let's shave it !`);
let sheepSize1=sheepSize.splice(sheepSize.indexOf(Math.max.apply(null, sheepSize)),1);

console.log(`\nAfter shearing, here is my flock:
${sheepSize.join(' ')}`);

for(let i=0;i<sheepSize.length;++i)
{
    sheepSize[i]+=50;
}

console.log(`\nMONTH 1
One month has, passed, my sheeps have grown, here are their sizes
${sheepSize.join(' ')}`);

console.log(`\nNow mybiggest sheep has size ${Math.max.apply(null, sheepSize)}, let's shave it !`);
let sheepSize2=sheepSize.splice(sheepSize.indexOf(Math.max.apply(null, sheepSize)),1);

console.log(`\nAfter shearing, here is my flock:
${sheepSize.join(' ')}`);
for(let i=0;i<sheepSize.length;++i)
{
    sheepSize[i]+=50;
}

console.log(`\nMONTH 2
One month has, passed, my sheeps have grown, here are their sizes
${sheepSize.join(' ')}`);

console.log(`\nNow mybiggest sheep has size ${Math.max.apply(null, sheepSize)}, let's shave it !`);
let sheepSize3=sheepSize.splice(sheepSize.indexOf(Math.max.apply(null, sheepSize)),1);

console.log(`\nAfter shearing, here is my flock:
${sheepSize.join(' ')}`);
for(let i=0;i<sheepSize.length;++i)
{
    sheepSize[i]+=50;
}

console.log(`\nMONTH 3
One month has, passed, my sheeps have grown, here are their sizes
${sheepSize.join(' ')}`);

let sum=0;
for(let i=0;i<sheepSize.length;++i)
{
    sum+=sheepSize[i];
}
console.log(`\nMy flock has size in total: ${sum}
I would get ${sum} * 99$ = ${sum*99}`);
*/


//---- Bài 5:
/*
let array = prompt(`Hãy nhập một chuỗi tên cách nhau bởi dấu ',' :`);
let newArray = array.split(',');
let nameArray = [];
for(let i=0; i<newArray.length; ++i)
{
    newArray[i]=`<${newArray[i]}>`;
    nameArray.push(newArray[i]);
};
alert(`${array} => ${nameArray}`);
*/


//---- Bài 6:
/*
let array =prompt(`Hãy nhập một dãy số cách nhau bởi dấu ',' :`);
let newArray = array.split(',');
let numberArray = [];
for(let i=0; i<newArray.length; ++i)
{
    if(newArray[i]%2!=0)
    {
        numberArray.push(newArray[i]);
    }
}
alert(`${array} => ${numberArray}`);
*/