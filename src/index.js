module.exports = function getZerosCount(number, base) {
	
	var check = 0;
  	var colich = 0;
	var j = 0;
	
	var count_zero = number;
  	var spare_Base = base;
	
  for (let i = 2; i <= base; i++){
    if (spare_Base % i === 0){
      check = 0;
		
      while (spare_Base % i === 0){
		spare_Base = Math.floor(spare_Base / i);
        check++
        
      };
		
	  console.log('check :'+check);
		
      colich = 0;
      j = number;
      while (j/i > 0)
	  {
        colich += Math.floor(j/i);
        j = Math.floor(j/i);
      };
		var timeVar = Math.floor(colich/check);
		if(count_zero > timeVar ){
			count_zero = timeVar; 
 	}
   }
 }
  return count_zero;
}

