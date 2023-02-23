function maxSubArray(A) {
    let maxSoFar = A[0];
    let maxEndingHere = A[0];
    
    for (let i = 1; i < A.length; i++) {
        maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
console.log(maxSubArray([4,-1,2,1]));