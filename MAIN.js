onst freq=(string)=>{
  let frequency={}
  for(const ele of string){
    if(ele in frequency)
    {
      frequency[ele]=frequency[ele]+1
    }
    else{
      frequency[ele]=1
    }
  }
  return frequency
}
let string = 'haha i am good'
console.log(freq(string))
