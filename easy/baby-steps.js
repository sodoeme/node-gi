function bby(x){
   sum=0
  for(i=2; i<x.length; i++)
  sum+=Number(x[i])

  console.log(sum)
}

bby(process.argv)