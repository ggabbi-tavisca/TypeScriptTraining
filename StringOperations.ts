let statements:string

statements= `Here is a sample paragraph. this paragraph is used for doing string operations`

statementCase(statements)
noOfWords(statements)
findACharacter(statements, 'a')
duplicateWords(statements)

function statementCase(statements: string){
    let modifiedString: string = statements[0]
    for(let index = 1; index < statements.length - 1; index++)
    {
        if(statements[index-1] === '.')
           modifiedString += statements[index].toUpperCase()
        else
            modifiedString += statements[index]
    }
    console.log(modifiedString)
}

function noOfWords(statements: string){
    let count: number = 0
    for(let index = 0; index < statements.length; index++)
    {
        if(statements.charAt(index) === ' ')
            count++;
    }
    console.log()
    console.log(`No. of words = ${count+1}`)
}

function findACharacter(statements: string, characterToSearch: string){
    let words = statements.split(' ')
    let listOfWordsHavingA: Array<string> = []

    for(let word of words){
        if(contains(word, characterToSearch))
        {
            listOfWordsHavingA.push(word)
        }
    }
    console.log()
    console.log(`List of words containing : ${characterToSearch}`)
    console.log(listOfWordsHavingA)
}

function duplicateWords(statements : string){
    let words = statements.split(' ')
    words.sort()
    let count : number = 0

    console.log()
    let temp = words[0]
    for(let index = 1; index < words.length; index++){
        let count = 1
        if(temp === words[index])
            count++
        else
            temp = words[index]

        if(count > 1)
            console.log(`The word '${temp}' occurs ${count}`);
        
    }
}

function contains(word: string, c: string){
    return word.indexOf(c)>-1
}
