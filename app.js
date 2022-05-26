let yourName = prompt('What is your name');
let yourAge = prompt('Enter your Age');
let partnerNmae = prompt('What is your partner name');
let partnerAge = prompt('Enter your partner Age');
let percentage = (Math.random()*100);
percentage = Math.floor(percentage + 1)
let html;
html = `
        <h1>${yourName} and ${partnerNmae} Marriage Percentage</h1>
        <div>
        <ul>
          <li>Your Name: ${yourName}</li>
          <li>Your Age: ${yourAge}</li>
          <li>Partner Name: ${partnerNmae}</li>
          <li>Partner Age: ${partnerAge}</li>
          <li>Marriage percentage: ${percentage}%</li>
        </ul>
        </div>
`
document.body.innerHTML = html;