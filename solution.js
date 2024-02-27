// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here
    const N = A.length;

   
    if (N === 0 || K % N === 0) {
        return A;
    }

    
    K = K % N;


    const rotatedArray = new Array(N);

    
    for (let i = 0; i < N; i++) {
        const newIndex = (i + K) % N;
        rotatedArray[newIndex] = A[i];
    }

    return rotatedArray;
}


const exampleArray1 = [3, 8, 9, 7, 6];
const rotationCount1 = 3;
console.log(solution(exampleArray1, rotationCount1)); 

const exampleArray2 = [0, 0, 0];
const rotationCount2 = 1;
console.log(solution(exampleArray2, rotationCount2));

const exampleArray3 = [1, 2, 3, 4];
const rotationCount3 = 4;
console.log(solution(exampleArray3, rotationCount3));
