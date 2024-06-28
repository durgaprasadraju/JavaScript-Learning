const readline =require ('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function askQuestion (query){
    return new Promise((resolve)=> rl.question(query,resolve))
}
async function main(){
    const question = await askQuestion('do you want to tadays know date');
    
let options = { 
    timeZone: 'Asia/Kolkata', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric',
    hour12: true 
  };
  let now = new Date() 
   let formattedDate = now.toLocaleString('en-IN', options);
console.log(formattedDate)
}
main()