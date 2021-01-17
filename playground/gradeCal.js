let stdName = document.querySelector('#std-name');
let subjName = document.querySelector('#subj-name');
let stdGrade = document.querySelector('#std-grade');
let output = document.querySelector('#display-res');
let calBtn = document.querySelector('#cal-button');

function gradeCalculation() {
    let name = String(stdName.value);
    let outputHtml = '';
    outputHtml = '<p>' + name + '</p>';
    console.log(name);
    
    output.innerHTML = outputHtml;
    stdName.value = '';
}

calBtn.addEventListener('click', gradeCalculation);
stdName.addEventListener('keypress', (event) => {
    if(event.keyCode == 13) gradeCalculation();
});
