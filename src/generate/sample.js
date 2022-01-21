/** Drawing Generator Demo Program */

// folder root
const outputRoot = __dirname + '/output';

// require
const { createCanvas } = require("canvas");
const { writeFileSync } = require("fs");

// sample generator function
function createSample(){
    const width = 1200;
    const height = 600;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 12, 12);

    const buffer = canvas.toBuffer("image/png");
    writeFileSync(outputRoot + "/sample.png", buffer);
};

// export
module.exports = { createSample };
