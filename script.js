let stick = document.querySelectorAll('.stick'),
    output = document.querySelector('.output'),
    towerThree = document.querySelector('.towerThree'),
    boxPicked = null;

function towerOfHanoi() {
    stick.forEach(element => {
        element.addEventListener('click', function () {
            if (!boxPicked) {
                boxPicked = this.children[0].children[0].lastElementChild;
                boxPicked.style.transform = 'scaleX(1.2)';
                boxPicked.style.marginBottom = '10px';
            } else {
                if ((!this.children[0].children[0].lastElementChild) || (boxPicked.clientWidth <= this.children[0].children[0].lastElementChild.clientWidth)) {
                    this.children[0].children[0].appendChild(boxPicked);
                    boxPicked.style.transform = 'scale(1)';
                    boxPicked.style.marginBottom = '0px';
                    boxPicked.style.animation = 'movement 0.3s 0s forwards linear';
                    boxPicked = null;
                } else {
                    boxPicked.style.animation = 'err 0.4s 0s 1 linear';
                    output.innerHTML = `Please choose either blank tower or bigger box!`
                    setTimeout(() => {
                        boxPicked.style.animation = 'none';
                        boxPicked.style.transform = 'scale(1)';
                        boxPicked.style.marginBottom = '0px';
                        boxPicked = null;
                    }, 500);
                    setTimeout(() => output.innerHTML = '', 2000);
                }
            };
        });
    });
};
towerOfHanoi();

window.addEventListener('click', function () {
    if (towerThree.children[0].children[0].children.length === 4) {
        output.innerHTML = `You've won the game! Congratulations🎉`;
    }
});