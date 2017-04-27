var today = new Date();
var signs_zod = ["Capricorn", "Aguarius", "Pisces", "Aries", 
"taurus", "Gemini", "cancer", "leo", "Virgo", "Libra", "Scorpio", 
"Sagittarius" ];

var day = today.getDate();
var month = today.getMonth();
var zodiacsign = "";
switch(month)

{
	case 0: {//January
					if(day < 20)
							zodiacsign = signs_zod[0];
					else
							zodiacsign = signs_zod[1];
				}break;
	case 1: {//February
					if(day < 19)
							zodiacsign = signs_zod[1];
					else
							zodiacsign = signs_zod[2];
				}break;
	case 2: {//March
					if(day < 21)
							zodiacsign = signs_zod[2];
					else
							zodiacsign = signs_zod[3];
				}break;
	case 3:{//April
					if(day < 20)
							zodiacsign = signs_zod[3];
					else
							zodiacsign = signs_zod[4];
				}break;
	case 4:{//May
					if(day < 21)
							zodiacsign = signs_zod[4];
					else
							zodiacsign = signs_zod[5];
				}break;
	case 5:{//June
					if(day < 21)
							zodiacsign = signs_zod[5];
					else
							zodiacsign = signs_zod[6];
				}break;
	case 6:{//July
					if(day < 23)
							zodiacsign = signs_zod[6];
					else
							zodiacsign = signs_zod[7];
				}break;
	case 7:{//August 
					if(day < 23)
							zodiacsign = signs_zod[7];
					else
							zodiacsign = signs_zod[8];
				}break;
	case 8:{//September 
					if(day < 23)
							zodiacsign = signs_zod[8];
					else
							zodiacsign = signs_zod[9];
				}break;
	case 9:{//October 
					if(day < 23)
							zodiacsign = signs_zod[9];
					else
							zodiacsign = signs_zod[10];
				}break;
	case 10:{//November 
					if(day < 22)
							zodiacsign = signs_zod[10];
					else
							zodiacsign = signs_zod[11];
				}break;
	case 11:{//December
					if(day < 22)
							zodiacsign = signs_zod[11];
					else
							zodiacsign = signs_zod[0];
				}break;
}