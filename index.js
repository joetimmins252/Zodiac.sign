var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function getZodiacsign(day, month) {
 	


	var ZSigns = (
		'capricorn', 
		'aquarious', 
		'pices', 
		'aries', 
		'taurus', 
		'gemini',
		'cancer',
		'leo',
		'virgo',
		'libra',
		'scorpio',
		'Sagittarius' 
)

					if(month == 1 && day <= 20) {
						return ZSigns[0]
					}
							
					else if(month == 1 && day > 20) {
						return ZSigns[1]
					}

				

					if(month == 2 && day <= 19) {
						return ZSigns[1]
					}
					else if(month == 2 && day > 19) {
						return ZSigns[2]
					}
				
	
					if(month == 3 && day < 21) {
						return ZSigns[2]
					}
					else if(month == 3 && day > 21) {
						return ZSigns[3]
					}
				
					if(month == 4 && day <= 20) { 
						return ZSigns[3]
					}
					
					else if(month == 4 && day > 20) {
						return ZSigns[4]
					}
				

					if(month == 5 && day < 21) {
						return ZSigns[4]
					}
					
					else if(month == 5 && day >= 21) {
						return ZSigns[5]
					}
				
	
					if( month == 6 && day < 21) {
						return ZSigns[5]
					}
					else if (month == 6 && day > 21) {
						return ZSigns[6]
					}
				

					if( month == 7 && day <= 23) {
						return ZSigns[6]
					}
					else if (month == 7 && day > 23) {
						return ZSigns[7]
					}
				

					if(month == 8 && day < 23) {
						return ZSigns[7]
					}
					else if(month == 8 && day >= 23) {
						return ZSigns[8]
					}
			
 
					if(month == 9 && day <= 23) {
						return ZSigns[8]
					}
					else if (month == 9 && day > 23) {
						return ZSigns[9]
					}
				
 
					if( month == 10 && day < 23) {
						return ZSigns[9]
					}
					else if (month == 10 && day > 23) {
						return ZSigns[10]
					}
				

					if(month == 12 && day <= 22) {
						return ZSigns[10]
					}
					else if (month == 11 && day > 22) {
						return ZSigns[11]
					}
				
	
					if(month == 12 && day < 22) {
						return ZSigns[11]
					}
					else if (month == 12 && day > 22) {
						return ZSigns[0]
					}

				}
				
