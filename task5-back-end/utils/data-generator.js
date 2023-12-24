const { fakerEN_US, fakerFR, fakerDE, fakerDA } = require('@faker-js/faker');

let seed = null;
let locale = null;
let fakeData = [];

const generateData = (reqBody) => {
    const reqSeed = parseInt(reqBody.seed);

    if (reqSeed !== seed || reqBody.locale !== locale) {
        fakeData = [];
        seed = reqSeed;
        locale = reqBody.locale;
        const faker = locale === 'fr' ? fakerFR : locale === 'de' ? fakerDE : fakerEN_US;
        faker.seed(seed);

        for (let i = 0; i < 1000; i++) {
            const fullName = faker.person.firstName() + ' ' + faker.person.middleName() + ' '
                + faker.person.lastName();
            const address = faker.location.country() + ' ' + faker.location.city() + ' '
                + faker.location.street() + ' ' + faker.location.buildingNumber() + ' '
                + faker.location.zipCode();
            const phone = faker.phone.number();
            fakeData.push({
                index: i + 1,
                id: Math.random() * 100000,
                fullName: fullName,
                address: address,
                phone: phone
            });
        }
    }

    const offset = reqBody.offset;
    const startIdx = offset * 10 + (offset === 0 ? 0 : 10);
    const endIdx = offset === 0 ? 20 : startIdx + 10;

    return fakeData.slice(startIdx, endIdx);
}

module.exports = { generateData };