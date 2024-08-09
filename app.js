document.getElementById('formCalculadora').addEventListener('submit', function(event) {
    const inputs = document.querySelectorAll('input[type="number"]');
    let valid = true;

    inputs.forEach(input => {
        if (input.value < 0) {
            valid = false;
            alert('Os valores não podem ser negativos.');
            input.value = '';
        }
    });

    if (!valid) {
        event.preventDefault();
    }
});

document.getElementById('formCalculadora').addEventListener('submit', function (event){
    event.preventDefault();

    const qHomem = document.getElementById('qHomem').value;
    const qMulher = document.getElementById('qMulher').value;
    const qCrianca = document.getElementById('qCrianca').value;

    const carneBovina = totalCarneBovina(qHomem, qMulher, qCrianca);
    const frango = totalFrango(qHomem, qMulher, qCrianca);
    const linguica = totalLinguiça(qHomem, qMulher, qCrianca)
    const refrigerante= totalRefrigerante(qHomem, qMulher, qCrianca);
    const cerveja = totalCerveja(qHomem,qMulher);

    document.getElementById('quantidade').innerHTML = `
                <h3>Quantidade</h3>
                <p>${carneBovina}KG</p>
                <p>${frango}KG</p>
                <p>${linguica}KG</p>
                <p>${refrigerante}L</p>
                <p>${cerveja}L</p>
            `;

    document.getElementById('containerResultado').style.display = 'block';
});

function totalCarneBovina(totalHomem, totalMulher, totalCrianca){
    const totalCarneBovinaHomem =  totalHomem * 500
    const totalCarneBovinaMulher =  totalMulher * 300
    const totalCarneBovinaCrianca =  totalCrianca * 200
    
    return (totalCarneBovinaHomem + totalCarneBovinaCrianca + totalCarneBovinaMulher) / 1000;
}

function totalFrango(totalHomem, totalMulher, totalCrianca){
    const totalFrangoHomem =   totalHomem * 200;
    const totalFrangoMulher =  totalMulher * 200;
    const totalFrangoCrianca = totalCrianca * 100;
    
    return (totalFrangoCrianca + totalFrangoHomem + totalFrangoMulher) / 1000;
}

function totalLinguiça(totalHomem, totalMulher, totalCrianca){
    const totalLinguicaHomem =  totalHomem * 200;
    const totalLinguicaMulher =  totalMulher * 200;
    const totalLinguicaCrianca =  totalCrianca * 200;
    
    return (totalLinguicaCrianca + totalLinguicaHomem + totalLinguicaMulher) / 1000;
}

function totalRefrigerante(totalHomem, totalMulher, totalCrianca){
    const totalRefrigeranteHomem =  totalHomem * 300;
    const totalRefrigeranteMulher =  totalMulher * 400;
    const totalRefrigeranteCrianca =  totalCrianca * 200;

return (totalRefrigeranteCrianca + totalRefrigeranteHomem + totalRefrigeranteMulher) / 1000;
}

function totalCerveja(totalHomem, totalMulher){
    const totalCervejaHomem =  totalHomem * 800;
    const totalCervejaMulher =  totalMulher * 500;

    return  (totalCervejaHomem + totalCervejaMulher) / 1000;
}


