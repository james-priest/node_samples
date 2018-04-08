// literal notation ns pattern
var webSqlApp = webSqlApp || {};
webSqlApp = {
    version: '0.0',
    openDb: function (ver) {
        var db = openDatabase('Library', ver, 'My library', 5 * 1024 * 1024);
        this.version = ver;
        return db;
    },
    onError: function (err) {
        console.log('Error Code:', err.code, 'Message: ', err.message);
    },
    onSuccess: function (success) {
        console.log(success);
        var li = document.createElement('li');
        li.innerHTML = success;
        document.getElementById('output').appendChild(li);
    },
    addTable: function () {
        // var db = openDatabase('Library', '2.0', 'My  library', 5 * 1024 * 1024);
        if (this.version === '1.0') {
            var db = this.openDb('1.0');

            db.changeVersion('1.0', '2.0', createAuthors, this.onError, this.onSuccess('table added'));
            return db;
        } else {
            console.log('Table already exists');
        }

        function createAuthors(transaction) {
            transaction.executeSql("CREATE TABLE IF NOT EXISTS authors(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "firstName TEXT, " +
                "lastName TEXT, " +
                "dateCreated TIMESTAMP DEFAULT(datetime('now', 'localtime')))"
            );
        }

        
    },
    insertRecord: function (firstName, lastName) {
        var db = this.openDb('2.0');
        db.transaction(function (t) {
            t.executeSql('INSERT INTO authors(firstName, lastName) VALUES(?, ?)',
                [firstName, lastName],
                function (transaction, results) {
                    console.log('Inserted Id:', results.insertId);
                });
        }, this.onError, this.onSuccess('record inserted'));
    },
    updateRecord: function (authorId, newFirstName, newLastName) {
        var db = this.openDb('2.0');
        db.transaction(function (t) {
            t.executeSql('UPDATE authors SET firstName = ?, lastName = ? WHERE id = ?',
                [newFirstName, newLastName, authorId]);
        }, this.onError, this.onSuccess('record updated!'));
    },
    deleteRecord: function (authorId) {
        var db = this.openDb('2.0');
        db.transaction(function (t) {
            t.executeSql('DELETE FROM authors WHERE id = ?', [authorId]);
        }, this.onError, this.onSuccess('record deleted!'));
    }
};

window.onload = function () {
    var txtKey = document.getElementById('txtKey'),
        txtVal = document.getElementById('txtVal');
    document.getElementById('btnCreateDb').addEventListener('click', function () {
        try {
            var db = webSqlApp.openDb('1.0');
            webSqlApp.onSuccess('db created.');
        } catch (error) {
            console.log('Database already created');
        }
    });
    document.getElementById('btnAddTable').addEventListener('click', function () {
        // var db = webSqlApp.openDb('Library', '1.0', 'My library', 5 * 1024 * 1024);
        // db.changeVersion('1.0', '2.0', this.migrateDB, this.onError, this.onSuccess);
        var db;
        try {
            db = webSqlApp.addTable();
        } catch (error) {
            console.log('Table already exists')
        }
    });
    document.getElementById('btnInsertRecord').addEventListener('click', function () {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        webSqlApp.insertRecord(firstName, lastName);
    });
    document.getElementById('btnUpdateRecord').addEventListener('click', function () {
        var authorId = document.getElementById('authorId').value;
        var newFirstName = document.getElementById('newFirstName').value;
        var newLastName = document.getElementById('newLastName').value;
        webSqlApp.updateRecord(authorId, newFirstName, newLastName);
    });
    document.getElementById('btnDeleteRecord').addEventListener('click', function () {
        var authorId = document.getElementById('delAuthorId').value;
        webSqlApp.deleteRecord(authorId);
    });
};