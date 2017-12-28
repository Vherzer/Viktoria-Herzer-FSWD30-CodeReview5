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

/*function likeFunction(){
	document.getElementById("numberoflikes").innerHTML ="6";
};*/

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

/* function likeFunction(){
 	like1++;
 	document.getElementById("numberoflikes").innerHTML = like1;
 };
*/
/*function likeFunction(val) {
    var qty = document.getElementById('numberoflikes').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('numberoflikes').value = new_qty;
    return new_qty;
}*/
/*function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
*/
 /*var i = 0;
    function buttonClick() {
        document.getElementById('inc').value = ++i;
    }	*/
    var numlikes1 = 0;

    function incrementValue1(val) {
    numlikes1 +=1;
    document.getElementById("numberoflikes1").innerHTML = numlikes1;
    }

     var numlikes2 = 0;

    function incrementValue2(val) {
    numlikes2 +=1;
    document.getElementById("numberoflikes2").innerHTML = numlikes2;
    }
    
     var numlikes3 = 0;

    function incrementValue3(val) {
    numlikes3 +=1;
    document.getElementById("numberoflikes3").innerHTML = numlikes3;
    }
     var numlikes4 = 0;

    function incrementValue4(val) {
    numlikes4 +=1;
    document.getElementById("numberoflikes4").innerHTML = numlikes4;
    }

