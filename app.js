const username = document.getElementById('name')
  const data1 = document.getElementById('note1')
  const data2 = document.getElementById('note2')
  const data3 = document.getElementById('note3')
  const btnCalculate = document.getElementById('btn-calculate')
  const predict= document.getElementById('btn-predict')
  const response = document.getElementById('Answer')

  btnCalculate.addEventListener('click', calculateNote )

  function calculateNote() {
    let user= username.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4))


     if (result>0 && result<=3.5 ){
        response.textContent=`Hola ${user} su nota definitiva es: ${result}, perdio la materia
        `;
    }
    else if (result>=3.6 && result <= 4.5){
        response.textContent=`Hola ${user} su nota definitiva es: ${result},Gano la materia
        `;
    }
    else if (result>=4.6 && result <= 5.0){
        response.textContent=`Hola ${user} su nota definitiva es: ${result},Su nota es sobresaliente
        `;
    }
    else {
         response.textContent=`Hola ${user} alguna de sus notas es invalida,revise`
    }
  }