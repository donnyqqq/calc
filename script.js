document.addEventListener('keydown', function (event) {
  if (event.code == 'Enter') {
    let calc = Array.from(document.getElementById("calc").value);
    let calcNotNum = calc.filter(function (number) {
      if (Number.isInteger(parseInt(number)) == false) {
        return number;
      }
    });
    let action = calcNotNum[0]
    let num1Mass = []
    for (let actionIndxSTPT = calc.indexOf(action) - 1; actionIndxSTPT != -1; actionIndxSTPT--) { 
      num1Mass.push(calc[actionIndxSTPT])
    }
    let num1 = num1Mass.reverse().join('')
    let num2Mass = []
    for (let actionIndxSTPT = calc.indexOf(action) + 1; actionIndxSTPT != calc.length; actionIndxSTPT++) { 
      num2Mass.push(calc[actionIndxSTPT])
    }
    let num2 = num2Mass.join('')
    if(action == '-'){
      let num = num1-num2
      if(num === NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }else{
      document.getElementById('num').innerHTML = num;
      }
    }else if(action == '/'){
      let num = num1/num2
      if(num === NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }else{
      document.getElementById('num').innerHTML = num;
      }
    }else if(action == '+'){
      let num = Number(num1)+Number(num2)
      if(num === NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }else{
      document.getElementById('num').innerHTML = num;
      }
    }else if(action == '*'){
      let num = num1*num2
      if(num === NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }else{
      document.getElementById('num').innerHTML = num;
      }
    }else{
      let num = '||Incorrect Action||'
      if(num === NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }else{
      document.getElementById('num').innerHTML = num;
      }
    }
  }
})