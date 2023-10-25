const odbc = require('odbc');

let connection: any;

async function connectToDatabase() {
    // const connection1 = await odbc.connect('DSN=MYDSN');

    // const connectionConfig = {
    //     connectionString: 'driver=Ingres;server=newlandmarkiitest.itvplc.ads;port=ET7;database=ITVDEVKR/remote;uid=atskruat;pwd=$0naRst@k',
    //     connectionTimeout: 10,
    //     loginTimeout: 10,
    // }
    // connection = await odbc.connect('DSN=Ingres');

    // connection = await odbc.connect('DSN=IngresDSN');
    // connection1 is now an open Connection

    // or using a configuration object
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

