import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";
import "tachyons";

//Imports
import {books} from './books';
import Book from './Book';





// const namesMap = books.map((book) => {
//   return <Book key={book.id} book={book} />
// })

const Booker1 = (props) => {
  return (
    <section className="booker">
      {books.map((book, index) => {
        return <Book id={index} {...book} />;
      })}
      
    </section>
  );
};

//Events Responsiveness eventHandler

function BookList() {
  return (
    <section className="booklist">
      {books.map((book,index) => {
        console.log(book);
        return <Book key={book.id} {...book}></Book>;
      })}
      
    </section>
  );
}




//leaern keyboard shortcuts cheatsheet {} = js land

const title = "Love You Mama";
const author = "Mac Don";
const image =
  "https://i.pinimg.com/236x/0d/2c/6e/0d2c6e44055cf5f5642608a302359c30--a-dogs-purpose-dog-stories.jpg";

const Book1 = (props) => {
  return (
    <article className="book">
      <img src={image} />
      {console.log(props)}
      <h1>{title.toUpperCase()}</h1>
      <h2>{author} </h2>
      <h3>{props.num} </h3>
      <p>{2 + 2} </p>
    </article>
  );
};




ReactDom.render(
  <BookList />,
  document.getElementById("root")
);
