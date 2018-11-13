function print (expression) {
    console.log(expression.split(/[.();,\s]+/g).join('\n'));
}

// .replace(/\s*,\s*/, ' let ')
print('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');