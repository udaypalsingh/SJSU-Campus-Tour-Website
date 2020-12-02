SJSU Campus Tour Website Setup Guide:
(https://github.com/udaypalsingh/SJSU-Campus-Tour-Website)

1. Clone the repository to a local machine.

2. Open VS Code or any text editor which supports JavaScript or npm packages

3. Open sjsu-campus-tour-react.js in VS Code terminal

4. run 'npm install'

5. run 'npm start'

6. Default browser will automatically visit (http://localhost:3000/). If it doesn't open the browser automatically, visit (http://localhost:3000/) in your prefered browser

7. Open another terminal on VS Code, and open directory sjsu-campus-tour-server

8. run 'npm install'

9. run 'npx nodemon' or 'nodemon index.js'

10. To test the server, open browser and visit (http://localhost:4040/). The webpage should disp  lay "Welcome to SJSU Buldings database".


To install MongoDb and import SJSU Database, follow the following instructions:

1. To install MongoDb, follow this link (https://docs.mongodb.com/manual/installation/)

2. After installing MongoDb successfully, paste the import-sjsu-buildings.csv file in the bin folder of MongoDb

3. Press Ctrl+L and type cmd (Windows) or Right click and open terminal (mac)

4. type 'mongoimport --type csv -d [database name] -c [collection name] --headerline --drop import-sjsu-buildings.csv
