const slides = {
  s1: {
    isFirst: true,
    title: "学びたいフレームワークの言語を選んでください。",
    choices: [
      { name: "Ruby", next: "s2" },
      { name: "PHP", next: "s3" },
      { name: "Python", next: "s4" }
    ]
  },
  s2: {
    title: "学びたいフレームワークを選んでください。",
    choices: [
      { name: "Ruby on Rails", next: "s2_1" },
      { name: "Sinatora", next: "s2_2" }
    ]
  },
  s2_1: {
    title: "学びたい教材を選んでください。",
    choices: [
      { name: "Ruby on Rails チュートリアル", next: "s2_1_1" },
      { name: "Progate", next: "s2_1_2" }
    ]
  },
  s2_1_1: {
    isLast: true,
    title: "Ruby on Rails チュートリアル：実例を使ってRailsを学ぼう",
    description: "マイケルハートル氏が書いたRuby on Railsのチュートリアルを翻訳したサイトです。<br>"
                 + "1章から11章まであり、読み進めていくとRailsの基礎を学ぶことができます。<br>"
                 + "Hello Worldから始まり、フォロワーの通知の機能まで、ボリュームが多いチュートリアルです。<br>"
                 + "ただ、翻訳になっているため、初心者だと少し難しい表現があるかもしれません。",
    link: "https://railstutorial.jp/"
  },
  s3: {
    title: "学びたいフレームワークを選んでください。",
    choices: [
      { name: "CakePHP", next: "s1" },
      { name: "Laravel", next: "s1" },
      { name: "Simphony", next: "s1" }
    ]
  },
  s4: {
    title: "学びたいフレームワークを選んでください。",
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