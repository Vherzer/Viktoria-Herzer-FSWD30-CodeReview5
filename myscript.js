var Persons = [
	{
	name: 'John',
	surname: 'Doe',
	favoritePerformer: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	age: 25,
	myPhoto: "img/image.1jpg",
	likes: 0 
	}, 
		{
	name: 'Kate',
	surname: 'Bee',
	favoritePerformer: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	age: 22,
	myPhoto: "img/image.1jpg",
	likes: 0 
	}, 
		{
	name: 'Megi',
	surname: 'Smith',
	favoritePerformer: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	age: 25,
	myPhoto: "img/image.1jpg",
	likes: 0 
	}, 
		{
	name: 'Big',
	surname: 'Shaq',
	favoritePerformer: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	age: 26,
	myPhoto: "img/image.1jpg",
	likes: 0 
	}, 

];
console.log(Persons);

function likeFunction(){
	document.getElementById("numberoflikes").innerHTML ="6";
};

document.getElementById("name1").innerHTML = Persons[0].name;
document.getElementById("name2").innerHTML = Persons[1].name;
document.getElementById("name3").innerHTML = Persons[2].name;
document.getElementById("name4").innerHTML = Persons[3].name;
document.getElementById("sname1").innerHTML = Persons[0].surname;
document.getElementById("sname2").innerHTML = Persons[1].surname;
document.getElementById("sname3").innerHTML = Persons[2].surname;
document.getElementById("sname4").innerHTML = Persons[3].surname;
document.getElementById("age1").innerHTML = Persons[0].age;
document.getElementById("age2").innerHTML = Persons[1].age;
document.getElementById("age3").innerHTML = Persons[2].age;
document.getElementById("age4").innerHTML = Persons[3].age;




