let words = ['HELLO', "I'M JAD ASSAF", 'UX/UI DESIGNER', 'FRONT-END WEB DEVELOPER', 'UP TO DATE DESIGNS', 'ALWAYS ENJOYING LEARNING AND MAKING PROGRESS', 'HTML, CSS, SASS, JAVASCRIPT, JQUERY', 'NODE.JS, MONGODB, EXPRESS', 'NEW TO REACT'],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 70;
let wordflick = function () {
setInterval(function () {
if (forwards) {
  if (offset >= words[i].length) {
    ++skip_count;
    if (skip_count == skip_delay) {
      forwards = false;
      skip_count = 0;
    }
  }
}
else {
  if (offset == 0) {
    forwards = true;
    i++;
    offset = 0;
    if (i >= len) {
      i = 0;
    }
  }
}
part = words[i].substr(0, offset);
if (skip_count == 0) {
  if (forwards) {
    offset++;
  }
  else {
    offset--;
  }
}
$('.word').text(part);
},speed);
};

$(document).ready(function () {
wordflick();
});

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.replace('fadeOut', 'fadeIn');
      } else {
        entry.target.classList.replace('fadeIn', 'fadeOut', delete(entries));
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  const fadeElms = document.querySelectorAll('.fade');
  fadeElms.forEach(el => observer.observe(el));

let span = document.querySelectorAll('.NameHighlights');
for (let i = span.length; i--;) {
  (function() {
    let t;
    span[i].onmouseover = function() {
      hideAll();
      clearTimeout(t);
      this.className = 'NameHighlightsHover';
    };
    span[i].onmouseout = function() {
      let self = this;
      t = setTimeout(function() {
        self.className = 'NameHighlights';
      }, 300);
    };
  })();
}

function hideAll() {
  for (let i = span.length; i--;) {
    span[i].className = 'NameHighlights';
  }
};
