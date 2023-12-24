const deleteCharacter = (str) => {
    const pos = Math.floor(Math.random() * str.length);

    return str.slice(0, pos) + str.slice(pos + 1);
}

const addCharacter = (str) => {
    const pos = Math.floor(Math.random() * (str.length + 1));
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));

    return str.slice(0, pos) + randomChar + str.slice(pos);
}

const swapCharacters = (str) => {
    const pos = Math.floor(Math.random() * (str.length - 1));

    return (
        str.slice(0, pos) +
        str.charAt(pos + 1) +
        str.charAt(pos) +
        str.slice(pos + 2)
    );
}

function getRandomOneToThreeEqual() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return 1;
    } else if (randomNumber < 2 / 3) {
        return 2;
    } else {
        return 3;
    }
}

function introduceErrors(fakeData, errorCount) {
    if (errorCount < 1) {
        const totalErrors = Math.floor(fakeData.length * errorCount);

        for (let i = 0; i < totalErrors; i++) {
            const randomIndex = Math.floor(Math.random() * fakeData.length);
            introduceError(fakeData[randomIndex]);
        }
    } else {
        for (let i = 0; i < fakeData.length; i++) {
            const totalErrors = Math.floor(errorCount);

            for (let j = 0; j < totalErrors; j++) {
                introduceError(fakeData[i]);
            }
        }
    }

    return fakeData;
}

const introduceError = (data) => {
    const operationIdx = getRandomOneToThreeEqual();

    switch (operationIdx) {
        case 1:
            data.fullName = deleteCharacter(data.fullName);
        case 2:
            data.fullName = addCharacter(data.fullName);
        case 3:
            data.fullName = swapCharacters(data.fullName);
    }
}

module.exports = { introduceErrors };