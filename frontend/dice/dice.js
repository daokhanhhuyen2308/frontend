document.getElementById('mybutton').addEventListener('click', () => {
    const num = document.getElementById('numDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    const values = [];
    const images = [];

    for(let i = 0; i < num; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${values}.png" alt="dice: ${value}"></img>`);
    }
    
  diceResult.innerHTML = `Diec: ${values.join(', ')}`;
  diceImages.innerHTML = images.join(' ');

});