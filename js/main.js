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
      { name: "Ruby on Rails", next: "" },
      { name: "Sinatora", next: "" }
    ]
  },
  s3: {
    title: "調べたいフレームワークを選んでください。",
    choices: [
      { name: "CakePHP", next: "" },
      { name: "Laravel", next: "" },
      { name: "Simphony", next: "" }
    ]
  },
  s4: {
    title: "調べたいフレームワークを選んでください。",
    choices: [
      { name: "Django", next: "" },
      { name: "Flask", next: "" },
      { name: "Bottle", next: "" }
    ]
  }
}

let startId = "s1";
let answeredIdList = [startId];
let currentSlideId = startId;

const app = new Vue({
  el: "#app",
  data: {
    slide: slides[currentSlideId]
  },
  methods: {
    answer: function(e) {
      currentSlideId = e.target.getAttribute("next")
      answeredIdList.push(currentSlideId)
      this.slide = slides[currentSlideId]
    }
  }
});