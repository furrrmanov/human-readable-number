module.exports = function toReadable (number) {
 let obj = {
    0:'zero',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen',
  };

  let obj2= {
    1:'ten',2:'twenty',3:'thirty',4:'forty',5:'fifty',6:'sixty',7:'seventy',8:'eighty',9:'ninety',
  }

  let obj3 ={
    0:'ten',1:'eleven',2:'twelve',3:'thirteen',4:'fourteen',5:'fifteen',6:'sixteen',7:'seventeen',8:'eighteen',9:'nineteen'
  }


  let num = number.toString()
  if(num==10){
    return 'ten'
  }
  else if(num==11){
    return 'eleven'
  }
  else if(num==12){
    return 'twelve'
  }
  else if(num==13){
    return 'thirteen'
  }
  else if(num==14){
    return 'fourteen'
  }
  else if(num==15){
    return 'fifteen'
  }
  else if(num==16){
    return 'sixteen'
  }
  else if(num==17){
    return 'seventeen'
  }
  else if(num==18){
    return 'eighteen'
  }
  else if(num==19){
    return 'nineteen'
  }
  else if(num==200){
    return 'two hundred'
  }
  else if(num==300){
    return 'three hundred'
  }
  else if(num==400){
    return 'four hundred'
  }
  else if(num==500){
    return 'five hundred'
  }
  else if(num==600){
    return 'six hundred'
  }
  else if(num==700){
    return 'seven hundred'
  }
  else if(num==800){
    return 'eight hundred'
  }
  else if(num==900){
    return 'nine hundred'
  }
  else if(num==20){
    return 'twenty'
  }
  else if(num==30){
    return 'thirty'
  }
  else if(num==40){
    return 'forty'
  }
  else if(num==50){
    return 'fifty'
  }
  else if(num==100){
    return 'one hundred'
  }
  else if(num==60){
    return 'sixty'
  }
  else if(num==70){
    return 'seventy'
  }
  else if(num==80){
    return 'eighty'
  }
  else if(num==90){
    return 'ninety'
  }

  for(let i of Object.keys(obj)){

    if(num<10){
      return  obj[num]
    }

    if(num>20&&num<100){
      return obj2[num[0]]+' '+obj[num[1]]
    }

    if(num>100&&num<1000&&num[1]==0){
      return obj[num[0]]+' hundred '+obj[num[2]]
    }

    if(num>100&&num<1000&&num[2]==0){
      return obj[num[0]]+' hundred '+obj2[num[1]]
    }

    if(num>100&&num<1000&&num[1]==1){
      return obj[num[0]]+' hundred '+obj3[num[2]]
    }

    if(num>100&&num<1000&&num[1]==1&&num[2]==0){
      return obj[num[0]]+' hundred '+obj2[num[1]]
    }
   
    if(num>100&&num<1000){
      return obj[num[0]]+' hundred '+obj2[num[1]]+' '+obj[num[2]]
    }
    

  }
 

  
  
    
   
  
  
}
