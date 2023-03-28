//map method second sum//
			const names = [
				  {
					first_name: 'Mike',
					last_name: 'Sheridan',
					age: 30
				  },
				  {
					first_name: 'Tim',
					last_name: 'Lee',
					age: 45
				  },
				  {

					first_name: 'John',
					last_name: 'Carte',
					age: 25
				  }
				];
				   
				 const nameslist=names.map(function(names){
					   return(names.last_name);
				 });
				 console.log(nameslist);
				 document.write(JSON.stringify(nameslist),"<br>");
				 

				 