const students = [
    {
      name: 'CARLOS',
      noteOne: 7.5,
      noteTwo: 6.5,
    },
    {
        name: 'Jose',
        noteOne: 2.5,
        noteTwo: 6.5,
      },
      {
        name: 'Maria',
        noteOne: 5.5,
        noteTwo: 5.5,
      },
    
  ];
  // função que calcula a média
  function average(student) {
    const firstExam = Number(student.noteOne);
    const secondExam = Number(student.noteTwo);
    return ((firstExam + secondExam) / 2).toFixed(1);
  }
  //

  for (let i = 0; i < students.length; i++) {
    const calc = average(students[i]);
  
    if (calc >= 7) {
      alert(`A média do(a) aluno(a), ${students[i].name} é ${calc}! \n Parabés, ${students[i].name}! Você foi aprovado(a) no concurso`);
    } else {
      alert(`A média do(a) aluno(a), ${students[i].name} é ${calc}! \n Não foi dessa vez, ${students[i].name}! Tente novamente`);
    }
  }