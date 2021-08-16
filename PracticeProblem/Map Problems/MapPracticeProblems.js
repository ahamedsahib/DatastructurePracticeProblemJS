let maxcount=0;
var diceMapCount=new Map();
let diceRollCount=1;
while(maxcount<10)
{
    //get random roll dice number
    let dice=Math.floor(Math.random()*6)+1;
    //Check whether dict has dice
    if(diceMapCount.has(dice))
    {
        diceRollCount=diceMapCount.get(dice)+1;
    }
    //Set vale to dictionary
    diceMapCount.set(dice,diceRollCount);
    maxcount=diceRollCount;
}
console.log(diceMapCount);
var diceRollList = Array.from(diceMapCount.values());
var keys = Array.from(diceMapCount.keys());
//e)find minimum and maximum times of each die value rolled
//var max = Math.max(...diceRollList); because we know one that reach count 10 will be the maximum
var min = Math.min(...diceRollList);
console.log(`The maximum num of times die rolled number is ${(keys[diceRollList.indexOf(10)])}`);
console.log(`The minimum num of times die rolled number is ${(keys[diceRollList.indexOf(min)])}`);

//UC2
var birthDayMonthMap = new Map();
function BirthMonth()
{
    for(let i =1;i<=50;i++)
    {
        //Generate the random number between 1-12
        var month = Math.floor(Math.random()*12)+1;
        value = ' ';
        //checking the month is already present or not
        if(birthDayMonthMap.has(month))
        {
        value =birthDayMonthMap.get(month);//get all value present on the month
        }
        value += i + "," ;//concat with new person 
        birthDayMonthMap.set(month,value);//add the value to dictionary
    }
    //print the map 
    for(let [key,value] of birthDayMonthMap)
    {
        console.log(`Individuals birth day on Month ${key} : ${value}`);
    } 
}
BirthMonth();
