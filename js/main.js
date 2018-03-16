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
    btnBig: true,
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
  // Sinatora
  s2_2: {
    btnBig: true,
    title: "学びたい教材を選んでください。",
    choices: [
      { name: "Webアプリ開発入門 Sinatra編", next: "s2_2_1" },
      { name: "公式ドキュメント（翻訳版）", next: "s2_2_2" }
    ]
  },
  s2_2_1: {
    isLast: true,
    title: "Webアプリ開発入門 Sinatra編 ",
    description: "paizaラーニングは一回3分程度の動画を見て、ブラウザ上で演習問題を解きながら、Sinatraの使い方について楽しく・効率よく学ぶことができます。<br>"
                 + "未経験者でもブラウザさえあれば、環境構築不要で手を動かしながらSinatraの基礎を習得できます。<br><br>"
                 + "(引用) http://paiza.hatenablog.com/entry/2017/12/12/%E5%88%9D%E5%BF%83%E8%80%85%E3%81%A7%E3%82%82%E3%81%BB%E3%81%BC%E7%84%A1%E6%96%99%E3%81%A7Ruby%E7%94%A8%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF%E3%80%8CSinatra%E3%80%8D%E3%81%AB",
    link: "https://paiza.jp/works/sinatra/primer"
  },
  s2_2_2: {
    isLast: true,
    title: "公式ドキュメント（翻訳版）",
    description: "公式ドキュメントのありがたい日本語訳版がGitHub上で公開されています。<br><br>"
                 + "(引用) http://paiza.hatenablog.com/entry/2017/12/12/%E5%88%9D%E5%BF%83%E8%80%85%E3%81%A7%E3%82%82%E3%81%BB%E3%81%BC%E7%84%A1%E6%96%99%E3%81%A7Ruby%E7%94%A8%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF%E3%80%8CSinatra%E3%80%8D%E3%81%AB",
    link: "https://github.com/sinatra/sinatra/blob/master/README.ja.md"
  },
  // PHP
  s3: {
    title: "学びたいフレームワークを選んでください。",
    choices: [
      { name: "CakePHP", next: "s3_1" },
      { name: "Laravel", next: "s3_2" }
    ]
  },
  // CakePHP
  s3_1: {
    btnBig: true,
    title: "学びたい教材を選んでください。",
    choices: [
      { name: "ドットインストール　CakePHP3入門", next: "s3_1_1" },
      { name: "初心者のためのCakePHP3 プログラミング入門", next: "s3_1_2" }
    ]
  },
  s3_1_1: {
    isLast: true,
    title: "ドットインストール　CakePHP3入門 ",
    description: "プログラミング言語のチュートリアルサイトとしておなじみの「ドットインストール」による、CakePHP3の入門講座。<br>"
                 + "CakePHP3の特徴や概念などの基礎知識から、CakePHP3の基本操作を学習することができます。<br><br>"
                 + "(引用) https://mayonez.jp/topic/808",
    link: "http://dotinstall.com/lessons/basic_cakephp_v2"
  },
  s3_1_2: {
    isLast: true,
    title: "初心者のためのCakePHP3 プログラミング入門",
    description: "CakePHP3のインストール方法から基本操作までを一通り学ぶことができるチュートリアルサイトです。<br>"
                 + "CakePHP3に関する概念や基本知識に関してはほとんど説明がなく、インストールするところからスタートするので、CakePHP3やフレームワークを学んだことがないという方には、やや難しい内容となっています。<br><br>"
                 + "(引用) https://mayonez.jp/topic/808",
    link: "http://libro.tuyano.com/index2?id=4536003"
  },
  // Laravel
  s3_2: {
    btnBig: true,
    title: "学びたい教材を選んでください。",
    choices: [
      { name: "WinRoadのLaravel4初心者講座", next: "s3_2_1" },
      { name: "Libro ビギナーのためのLaravel入門", next: "s3_2_2" }
    ]
  },
  s3_2_1: {
    isLast: true,
    title: "WinRoadのLaravel4初心者講座 ",
    description: "「PHP初心者に、Laravel4を使ってもらいたい」というコンセプトのもとに制作された、Laravel４・Laravel5の入門サイトです。<br>"
                 + "個人の方が運営しているサイトですが、サイトデザインやチュートリアルの内容などは、どれもハイクオリティ。<br>"
                 + "Laravel4が中心の内容ですが、Laravel５の登場後は、Laravel5のインストール方法などもチュートリアル内容に加わりました。<br><br>"
                 + "(引用) https://mayonez.jp/topic/1824",
    link: "http://laravel4.winroad.jp/"
  },
  s3_2_2: {
    isLast: true,
    title: "Libro ビギナーのためのLaravel入門",
    description: "フレームワークの使い方をテーマにした、Laravel入門チュートリアルサイトです。フレームワークやPHPに関する知識が全くないという初心者にとっては、やや難しい内容かもしれません。<br>"
                 + "しかし、説明がとても丁寧なので、PHPや他プログラミング言語、フレームワークなどの知識がある程度ある方にとっては、進めやすいでしょう。<br><br>"
                 + "(引用) https://mayonez.jp/topic/1824",
    link: "http://libro.tuyano.com/index2?id=3766003"
  },
  // Python
  s4: {
    title: "学びたいフレームワークを選んでください。",
    choices: [
      { name: "Django", next: "s4_1" },
      { name: "Flask", next: "s4_2" }
    ]
  },
  // Django
  s4_1: {
    btnBig: true,
    title: "学びたい教材を選んでください。",
    choices: [
      { name: "Django Girls Tutorial", next: "s4_1_1" },
      { name: "Python Django入門", next: "s4_1_2" }
    ]
  },
  s4_1_1: {
    isLast: true,
    title: "Django Girls Tutorial ",
    description: "Djangoのチュートリアルをいろいろ探してみた結果、「Django Girls Tutorial」がとても良心的に感じました。<br>"
                 + "Web開発の経験がない人でも一人で進められるのではと思うほどの丁寧さでした。<br><br>"
                 + "(引用) https://qiita.com/takechanman1228/items/d711e175b32f833c5e9c",
    link: "https://djangogirlsjapan.gitbooks.io/workshop_tutorialjp/content/how_the_internet_works/index.html"
  },
  s4_1_2: {
    isLast: true,
    title: "Python Django入門 ",
    description: "IDEとかBootstrapまで丁寧に説明されていて書籍管理サイトを作成するチュートリアル。<br><br>"
                 + "(引用) https://qiita.com/takechanman1228/items/d711e175b32f833c5e9c",
    link: "https://qiita.com/kaki_k/items/511611cadac1d0c69c54"
  },
  // Flask
  s4_2: {
    btnBig: true,
    title: "学びたい教材を選んでください。",
    choices: [
      { name: "ウェブアプリケーションFW Flask を使ってみる", next: "s4_2_1" },
      { name: "Flask Tutorial by Chris Hawkes", next: "s4_2_2" }
    ]
  },
  s4_2_1: {
    isLast: true,
    title: "ウェブアプリケーションフFW Flask を使ってみる ",
    description: "簡単な説明とコードを書くことができるので、最初にやっとくといいチュートリアルです。<br><br>"
                 + "(引用) http://clc.gonna.jp/2017/04/post-1490/",
    link: "https://qiita.com/ynakayama/items/2cc0b1d3cf1a2da612e4"
  },
  s4_2_2: {
    isLast: true,
    title: "Flask Tutorial by Chris Hawkes",
    description: "全９本のちょっと長めのチュートリアルです。<br>"
                 + "内容も実戦でも問題なく使えるコンテンツになっているので、一度やっておくと結構勉強になります！<br><br>"
                 + "(引用) http://clc.gonna.jp/2017/04/post-1490/",
    link: "https://www.youtube.com/watch?list=PLei96ZX_m9sWQco3fwtSMqyGL-JDQo28l&v=gDSLrpxR3G4"
  },
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
    },
    restart: function() {
      currentSlideId = startId;
      this.answeredList = [];
      this.slide = slides[currentSlideId]
    }
  }
});