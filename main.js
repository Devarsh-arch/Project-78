var images =["Family Book.jpg", "Grandfather.jpg", "Grandmother.jpg", "Father.jpg", "Mother.png", "Brother.jpg"]
var names =["My Family Book", "Manhar Ruparel", "Ruksmani Ruparel", "Nilesh Ruparel", "Ankura Ruparel", "Vishesh Ruparel"]

var i = 0
function next_image(){
    i++;
    var number_of_family_members_in_array = 5;
    if(i > number_of_family_members_in_array){
        i = 0
    }
    var new_image = images[i];
    var new_name = names[i];
    document.getElementById("image_of_family_member").src = new_image;
    document.getElementById("name_of_family_member").innerHTML = new_name;
}