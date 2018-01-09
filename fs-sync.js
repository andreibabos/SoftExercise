var fs = require('fs');

if(fs.existsSync('temp')){               //exista folder
    console.log('Directory exists');
    if(fs.existsSync('temp/new.txt')){   //exista fisier 
        fs.unlinkSync('temp/new.txt');  //sterge fisier

    }
    fs.mkdirSync('temp');
}

fs.mkdirSync('temp');           //creez folder
if(fs.existsSync('temp')){      //exista folder
    process.chdir('temp');      //intru in folder 
    fs.writeFileSync('test.txt', 'This is blablla');  //creez is scriu in fisier
    fs.renameSync('test.txt','new.txt');              // rename fisier
    console.log('File has size' + fs.statSync('new.txt').size + 'bytes');
    console.log('File contents: ' + fs.readFileSync('new.txt').toString());
}