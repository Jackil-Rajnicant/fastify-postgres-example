const odbc = require('odbc');

let connection: any;

async function connectToDatabase() {
    const connectionConfig = { 
        connectionString: 'DSN=IngresDSN',
        connectionTimeout: 10,
        loginTimeout: 10,
    }
    connection = await odbc.connect(connectionConfig);
}


export function runQuery(){
    connectToDatabase();
    let result = connection.query('SELECT * FROM CAMP', (error: any, result: any) => {
        if (error) { console.error(error) }
        console.log(result);
    });

    console.log(result);
}

