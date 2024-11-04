import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  books: Book[] = [
    new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 1925, false),
    new Book(2, 'The Catcher in the Rye', 'J.D. Salinger', '9780316769488', 1951, false),
  ];

  create(createBookDto: CreateBookDto) {
    this.books.push(new Book(this.books.length+1, createBookDto.title, createBookDto.author, createBookDto.isbn, createBookDto.publishYear, false));
    return {StatusCode: 201, Message: 'Created'};
  }


  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const book = this.books.find(book => book.id === id);
    if (book) {
      book.title = updateBookDto.title;
      book.author = updateBookDto.author;
      book.isbn = updateBookDto.isbn;
      book.publishYear = updateBookDto.publishYear;
      return {StatusCode: 200, Message: 'OK', book: book};
    }
    
  }

  remove(id: number) {
    this.books = this.books.filter(book => book.id !== id);
    return {StatusCode: 204, Message: 'No Content'}; ;
  }
}
