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
  // Ruby
  s2: {
    title: "学びたいフレームワークを選んでください。",
    choices: [
      { name: "Ruby on Rails", next: "s2_1" },
      { name: "Sinatora", next: "s2_2" }
    ]
  },
  // Ruby on Rails
  s2_1: {
    title: "学びたい教材を選んでください。",
    choices: [
      { name: "Ruby on Rails チュートリアル", next: "s2_1_1" },
      { name: "RubyLife", next: "s2_1_2" },
      { name: "ドットインストール", next: "s2_1_3" }
    ]
  },
  s2_1_1: {
    isLast: true,
    title: "Ruby on Rails チュートリアル：実例を使ってRailsを学ぼう",
    description: "マイケルハートル氏が書いたRuby on Railsのチュートリアルを翻訳したサイトです。<br>"
                 + "1章から11章まであり、読み進めていくとRailsの基礎を学ぶことができます。<br>"
                 + "Hello Worldから始まり、フォロワーの通知の機能まで、ボリュームが多いチュートリアルです。<br>"
                 + "ただ、翻訳になっているため、初心者だと少し難しい表現があるかもしれません。<br><br>"
                 + "(引用) https://techacademy.jp/magazine/5910",
    link: "https://railstutorial.jp/"
  },
  s2_1_2: {
    isLast: true,
    title: "RubyLife",
    description: "RubyLifeというサイト内にあるRuby on Railsのチュートリアルです。<br>"
                 + "Railsのインストール方法からアプリケーションの実行やパッケージ管理、設計の基本までしっかりと学べます。"
                 + "記事のボリュームも十分にあり、中級者へステップアップにも活用できそうです。<br><br>"
                 + "(引用) https://techacademy.jp/magazine/5910",
    link: "https://www.rubylife.jp/rails/"
  },
  s2_1_3: {
    isLast: true,
    title: "ドットインストール",
    description: "プログラミング学習サービスの定番中の定番といっていいほどのドットインストールにあるRuby on Railsのチュートリアルです。<br>"
                 + "全28回の動画を通してRailsの基礎を学べます。Ruby on Railsとはなにかというところから、tasksの使い方まで、詳細に学ぶことが可能です。<br><br>"
                 + "(引用) https://techacademy.jp/magazine/5910",
    link: "https://dotinstall.com/lessons/basic_rails_v3"
  },
  // Sintora
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