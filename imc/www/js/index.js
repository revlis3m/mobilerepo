function calculerIMC(){

	const poids = document.getElementById('poids')
	const taille = document.getElementById('taille')

    let message = "Vous êtes en état ";
    const imc = poids.value / Math.pow(taille.value, 2);

    if(imc < 16.5)
    {
        message += 'de dénutrition';
    }
    else if(imc >= 16.5 && imc < 18.5)
    {
        message += 'de maigreur';
    }
    else if(imc >= 18.5 && imc < 25)
    {
        message = 'Vous avez un poids normal';
    }
    else if(imc >= 25 && imc < 30)
    {
        message += 'de surpoids';
    }
    else if(imc >= 30 && imc < 35)
    {
        message += 'd\'bésité modérée';
    }
    else if(imc >= 35 && imc < 40)
    {
        message += 'd\'bésité sévère';
    }
    else
    {
        message += 'd\'bésité morbide';
    }


    let messageBox = document.querySelectorAll('fieldset')[1];
    let resultBox = document.querySelector('fieldset span');

    messageBox.hidden = false ;
    resultBox.innerHTML = "Votre IMC est "+ imc.toFixed(2) +'<hr>'+ message ;
}