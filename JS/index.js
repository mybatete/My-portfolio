var acc = document.getElementsByClassName("accordion");
var t;

for (t = 0; t < acc.length; t++) {
  acc[t].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
  //   if (panel.style.display === "block") {
  //     panel.style.display = "none";
  //   } else {
  //     panel.style.display = "block";
  //   }
  // });
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}); 
}

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

var txt2017 = 'I prepared, cooked and served pizza, I had to be quick to respond to customer’s needs, make sure we did not run out of pizza, and keep my spot clean. I also worked as a cashier, I had to and serve the customers. While being cashier I had to solve customers’ problems and answer count the bank, prepare the till, fill out the condiments and drinks we were to serve, and great their questions. Several of our customers were international students, who required more effort to be understood. Sometimes I had to do catering for big events on campus, serve keep the food full, then clean up.';
var txt2018  = 'As an office assistant, my job consisted mostly of data management tasks. I also did customer service, answer emails, phone Calls, and help with admission process. I had to keep all the databases updated, organized and consistent at all times. I emailed the partners when our contract with them came to an end, trying to renew. I received and served students(customers) in the office, if what they asked was out of my scope, I referred them to the person who could answer their question or set them an appointment.';
var txt2010  = 'I supervised the whole cyber café, I looked out for the check out, the bills, I Entered documents in computer, assisted customers, and managed the cash. I also had to fix computers a couple times.';

var txt2019 ='As Coding specialist I taught campers how to code in swift and basic general concepts of coding and debugging. I also guided campers with sharper skills through some challenges in javascript, python and c++. I used swift ground for beginners and learn code.org for those who had completed the swift playground.';
var speed = 25;
var i = 0;
var j = 0;
var k = 0;
var l = 0;

function typeWriter() {
    
  if (i < txt2019.length) {
    document.getElementById("2019").innerHTML += txt2019.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}

function typeWriter2() {
    
  if (k < txt2018.length) {
    document.getElementById("2018").innerHTML += txt2018.charAt(k);
    k++;
    setTimeout(typeWriter2, speed);
  }
}

function typeWriter3() {
    
  if (j < txt2017.length) {
    document.getElementById("2017").innerHTML += txt2017.charAt(j);
    j++;
    setTimeout(typeWriter3, speed);
  }
}

function typeWriter4() {
    
  if (l < txt2010.length) {
    document.getElementById("2010").innerHTML += txt2010.charAt(l);
    l++;
    setTimeout(typeWriter4, speed);
  }
}

