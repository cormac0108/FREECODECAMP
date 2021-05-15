import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";
import "tachyons";

// function Greeting() {
//   return <h4>Hello James</h4>;
// }

//stateless functional component
//always return jsx

// const Greeting = () => {
//   return (
//     <div>
//       <h1>Hello World </h1>
//     </div>
//   );
// };

// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello"));
// };

// const Greeting = () => {
//   return (
//     <React.Fragment>
//       <section onClick={() => {alert("Hello")}}>
//         <article className='hello'>
//           <h1>Hello World</h1>
//           <p>How do</p>
//         </article>
//       </section>
//     </React.Fragment>
//   );
// };

// function BookList() {
//   return (
//     <section className="Favorite">
//       <Person />
//       <Message />
//     </section>
//   );
// }

// const Person = () => <h4>Johnny</h4>;
// const Message = () => {
//   <h2>Hello To You Sir</h2>;
// };

const firstBook = {
  author: "Matt Haig",
  title: "The Midnight Library: A Novel",
  img1: "https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg",
  img: "https://www.easons.com/globalassets/5637150827/all/books/childrens/childrens-picture-bk/0-to-4-years/9781848690691.jpg",
};

const secondBook = {
  author: "Don Miguel Ruiz",
  author2: "Cormac",
  title: "The Four Agreements: A Practical Guide",
  img: "https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg",
};

const thirdBook = {
  author: "Michael Angel",
  img: "https://i.pinimg.com/236x/0a/71/04/0a710443a9a0502e35f798fcada8311d.jpg",
  title: "Johnny Run",
};

function BookList() {
  return (
    <div>
      <h1 className="text text-1">Amazon Best Seller</h1>
      <section className="booklist">
        <Book
          title={firstBook.title}
          img={firstBook.img}
          author={firstBook.author}
        />
        <Book
          author={thirdBook.author}
          img={thirdBook.img}
          title={thirdBook.title}
        />
        <Book1 job="developer" num={23} />
        <Book
          title={secondBook.title}
          img={secondBook.img}
          author={secondBook.author}
          author2={secondBook.author2}
        />
        <BookBob firstName={bobbook.firstName} lastName={bobbook.lastName} />
        <Booker
          img1={firstBook.img1}
          author={firstBook.author}
          title={firstBook.title}
        />
        {/* <DanceOff
          secondLog={imagine.secondLog}
          author={imagine.author}
          img={imagine.img}
        />
        <Runner
        image={imagine.imager}
         author={imagine.author}
          secondLog={imagine.secondLog} /> */}
      </section>
    </div>
  );
}
const bobbook = {
  firstName: "BOBBY",
  lastName: "Book",
};
const BookBob = ({ firstName, lastName }) => {
  return (
    <section className="book">
      <h1>{firstName} </h1>
      <h2>{lastName} </h2>
    </section>
  );
};

const Book = ({ img, author, author2, title }) => {
  return (
    <article className="book ma3">
      <img src={img} />
      <h1>{title} </h1>
      <h4>{author} </h4>
      <h4>{author2} </h4>
    </article>
  );
};
//leaern keyboard shortcuts cheatsheet {} = js land

//Vars for book1
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

const Booker = (props) => {
  const { img1, title, author } = props;
  return (
    <section className="book">
      <img src={img1} />
      <h1>{title} </h1>
      <h2>{author} </h2>
    </section>
  );
};

// const Runner = (props) => {
//   const { author, secondLog,image } = props;
//   const title = "Hello";
//   const bandana = imagine.author;
//   return (
//     <section className="book">
//       <h1>{author} </h1>
//       <h2>{title} </h2>
//       <h3>{bandana} </h3>
//       <h3>{secondLog} </h3>
//     </section>
//   );
// };

// const DanceOff = ({ img, author, secondLog }) => {
//   return (
//     <article className="dance-off">
//       <h1>{author}</h1>
//       <h4>{secondLog} </h4>
//     </article>
//   );
// };

ReactDom.render(<BookList />, document.getElementById("root"));
