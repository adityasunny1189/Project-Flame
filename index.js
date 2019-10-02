// document.querySelector(".func").addEventListener("click" , a_new_func);

// function flame(z) 
// {
//   switch(z)
//     {
//         case 1:document.querySelector('#friends').style.display = 'flex';
//                 document.querySelector('.close').addEventListener('click',
//                 function() {
//                     document.querySelector('.first').style.display = 'none';
//                 });
//             break;

//         case 2:document.querySelector('#love').style.display = 'flex';
//                document.querySelector('.close').addEventListener('click',
//                 function() {
//                     document.querySelector('.first').style.display = 'none';
//                 });
//              break;

//         case 3:document.querySelector('#affection').style.display = 'flex';
//                 document.querySelector('.close').addEventListener('click',
//                 function() {
//                     document.querySelector('.first').style.display = 'none';
//                 });
//             break;

//         case 4:document.querySelector('#weeding').style.display = 'flex';
//                 document.querySelector('.close').addEventListener('click',
//                 function() {
//                     document.querySelector('.first').style.display = 'none';
//                 });
//             break;

//         case 5:document.querySelector('#enemy').style.display = 'flex';
//                 document.querySelector('.close').addEventListener('click',
//                 function() {
//                     document.querySelector('.first').style.display = 'none';
//                 });
//             break;

//         default:alert("No Relation\n");
//     }
// }

// function a_new_func() 
// {
//     var name1 = document.getElementById('Name1').value;
//     var name2 = document.getElementById('Name2').value;
    
//     var x = name1.length;
//     var y = name2.length;
//     var z = x + y;
//     var i = 0;
//     var j = 0;
//     for(i = 0 ; i < x ; i++)
//     {
//         for(j = 0 ; j < y ; j++)
//         {
//             if(name1[i] === name2[j])
//             {
//                 name1[i] = name2[j] = ' ';
//                 z = z - 2;
//             }
//         }
//     }
//     if(z <= 5)
//     {
//         flame(z);
//     }
    
//     else if(z > 5)
//     {
//         z = z % 5;
//         flame(z);
//     }
// }



// function a_new_func() 
// {
//     a = scrollY;
//     if(a > 150)
//     {
//         document.querySelector('button').addEventListener("click",
//         function() {
//             document.querySelector('.first').style.display = 'flex';
//         });


//         document.querySelector('.close').addEventListener('click',
//         function() {
//             document.querySelector('.first').style.display = 'none';
//         })
//     }
//     else
//     {
//         console.log(a);
//     }
// }

for(var i = 0 ; i < 5 ; i++)
{
    document.querySelector(".func").addEventListener("click" , function () 
    {
        var name1 = document.getElementById('Name1').value;
        var name2 = document.getElementById('Name2').value;

        var x = name1.length;
        var y = name2.length;
        var z = x + y;
        var i = 0;
        var j = 0;
        for(i = 0 ; i < x ; i++)
        {
            for(j = 0 ; j < y ; j++)
            {
                if(name1[i] === name2[j])
                {
                    name1[i] = name2[j] = ' ';
                    z = z - 2;
                }
            }
        }
        if(z <= 5)
            {
                z = z;
            }
            
        else if(z > 5)
            {
                z = z % 5;
            }
        switch(z)
        {
            case 1:document.querySelector('#friends').style.display = 'flex';
                    document.querySelector('.close').addEventListener('click',
                    function() {
                        document.querySelector('.first').style.display = 'none';
                    });
                break;

            case 2:document.querySelector('#love').style.display = 'flex';
                document.querySelector('.close').addEventListener('click',
                    function() {
                        document.querySelector('.first').style.display = 'none';
                    });
                break;

            case 3:document.querySelector('#affection').style.display = 'flex';
                    document.querySelector('.close').addEventListener('click',
                    function() {
                        document.querySelector('.first').style.display = 'none';
                    });
                break;

            case 4:document.querySelector('#weeding').style.display = 'flex';
                    document.querySelector('.close').addEventListener('click',
                    function() {
                        document.querySelector('.first').style.display = 'none';
                    });
                break;

            case 5:document.querySelector('#enemy').style.display = 'flex';
                    document.querySelector('.close').addEventListener('click',
                    function() {
                        document.querySelector('.first').style.display = 'none';
                    });
                break;

            default:alert("No Relation\n");
        }
    });
}