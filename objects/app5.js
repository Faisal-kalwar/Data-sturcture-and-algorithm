let books = [
    {
        name: 'The Lean Startup',
        topics: ['entrepreneurship','startups'],
    
    },
    {
        name: 'War and Peace',
        topics: ['peace', 'politics'],
    
    }];
    for (i = 0; i < books.length; i++){
        books[i] = books [i + 1]
    }
    books.length = books.length-1;
    console.log(books)