//break statement

for (i = 0; i <= 10; i++){
	if (i == 5){
		break;
	}
	document.write(i + "<br />");
}

//continue
for (i = 0; i <= 10; i++){
	if(i == 5){
		continue;
	}
	document.write(i + "<br />");
}

//Result:
//The value 5 is not printed, because continue skips that iteration of the loop.

