module.exports = function toReadable (number) {
  let OneTwelve=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let TwenteeNintee=['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let arrayTwenteeNintee=[]
  let arrayOneHundredNine=[]
     if (number<=19) {
      return OneTwelve[number]
     } else if( number>19 && number<100){
      arrayTwenteeNintee= String(number).split('')
      if(arrayTwenteeNintee[1]==='0'){
        return `${TwenteeNintee[arrayTwenteeNintee[0]-2]}`
      }else{
        return `${TwenteeNintee[arrayTwenteeNintee[0]-2]} ${OneTwelve[arrayTwenteeNintee[1]]}`
      }
     }else{
       arrayOneHundredNine=String(number).split('')
       if(number%100==0){
         return `${OneTwelve[arrayOneHundredNine[0]]} hundred`
       }else if (arrayOneHundredNine[1]=='0' || arrayOneHundredNine[1]=='1') {
         return  `${OneTwelve[arrayOneHundredNine[0]]} hundred ${OneTwelve[+(arrayOneHundredNine[1] + arrayOneHundredNine[2])]}`
       }else{
         if (arrayOneHundredNine[2]==0){
           return `${OneTwelve[arrayOneHundredNine[0]]} hundred ${TwenteeNintee[arrayOneHundredNine[1]-2]}`
         }else{
          return `${OneTwelve[arrayOneHundredNine[0]]} hundred ${TwenteeNintee[arrayOneHundredNine[1]-2]} ${OneTwelve[arrayOneHundredNine[2]]}`
         }
       }
     }
}
