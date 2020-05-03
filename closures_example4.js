let star;
function initialize(){
    let called = 0;
    return function(){
        if(called > 0){
            return;
        } else {
            star = '*';
            console.log('Star Created in the Galaxy');
            called++;
        }
    }
}

const startOnce = initialize();
startOnce();
console.log(star);