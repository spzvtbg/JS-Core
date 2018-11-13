function print (array) {
    let purchase = array.reduce((endObject, currentElement, currentIndex) => {
        if (currentIndex % 2 === 0) {
            endObject.products.push(currentElement);
        } else {
            endObject.totalSum += +currentElement;
        }

        return endObject;
    }, { products: [], totalSum: 0});

    console.log(`You purchased ${purchase.products.join(', ')} for a total sum of ${purchase.totalSum}`);
}

print(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);