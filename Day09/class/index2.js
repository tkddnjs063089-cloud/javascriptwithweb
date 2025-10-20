class Academic {
  studentNumber;
  studentName;
  studentMajor;
  studentclass;
  constructor(studentNumber, studentName, studentMajor) {
    this.studentNumber = studentNumber;
    this.studentName = studentName;
    this.studentMajor = studentMajor;
    this.studentclass = [];
  }
  register(studentclass) {
    this.studentclass.push(studentclass);
  }
}

class Course {
  name;
  professor;
  time;
  constructor(name, professor, time) {
    this.name = name;
    this.professor = professor;
    this.time = time;
  }
}

const student = new Academic("1", "전정우", "간호학과");
student.register(new Course("간호학개론", "신여진", 2));

console.log(student);
