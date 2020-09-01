// Search perticular element in string

var str = "Perplexahidron";
var chr = "x";
var val = str.search(chr);
if(val>=0)
{
    console.log("charecter is present in string at index value "+val)
}
else
{
    console.log("Charecter is not present in the string")  
}

//--------------------------------------------------------------------------------

// cocnvert mintues inti seconds

let min = 25
let sec = min*60;
console.log("conversion of "+min+" minutes into seconds is "+sec+" seconds");
//---------------------------------------------------------------------------------

//Program to search for a element in a array of strings

var s = "Sun rises in east and sets in west"
var elem = "rises"
let x=0;
for(let i =0;i<s.length;i++)
{ 
    let c=0
    var word=""
    if(s[i]==elem[0])
    {   
        for(let j=i;j<s.length;j++)
        {
            if(s[j]==" ")
            {
                break;
            }
            
            word=word+s[j];
            
        }
        for(let k=0;k<elem.length;k++)
        {
            if(word[k]==elem[k])
            {
                c++;
            }
        }
    }
    if(c==elem.length)
    {
        console.log("word is present in the string")
        x++;
        break;
        
    }
}
if(x==0)
{
    console.log("word is not present in sentence")
}
//-----------------------------------------------------------------------------------------------

//Program to display only elements containing 'a' in them from a array

var arr= ["Shubham", "Rahul" ,"Richa", "Vivek", "Vipin"]
let c=0
for(let i=0;i<arr.length;i++)
{
    c=0
    var elem= arr[i];
    for(let j=0;j<elem.length;j++)
    {
        if(elem[j]=="a"||elem[j]=="A")
        {
            c++
        }
    }
    if(c>0)
    {
        console.log("Element with a in them :"+elem)
    }
}

//--------------------------------------------------------------------------------------------
//Print an array in reverse order

var arr2= ["Hello", "World", "Lets", "Upgrade", "Ourselves"]
console.log("Array in reverse order :")
for(let i=(arr2.length-1);i>=0;i--)
{
    console.log(arr2[i])
}