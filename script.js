window.onload = () => { 
    const noButton = document.getElementById('noButton');

    const loadConfetti = () => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0";
        script.onload = () => console.log("Confetti loaded!");
        document.head.appendChild(script);
    };
    
    const runConfetti = () => {
        confetti({
            particleCount: 350,
            spread: 150,
            origin: { y: 0.6 },
        });
    };
    
    document.getElementById('yesButton').addEventListener('click', () => {
        runConfetti();
        document.getElementById('question').innerHTML = "Yay! <br> (No take backs)";
    });
    
    function runAway(button) {
        button.addEventListener('mousemove', (event) => {
            const buttonRect = button.getBoundingClientRect();
            
            const mouseX = event.clientX;
            const mouseY = event.clientY;
        
            const deltaX = mouseX - (buttonRect.left + buttonRect.width / 2);
            const deltaY = mouseY - (buttonRect.top + buttonRect.height / 2);
        
            const threshold = 100; 
            const moveDistance = 150; 
        
            if (Math.abs(deltaX) < threshold && Math.abs(deltaY) < threshold) {
                const moveX = (deltaX > 0 ? -1 : 1) * moveDistance;
                const moveY = (deltaY > 0 ? -1 : 1) * moveDistance;
        
                let newX = buttonRect.left + moveX;
                let newY = buttonRect.top + moveY;
        
                const maxX = window.innerWidth - buttonRect.width;
                const maxY = window.innerHeight - buttonRect.height;
        
                if (newX < 0) {
                    newX = maxX; 
                } else if (newX > maxX) {
                    newX = 0;
                }
        
                if (newY < 0) {
                    newY = maxY; 
                } else if (newY > maxY) {
                    newY = 0;
                }
        
                button.style.transition = 'left 0.1s, top 0.1s';
                button.style.left = `${newX}px`;
                button.style.top = `${newY}px`;
            }
        });
    }    

    runAway(noButton);
    loadConfetti();
};
