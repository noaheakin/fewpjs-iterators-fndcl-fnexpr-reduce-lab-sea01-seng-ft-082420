const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function totalBatteries (batteryBatches) {
    finalTally = 0
    batteryBatches.reduce(e => finalTally += e)
    return finalTally
}
