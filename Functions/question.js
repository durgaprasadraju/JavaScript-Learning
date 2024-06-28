const readline =require ('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function askQuestion (query){
    return new Promise((resolve)=> rl.question(query,resolve))
}
async function main(){
    const country = await askQuestion('where were you born')
    console.log(`i was born in ${country}`)
   const name = await askQuestion('what is your name')
   console.log(`my name is ${name}`)
   const age = await askQuestion('what is your age')
   console.log(`my age is ${age}`)
   const movie = await askQuestion('what is your favorite movie')
   console.log(`my favorite movie is ${movie}`)
   const story = await askQuestion('what is your favorite story')
   console.log(`my favorite movie is ${story}`)
   const actor = await askQuestion('who is your favorite actor')
   console.log(`our favorite actor is ${actor}`)
   const food = await askQuestion('what is your favorite food')
   console.log(`my favorite food is ${food}`)
   const year = await askQuestion('when were you born')
   console.log(`i was born in ${year}`)
   const date =await askQuestion('which date were you born')
   console.log(`i was born on ${date}`)
    rl.close()
}
main ()