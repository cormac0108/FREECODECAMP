import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

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
  img: "https://www.easons.com/globalassets/5637150827/all/books/childrens/childrens-picture-bk/0-to-4-years/9781848690691.jpg",
};

const secondBook = {
  author: "Don Miguel Ruiz",
  author2: "Cormac",
  title: "The Four Agreements: A Practical Guide",
  img: "https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg",
};

const imagine = {
  author: "Cormac",
  secondLog: "D",
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
          title={secondBook.title}
          img={secondBook.img}
          author={secondBook.author}
          author2={secondBook.author2}
        />
        <DanceOff
          secondLog={imagine.secondLog}
          author={imagine.author}
          img={imagine.img}
        />
      </section>
    </div>
  );
}

const Book = ({ img, author, author2, title }) => {
  return (
    <article className="book">
      <img src={img}/>
      <h1>{title} </h1>
      <h4>{author} </h4>
      <h4>{author2} </h4>
    </article>
  );
};

const DanceOff = ({ img, author, secondLog }) => {
  return (
    <article className="dance-off">
      
      <h1>{author}</h1>
      <h4>{secondLog} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
