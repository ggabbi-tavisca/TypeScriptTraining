var statements;
statements = "Here is a sample paragraph. this paragraph is used for doing string operations";
statementCase(statements);
noOfWords(statements);
findACharacter(statements, 'a');
duplicateWords(statements);
function statementCase(statements) {
    var modifiedString = statements[0];
    for (var index = 1; index < statements.length - 1; index++) {
        if (statements[index - 1] === '.')
            modifiedString += statements[index].toUpperCase();
        else
            modifiedString += statements[index];
    }
    console.log(modifiedString);
}
function noOfWords(statements) {
    var count = 0;
    for (var index = 0; index < statements.length; index++) {
        if (statements.charAt(index) === ' ')
            count++;
    }
    console.log();
    console.log("No. of words = " + (count + 1));
}
function findACharacter(statements, characterToSearch) {
    var words = statements.split(' ');
    var listOfWordsHavingA = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (contains(word, characterToSearch)) {
            listOfWordsHavingA.push(word);
        }
    }
    console.log();
    console.log("List of words containing : " + characterToSearch);
    console.log(listOfWordsHavingA);
}
function duplicateWords(statements) {
    var words = statements.split(' ');
    words.sort();
    var count = 0;
    console.log();
    var temp = words[0];
    for (var index = 1; index < words.length; index++) {
        var count_1 = 1;
        if (temp === words[index])
            count_1++;
        else
            temp = words[index];
        if (count_1 > 1)
            console.log("The word '" + temp + "' occurs " + count_1);
    }
}
function contains(word, c) {
    return word.indexOf(c) > -1;
}
