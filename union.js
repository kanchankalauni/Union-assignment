function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
        typeof obj1 !== "object" ||
        typeof obj2 !== "object" ||
        obj1 === null ||
        obj2 === null
    ) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

function union(arr1, arr2) {
    const result = [];

    [...arr1, ...arr2].forEach((item) => {
        let isDuplicate = false;

        for (let i = 0; i < result.length; i++) {
            if (deepEqual(result[i], item)) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result.push(item);
        }
    });

    return result;
}

module.exports = union