// literal notation ns pattern
var webSqlApp = webSqlApp || {};
webSqlApp = {
    openDb: function (ver) {
        return openDatabase('Library', ver, 'My library', 5 * 1024 * 1024);
    },
    migrateDB: function (transaction) {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS authors(" + 
            "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "firstName TEXT, " +
            "lastName TEXT, " +
            "dateCreated TIMESTAMP DEFAULT(datetime('now', 'localtime')))"
        );
    },
    onError: function (error) {
        console.log('Error Code:', error.code, 'Message: ', error.message );
    },
    onSuccess: function () {
        console.log('Table added (migration complete)');
    },
    addTable: function () {
        // var db = openDatabase('Library', '2.0', 'My  library', 5 * 1024 * 1024);
        var db = this.openDb('1.0');
        db.changeVersion('1.0', '2.0', this.migrateDB, this.onError, this.onSuccess);
        return db;
    },
    insertRecord: function (firstName, lastName) {
        var db = this.openDb('2.0');
        // db.transaction(function (t) {
        //     t.executeSql('INSERT INTO authors(firstName, lastName) ' +
        //         ' VALUES("James", "Priest")');
        // }, function (err) { console.log(err.code, err.message); });
        db.transaction(function (t) {
            t.executeSql('INSERT INTO authors(firstName, lastName) VALUES(?, ?)',
                [firstName, lastName],
                function (transaction, results) {
                    console.log('Inserted Id:', results.insertId);
                });
            },
            function (err) { console.log(err.code, err.message); },
            function () { console.log('record inserted!'); }
        );
    }
};

window.onload = function () {
    var txtKey = document.getElementById('txtKey'),
        txtVal = document.getElementById('txtVal');
    document.getElementById('btnCreateDb').addEventListener('click', function () {
        var db = webSqlApp.openDb('1.0');
        console.log(db);
    });
    document.getElementById('btnAddTable').addEventListener('click', function () {
        // var db = webSqlApp.openDb('Library', '1.0', 'My library', 5 * 1024 * 1024);
        // db.changeVersion('1.0', '2.0', this.migrateDB, this.onError, this.onSuccess);
        var db = webSqlApp.addTable();
        console.log('Current schema:', db.version);
    });
    document.getElementById('btnInsertRecord').addEventListener('click', function () {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        webSqlApp.insertRecord(firstName, lastName);
    });

};