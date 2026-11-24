test("BUG-101: deleting a student removes stored grades", () => {
    const studentID = store.addStudent("Maya");
    store.addGrade(studentID, "CS360", 90);
    assert.equal(store.getGrade(studentID, "CS360"), 90);

    store.deleteStudent(studentID);
    assert.equal(store.getGrade(studentID, "CS360"), undefined);
  });