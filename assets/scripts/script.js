$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  // smooth scrolling 
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },
      500,
      'linear'
    );
  });
});

// Bubble Effect
const effect = document.getElementById('bubble-effect');
for (let i = 0; i < 100; i++) {
  effect.innerHTML += '<div class="bubble"></div>';
}

// Typing Effect
function setupTypewriter(t) {
  let HTML = t.innerHTML;
  t.innerHTML = "";

  let cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 10,
      tempTypeSpeed = 0;

  let type = function() {
    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }

    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }

    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0;
      }
      else {
        tempTypeSpeed = (Math.random() * typeSpeed) + 30;
      }
      t.innerHTML += HTML[cursorPosition];
    }

    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + 30;
      writingTag = false;
      if (tagOpen) {
        var newSpan = document.createElement("span");
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }
  };

  return {
    type: type
  };
}

let typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();

// Skill Bar
let lang = {
  "html": "100%",
  "css": "95%",
  "bootstrap": "75%",
  "javascript": "80%",
  "react": "70%",
  "expressjs": "70%",
  "python": "90%",
  "django": "65%",
  "sql": "80%",
  "flutter": "85%"
};

let multiply = 0.3;

$.each(lang, function(language, percent) {
  let delay = 500;
  setTimeout(function() {
    $('#'+language+'-percent').html(percent);
  },
  delay*multiply);
  multiply++;
});

// Contact
function sendMail(params){
  let tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send('gmail', 'template_ua0wt3i', tempParams)
  .then(function(res){
    console.log("success", res.status);
  })
}