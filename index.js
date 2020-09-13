// assuming the items of the library are in the type
// [..., ..., {title:'Sample', DDS:'123.45'}]

function deweySearch(systemArr, value, title, start, end) {
    let start = start === undefined ? 0 : start;
    let end = end === undefined ? systemArr.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = systemArr[index].DDS;

    console.log(start, end);
    if (item == value) {
        // checks down from landing until it finds the result
		let result = linearSearch(systemArr, index, false, value, title);
        if (result !== -1) {
            return result;
        } else {
			// if fail, check up from landing
            result = linearSearch(systemArr, index, true, value, title);
            if (result !== -1) {
                return result;
            } else {
				// if double fail, throw error
				throw new Error('Result not found')
			}
        }
    } else if (item < value) {
        return binarySearch(systemArr, value, title, index + 1, end);
    } else if (item > value) {
        return binarySearch(systemArr, value, title, start, index - 1);
    }
}

// because multiple books can be in one decimal value, need to check
// titles once you land in the range. This is basically indexOf, but 
// starting in the middle of the array and kicking back a flag to
// switch directions when necessary
function linearSearch(array, index, direction, value, title) {
    if (array[index].DDS != value) {
        return -1;
    }
    if (array[index].title === title) {
        return index;
    } else {
        let newIndex = direction ? index + 1 : index - 1;
        return linearSearch(array, newIndex, direction, value, title);
    }
}



