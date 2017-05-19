var fs = require('fs');

fs.readFile("./error/data.txt", "utf8", function(error, data) {
    if (error) throw error;
    console.log(data);  
});

//fs.renameSync("dataset.txt", "data.txt");

fs.open('./error/data_codegenerated.js', 'a+', (err, fd) => {});

process.on("uncaughtException", function(error){
    console.log("The exception was caught!");
    console.log(error);
})