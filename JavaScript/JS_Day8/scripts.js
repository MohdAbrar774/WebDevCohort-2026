function createOptimizedVersion(){

    const cache ={};

    return function(...args){
        const key = JSON.stringify(args);

        if(cache[key]){
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function add(a,b){
    const result = a+b;
    return result;
}

function square(n){
    return n * n;
}