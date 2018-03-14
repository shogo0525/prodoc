const slides = {
  s1: {
    isFirst: true,
    title: "調べたい言語を選んでください。",
    choices: [
      { name: "Ruby", next: "s2" },
      { name: "PHP", next: "s3" },
      { name: "Python", next: "s4" }
    ]
  },
  s2: {
    title: "調べたいフレームワークを選んでください。",
    choices: [
      { name: "Ruby on Rails", next: "s1" },
      { name: "Sinatora", next: "s1" }
    ]
  },
  s3: {
    title: "調べたいフレームワークを選んでください。",
    choices: [
      { name: "CakePHP", next: "s1" },
      { name: "Laravel", next: "s1" },
      { name: "Simphony", next: "s1" }
    ]
  },
  s4: {
    title: "調べたいフレームワークを選んでください。",
    choices: [
      { name: "Django", next: "s1" },
      { name: "Flask", next: "s1" },
      { name: "Bottle", next: "s1" }
    ]
  }
}

let startId = "s1";
let currentSlideId = startId;

const app = new Vue({
  el: "#app",
  data: {
    slide: slides[currentSlideId],
    answeredList: []
  },
  methods: {
    answer: function(e) {
      currentSlideId = answeredId = e.target.getAttribute("next")
      answeredName = e.target.getAttribute("value")
      this.answeredList.push({ id: answeredId, name: answeredName  })
      this.slide = slides[currentSlideId]
    }
  }
});