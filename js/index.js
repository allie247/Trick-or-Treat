
const Candies = new Array(
    'M&Ms',
    'Kit Kat',
    'Sour Patch Kids',
    'Hershey Kisses',
    'Candy Corn'
);

const paragraph = document.getElementById('image');

function randomCandy() {
    const randomNum = Math.floor((Math.random() * 5) + 0);
    chosenCandy = Candies[randomNum];
    if (chosenCandy == 'M&Ms') {
        paragraph.src = "images/m&ms.jpeg"
    }
    else if (chosenCandy == 'Kit Kat') {
        paragraph.src = "images/kitkat.jpeg"
    }
    else if (chosenCandy == 'Sour Patch Kids') {
        paragraph.src = "images/sourpatch.jpeg"
    }
    else if (chosenCandy == 'Hershey Kisses') {
        paragraph.src = "images/hersheys.jpeg"
    }
    else if (chosenCandy == 'Candy Corn') {
        paragraph.src = "images/candycorn.jpeg"
    }
};
