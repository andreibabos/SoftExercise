process.stdin.resume(); // the input in's default on pause, we nee to resume it to begin
process.stdin.setEncoding('utf8');

process.stdin.on('data',function(chunk){
    process.stdout.write('data! ' +chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('End!\n');
});