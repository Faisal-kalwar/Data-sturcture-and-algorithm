let books = [
    {
        name: 'The Lean Startup',
        topics: ['entrepreneurship','startups'],
    
    },
    {
        name: 'War and Peace',
        topics: ['peace', 'politics'],
    
    }];
    // At start
    for(i = books.length-1;i>0;i--){
        books[i] = books[i-1];
    }
    books[0] = {name:'JavaScript', topics:['Fundamental JavaScript','Advance JavaScript']};
    console.log(books)

    // At End
    books.length = books.length+1;
    books[books.length-1]= {name: 'Introducation to statistics', 
    topics: ['Probability','Statistical Measure of Data']}
    console.log(books)