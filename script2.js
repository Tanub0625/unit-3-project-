let FirstQ = document.querySelector(".FirstQ")
let option1 = document.querySelector(".option-one")
let option2 = document.querySelector(".option-two")
let option3 = document.querySelector(".option-three")
let option4 = document.querySelector(".option-four")
let option5 = document.querySelector(".option-five")
let option6 = document.querySelector(".option-six")
let option7 = document.querySelector(".option-seven")
let option8 = document.querySelector(".option-eight")
let openText = document.querySelector(".openText")
let storyImage = document.querySelector(".story-image")


FirstQ.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";

});

option1.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
     option7.style.display = "none";
    option8.style.display = "none";
});

option2.addEventListener("click", function(){
    option1.style.display = "none"
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
});

option3.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
});

option4.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
});

option5.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
});

option6.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
});

option7.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
});

option8.addEventListener("click", function(){
    option1.style.display = "none";
    option2.style.display = "none";
    openText.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
});



document.addEventListener("DOMContentLoaded", function() {
 
    document.querySelector('.option-one').addEventListener('click', function() {
      
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-one-screen').style.display = 'block';

        document.querySelector('.Text1').textContent = "What is your role in the heist?";
    

    });

    

    document.querySelector('.option-two').addEventListener('click', function() {
       
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-two-screen').style.display = 'block';
       

         document.querySelector('.Text1').textContent = "Bad choice. Your group robs the bank, puts the blame one you and you get jail time."
    });


 
    document.querySelector('.option-three').addEventListener('click', function() {
     
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-three-screen').style.display = 'block';

         document.querySelector('.Text1').textContent = "You could not distract them. You end up in jail."
    });

    
    document.querySelector('.option-four').addEventListener('click', function() {
      
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-four-screen').style.display = 'block';

        document.querySelector('.Text1').textContent = "Choose your getaway method";

    });

    document.querySelector('.option-five').addEventListener('click', function() {
        
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-five-screen').style.display = 'block';
        document.querySelector('.Text1').textContent = "You get away, get really rich, move to Europe and start make money though ransomware"
       
    });

    document.querySelector('.option-six').addEventListener('click', function() {
       
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-six-screen').style.display = 'block';
        document.querySelector('.Text1').textContent = "You come across two paths. Which one do you take?"
    });

    
    document.querySelector('.option-seven').addEventListener('click', function() {
       
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-seven-screen').style.display = 'block';
        document.querySelector('.Text1').textContent = "You get robbed by a Wendy's employee"
    });

    document.querySelector('.option-eight').addEventListener('click', function() {
       
        document.querySelectorAll('.screen').forEach(function(screen) {
            screen.style.display = 'none';
        });
        document.querySelector('.option-eight-screen').style.display = 'block';
        document.querySelector('.Text1').textContent = "It's a dead end you get caught and sent to jail"
    });
});