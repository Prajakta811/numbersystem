,const numbers=[19,23,4,16,28,15,31,8,29,14,6,35,2,11,17,5,9,27,12,30]
let count=0;
let primArray=[]
for( let i=0;i<numbers.length;i++)
{ bag="";
  for(let j=1;j<=numbers.length;j++)
    if(number[i]%j==0)
    {
        count++;
        //bag+=number[i];
    }
}
if (count==2)
{ bag+=number[i];
    console.log("Prime Numbers "+bag)
     primArray.push(number[i]);
}
let max=-Infinity;
for(let i=0;i< primArray.length;i++)
{
   if(primArray[i]>max) 
   {
    max=primArray[i];
   }
}
console.log(max);

let sum=0;
for(let j=0;j< primArray.length;j++)
{
    sum+=primArray[j];
}
console.log(sum);
