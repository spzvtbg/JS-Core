function printType(input) {
    const fruits = 'banana, apple, kiwi, cherry, lemon, grapes, peach';
    const vegetable = 'tomato, cucumber, pepper, onion, garlic, parsley';

    console.log(fruits.indexOf(input) >= 0 ? 'fruit' : vegetable.indexOf(input) >= 0 ? 'vegetable' : 'unknown');
}