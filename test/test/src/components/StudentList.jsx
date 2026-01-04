function StudentList() {
  const Students = ["Arya", "Rahul", "Aisha", "Kiran"];

  return (
    <>
      <ul type="none" style={{backgroundColor:'yellowgreen',textAlign:'center',padding:'15px'}}>
        {Students.map((name, index) => (
          <li>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default StudentList;
