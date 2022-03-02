function solution(progresses, speeds) {
    const answer = [];
    const arr = progresses;
    const spd = speeds;

    while(arr.length > 0){
        let mul = minMul(arr[0], spd[0]);
        const length = arr.length;
        for(let i = 0; i < length; i++){
            arr[i] += mul*spd[i];
        }

        let count = 0;
        for(let i = 0; i < length; i++){
            if(arr[i] >= 100){
                count++;
            } else {
                break;
            }
        }
        answer.push(count);
        arr.splice(0, count);
        spd.splice(0, count);
    }
    
    return answer
}

function minMul (num, addNum){
    let count = 0;
    while(num < 100){
        num += addNum;
        count++;
    }

    return count
}
