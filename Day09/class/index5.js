class student {
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }
}

class colleger extends student {
  #major;
  #courses;
  constructor(id, name, major) {
    super(id, name);
    this.#major = major;
    this.#courses = [];
  }
  register(course) {
    this.#courses.push(course);
  }
}

class HighSchoolStudent extends student {
  #grade;
  #classroom;
  constructor(id, name, grade) {
    super(id, name);
    this.#grade = grade;
    this.#classroom = [];
  }
  register(yatta) {
    this.#classroom.push(yatta);
  }
}
