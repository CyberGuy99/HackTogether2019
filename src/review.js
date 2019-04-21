var text = '{ "reviews" : [' +
'{ "rating":"5" , "subject":"Don Japanese Kitchen", "text":"Very simple place but food taste super good.", "subject-type":"Restaurant", "author":"Guest" },' +
'{ "rating":"5", "subject": "Don Japanese Kitchen", "text": "Great place for some cheap seafood. Food was really good and definitely something I would come back for. Price was very good, spent $20 for two meals and a fish cake. Only problem was the long wait. Was a little detoured when I saw the line to the door, but made me think the food was really good and that was definitely the case. Will likely be back soon!", "subject-type": "Restaurant", "author": "Guest"},' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
let obj = JSON.parse(text);
document.getElementById("rating").innerHTML = "Rating: "+obj.reviews[0].rating;
document.getElementById("title").innerHTML = obj.reviews[0].subject;
document.getElementById("text").innerHTML = obj.reviews[0].text;
document.getElementById("author").innerHTML = "Author: "+obj.reviews[0].author;

document.getElementById("rating2").innerHTML = "Rating: "+obj.reviews[1].rating;
document.getElementById("text2").innerHTML = obj.reviews[1].text;
document.getElementById("author2").innerHTML = "Author: "+obj.reviews[1].author;