// let a=[000,111,222,333,444,555];
// console.table(a);
// for(let i=0 ; i<a.length; ++i)
// {
//     a[i]=a[i]+10;
// }
// console.table(a);
// quản lý số điện thoại
//  tạo 1 chương trình cho phép người dùng thêm, bớt, sửa, đọc số điện thoại
// nếu người dùng  nhập "C" => tạo mới 1 element
// nếu người dùng  nhập "D" => hỏi người dùng chỉ số index muốn xóa => xoa no
// nếu người dùng  nhập "U" => cập nhật 1 phần tử do người dùng nhập index
// nếu người dùng  nhập "R" => Cho người dùng nhập chỉ số INDEX, update nó.
/*
 let phoneNumber=['0123456789','0987654321','0147258369','0963258741','0214578963'];
 console.table(phoneNumber);
 alert(`C or D or U or R`);
 let key=prompt(`Nhập key: `)
 switch (key) {
    case 'C':
            let add=Number(prompt(`Số mới là: `));
            phoneNumber.unshift(add);
            console.table(phoneNumber);
            break;
    case 'D':
            console.table(phoneNumber);
            let index=Number(prompt(`Nhập index số muốn xóa: `));
            if(index <0 || index >= phoneNumber.length)
            {
                 alert(`Nhập lại index!`);
            }
            else
            {
                 phoneNumber.splice(index,1);
            }
            console.table(phoneNumber);
            break;
    case 'U':
            console.table(phoneNumber);
            let indexx=Number(prompt(`Nhập index số muốn sửa: `));
            if(indexx <0 || indexx >= phoneNumber.length)
            {
                alert(`Nhập lại index!`);
            }
            else
            {
                 phoneNumber[indexx]=Number(prompt(`Số sửa là: `))
                 console.table(phoneNumber);
            }
             break;
    case 'R':
            let read = Number(prompt(`Nhập index số muốn xem: `))
            console.log(phoneNumber[read]);
             break;
     default:
         break;
}
*/
// let phoneNumber=[123456789,987654321];

// let input=prompt(`Nhập chức năng: `);

// if(input==="C")
// {
//     let add=Number(prompt(`Số mới là: `));
//     phoneNumber.unshift(add);
//     console.table(phoneNumber);
// }
// else if(input==="D")
// {
//     console.table(phoneNumber);
//     let index=Number(prompt(`Nhập index số muốn xóa: `));
//     if(index <0 || index >= phoneNumber.length)
//     {
//         alert(`Nhập lại index!`);
//     }
//     else
//     {
//         phoneNumber.splice(index,1);
//     }
//     console.table(phoneNumber);
// }
// else if(input==="U")
// {
//     console.table(phoneNumber);
//     let indexx=Number(prompt(`Nhập index số muốn sửa: `));
//     if(indexx <0 || indexx >= phoneNumber.length)
//     {
//         alert(`Nhập lại index!`);
//     }
//     else
//     {
//         phoneNumber[indexx]=Number(prompt(`Số sửa là: `))
//         console.table(phoneNumber);
//     }
// }
// else if(input==="R")
// {
//     let read = Number(prompt(`Nhập index số muốn xem: `))
//     console.log(phoneNumber[read]);
// }
// else
// {
//     alert(`C/D/U/R`);
// }

/*let phoneNumber=[123456789,987654321,147258369,963258741,214578963];
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