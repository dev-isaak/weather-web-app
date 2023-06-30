export function diaActual() 
{
    const numeroDia = document.querySelectorAll('.numero-dia');
    const letrasDia = document.querySelectorAll('.letras-dia');
    let fecha = new Date();
    let semana = fecha.getDay();

    for (let i = 0; i < numeroDia.length ; i++)
    {
      let fecha = new Date();
      fecha.setDate(fecha.getDate()+i);
      numeroDia[i].innerHTML='';
      numeroDia[i].append(fecha.getDate());
    }
    

    let sumaSemana = semana;
    letrasDia.forEach((diaSemana, i) => 
    {
      if (sumaSemana == 0) 
      {
        diaSemana.innerText= '';
        diaSemana.append('Sun');
      }
      else if (sumaSemana == 1) 
      {
        diaSemana.innerText= '';
        diaSemana.append('Mon');
      } 
      else if (sumaSemana == 2) 
      {
        diaSemana.innerText= '';
        diaSemana.append('Tue');
      } 
      else if (sumaSemana == 3) 
      {
        diaSemana.innerText= '';
        diaSemana.append('Wed');
      } 
      else if (sumaSemana == 4) 
      {
        diaSemana.innerText= '';
        diaSemana.append('Thu');
      } 
      else if (sumaSemana == 5) 
      {
        diaSemana.innerText= '';
        diaSemana.append('Fri');
      } 
      else if (sumaSemana == 6) 
      {
        diaSemana.innerText= '';
        diaSemana.append('Sat');
        sumaSemana = -1;
      }
      sumaSemana++;
    });
}