type AnyFunction = (...args: any[]) => any;

const afterOneSecond = (callback?: AnyFunction) => {
    console.log('count from now');
    setTimeout(() => {
        console.log('time for now');
        callback && callback();
    }, 1000)   
}

export default afterOneSecond;