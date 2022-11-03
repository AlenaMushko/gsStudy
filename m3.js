const books = {
  items: [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
  ],
  
  getBooks() { return this.items },

  addBook(book) {
   
    for (const item of this.items) {
    console.log(item.title);
      // if (book.title === item.title) {
       
      //   item.quantity += 1;
      //   return;
      // }
    }
      const newBook = {
        ...book,
        quantity: 1,
      };

      this.items.push(newBook);
      
    }
   


    // deliteBook(productName) {
    //   for (let i = 0; i < this.items.length; i += 1){
    //     console.log(this.items[i]);

    //     if (this.items[i].title === productName) {
    //       console.log(i);
    //             this.items.splice(i, 1);
    //     };
    //   };
    // },

    // clear() { this.items = []; },

    // totalRating() {
    //   let itemTotal = 0;
    //   for (const item of this.items) {
    //     itemTotal += item.rating;
    //     return itemTotal /this.items.length;
    //   }
    //   // 2)
    //   for (let i = 0; i < this.items.length; i += 1) {
    //     itemTotal += this.items[i].rating;
  
    //   } 

    //   const itemMidlTotal = itemTotal / this.items.length; 
    //   return itemMidlTotal;
    // },

//   }
}

console.table(books.items);
books.addBook();

console.log(books. addBook({
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
}));
console.table(books.items);