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
    console.log(num1)
    let num2Mass = []
    for (let actionIndxSTPT = calc.indexOf(action) + 1; actionIndxSTPT != calc.length; actionIndxSTPT++) { 
      num2Mass.push(calc[actionIndxSTPT])
    }
    let num2 = num2Mass.join('')
    console.log(num2)
    let num;
    if(action == '-'){
      let num = num1-num2
      document.getElementById('num').innerHTML = num;
    }else if(action == '/'){
      let num = num1/num2
      document.getElementById('num').innerHTML = num;
      if(num = NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }
    }else if(action == '+'){
      let num = Number(num1)+Number(num2)
      document.getElementById('num').innerHTML = num;
      if(num = NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }
    }else if(action == '*'){
      let num = num1*num2
      document.getElementById('num').innerHTML = num;
       if(num = NaN){
      document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
    }
    }else{
      let num = '||Incorrect Action||'
      document.getElementById('num').innerHTML = num;
      if(num = NaN){
        document.getElementById('num').innerHTML = '<strong>ERROR</strong>'
      }
    }
  }
})