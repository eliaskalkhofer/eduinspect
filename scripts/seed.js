const { users, hospitations } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');;

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('seed---MONGODB_URI is not defined in the environment variables.');
}

async function seedUsers(client) {
    try {
        // Insert data into the "users" collection
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                const databaseObj = client.db("eduinspect");
                const collectionObj = databaseObj.collection("users");
                const result = await collectionObj.insertOne({
                    username: user.username,
                    password: hashedPassword
                });
            }),
        );

        console.log(`seed---Seeded ${insertedUsers.length} users`);

        return {
            users: insertedUsers,
        };
    } catch (error) {
        console.error('seed---Error seeding users:', error);
        throw error;
    }
}

async function seedHospitations(client) {
    try {
        // Insert data into the "hospitations" collection
        const insertedHospitations = await Promise.all(
            hospitations.map(async (hospitation) => {
                const databaseObj = client.db("eduinspect");
                const collectionObj = databaseObj.collection("hospitations");
                const result = await collectionObj.insertOne({
                    date: hospitation.date,
                    starttime: hospitation.starttime,
                    endtime: hospitation.endtime,
                    subject: hospitation.subject,
                    information: hospitation.information,
                    status: hospitation.status
                });
            }),
        );

        console.log(`seed---Seeded ${insertedHospitations.length} hospitations`);

        return {
            hospitations: insertedHospitations,
        };
    } catch (error) {
        console.error('seed---Error seeding hospitations:', error);
        throw error;
    }
}


async function main() {

    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('seed---Erfolgreich mit der Datenbank verbunden');
    } catch (error) {
        console.error('seed---Fehler beim Verbindungsaufbau zur Datenbank:', error);
    }

    //await seedUsers(client);
    //await seedHospitations(client);

    try {
        await client.close();
        console.log('seed---Verbindung zur Datenbank erfolgreich geschlossen');
    } catch (error) {
        console.error('seed---Fehler beim Schließen der Datenbankverbindung:', error);
    }
}

main().catch((err) => {
    console.error(
        'seed---Ein Fehler ist aufgetreten beim seeden der Datenbanl:',
        err,
    );
});
