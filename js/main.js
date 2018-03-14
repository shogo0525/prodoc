const slides = {
  s1: {
    isFirst: true,
    choices: [
      { name: "Ruby", next: "s2" },
      { name: "PHP", next: "s3" },
      { name: "Python", next: "s4" }
    ]
  },
  s2: {
    choices: [
      { name: "Ruby on Rails", next: "" },
      { name: "Sinatora", next: "" }
    ]
  },
  s3: {
    choices: [
      { name: "CakePHP", next: "" },
      { name: "Laravel", next: "" },
      { name: "Simphony", next: "" }
    ]
  },
  s4: {
    choices: [
      { name: "Django", next: "" },
      { name: "Flask", next: "" },
      { name: "Bottle", next: "" }
    ]
  }
}