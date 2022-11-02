function heapify(arr){
    // tu código va aquí
    let childIndx = arr.length - 1;
    // console.log(childIndx)
    let childIndx1
    let childIndx2
    let tempChild;
    let parentIndx;

    if(arr[0]!= undefined){
        arr.push(undefined);
        tempChild = arr[childIndx + 1];
        arr[childIndx + 1] = arr[0];
        arr[0] = tempChild;
        childIndx = arr.length - 1;
        // console.log(childIndx)
    }

    parentIndx = Math.trunc(childIndx / 2);
    // console.log(parentIndx);
    childIndx1 = parentIndx * 2
    // console.log(childIndx1);
    childIndx2 = parentIndx * 2 + 1
    // console.log(childIndx2);

    while(parentIndx > 0){
        // console.log(arr[parentIndx])
        // console.log(arr[childIndx2])
        // console.log(arr[childIndx1])
        if(arr[parentIndx] > arr[childIndx2]){
            tempChild = arr[childIndx2]
            // console.log(tempChild);
            arr[childIndx2] = arr[parentIndx];
            // console.log(arr[childIndx2]);
            arr[parentIndx] = tempChild;
            // console.log(arr[parentIndx]);
            parentIndx --;
            // console.log(parentIndx);
            childIndx1 = parentIndx * 2
            // console.log(childIndx1);
            childIndx2 = parentIndx * 2 + 1
            // console.log(childIndx2);
        }
        else if(arr[parentIndx] > arr[childIndx1]){
            tempChild = arr[childIndx1]
            // console.log(tempChild);
            arr[childIndx1] = arr[parentIndx];
            // console.log(arr[childIndx1]);
            arr[parentIndx] = tempChild;
            // console.log(arr[parentIndx]);
            parentIndx --;
            // console.log(parentIndx);

            childIndx1 = parentIndx * 2
            // console.log(childIndx1);
            childIndx2 = parentIndx * 2 + 1
            // console.log(childIndx2);

        }
    }

    console.log(arr)
    }
    // salidas de muestras
heapify([20, 3, 8, 14, 9, 6, 2]);
    // altera el array a [undefined, 2, 6, 3, 9, 8, 14, 20]
    