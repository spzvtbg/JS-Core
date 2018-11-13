function print (length, kCount) {
    const resultSequence = [1];
    
    for (let index = 1; index < +length; index++) {
        const resultSequenceLength = resultSequence.length;

        let sum = 0;
        let sliceIndex = resultSequenceLength - +kCount;

        sliceIndex = sliceIndex <= 0 ? 0 : sliceIndex;
        resultSequence
            .slice(Math.abs(sliceIndex))
            .map(element => sum += element);
        resultSequence.push(sum);
    }

    console.log(resultSequence.join(' '));
}

print(8, 2);