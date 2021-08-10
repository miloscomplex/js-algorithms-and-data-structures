function bubbleSort(arr, comparator) {

    if (typeof comparator !== 'function') {
        comparator = (j,k) => {
            return j-k;
        };
    }

    let end = arr.length;
    let swap = true;
    while (end > 0 && swap) {
        swap = false;
        for (let i = 0; i < end - 1; i++) {
            if (comparator(arr[i], arr[i+1]) > 0) {
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                swap = true;
            }
        }
        end--;
    }
    return arr;
}
