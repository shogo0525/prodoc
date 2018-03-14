let startId = "q1";
let answeredIdList = [startId];
let currentQuestionId = startId;

const app = new Vue({
  el: '#app',
  data: {
    question: questionList[currentQuestionId],
    styleObject: {
      background: "url('images/questions/q1.png') no-repeat",
      paddingTop: "340px"
    },
    faceImage: "images/faces/normal.png"
  },
  methods: {
    answer: function(e) {
      currentQuestionId = e.target.getAttribute("next")
      answeredIdList.push(currentQuestionId)
      this.updateQuestion()
    },
    top: function() {
      currentQuestionId = "q1"
      answeredIdList = [startId]
      this.updateQuestion()
    },
    back: function() {
      answeredIdList.pop()
      currentQuestionId = answeredIdList[answeredIdList.length - 1]
      this.updateQuestion()
    },
    updateQuestion: function() {
      this.question = questionList[currentQuestionId]
      this.styleObject.background = "url('images/questions/"+currentQuestionId+".png') no-repeat"

      switch(currentQuestionId) {
        case "q2":
        case "q3":
        case "q4":
        case "q9":
        case "q20":
        case "q24":
          this.styleObject.paddingTop = "400px"
          break
        case "q35":
        case "q36":
        case "q42":
        case "q45":
          this.styleObject.paddingTop = "305px"
          break
        default:
          this.styleObject.paddingTop = "340px"
      }
    },
    mouseOver: function(e) {
      const id = e.target.getAttribute("id")
      if (id == "btn-yes") {
        //this.styleObject.background = "url('images/questions/"+currentQuestionId+"-hover_yes.png') no-repeat"
        this.faceImage = "images/faces/woman_laugh.png"
      }
      if (id == "btn-no") {
        //this.styleObject.background = "url('images/questions/"+currentQuestionId+"-hover_no.png') no-repeat"
        this.faceImage = "images/faces/man_laugh.png"
      }
    },
    mouseLeave: function() {
      //this.styleObject.background = "url('images/questions/"+currentQuestionId+".png') no-repeat"
      this.faceImage = "images/faces/normal.png"
    }
  }
})