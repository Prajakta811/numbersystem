const numbers=[3,7,2,15,9,20,5,14,12,1,8,11,6,19,4,10,17,13,16,18]
let evenNumber;
let oddNumber;
for(let i=1;i<=numbers.length;i++)
{
    if(numbers[i]%2==0)
    {
        evenNumber=numbers[i]; 
    }
    else{
        oddNumber=numbers[i];
    }
    console.log("Even Numbers "+evenNumber);
    console.log("Odd Numbers "+oddNumber);

}