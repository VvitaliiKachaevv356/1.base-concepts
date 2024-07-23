function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student("Василиса", "женский", 19);
const student2 = new Student("Артём", "мужской", 25);
const student3 = new Student("Светлана", "женский", 22);
// console.log(student1)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
student1.setSubject("физика")
// console.log(student1)

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
};

// student1.addMarks(4, 4, 5, 4, 3);

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
};
// console.log(student1.getAverage());

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
