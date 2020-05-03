// Benefits of closure

// 2. Encapsulation

function pressNuclearButton() {
    let timeWithoutDestruction = 0;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Booooooooom';
    }
    let passTime = () => timeWithoutDestruction++;
    let totalPeaceTime = () => timeWithoutDestruction;
    setInterval(passTime,1000);
    return {
        launch : launch,
        totalPeaceTime : totalPeaceTime
    }
}

const ohno = pressNuclearButton();

/* In this example as you see the launch function is easily accessible to everyone to execute. This can be prevented by removing the launch function from the return object and making it available only to people with specific access. This is encapsulation which is another important feature of closures.*/