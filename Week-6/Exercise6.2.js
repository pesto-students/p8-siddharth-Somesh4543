function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const m = matrix.length;
    const n = matrix[0].length;
    const result = [];
    
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
    
    while (top <= bottom && left <= right) {
      // Traverse top row from left to right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      
      // Traverse right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      
      // Traverse bottom row from right to left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
      
      // Traverse left column from bottom to top
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
    
    return result;
  }
console.log(spiralOrder([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]))  