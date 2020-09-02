//libraries
import React, {useState, useEffect , useRef} from 'react';
//components
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Input from "./components/Input/Input";
import Form from "./components/Form/Form";
//assets
import cardData from "./assets/Data";
//styles
import './App.css';

function App() {
  const [cards,setCards] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [cardsPerPage,setCardsPerPage] = useState("3");
  const [filterState,setFilterState] = useState('');
  const inputRef = useRef({displayPerPage: '3', search: ''});

  useEffect(()=>{
    setCards(cardData);
  },[]);

/* Get the current card */
  const indexOfLastCard = currentPage * parseInt(cardsPerPage);
  const indexOfFirstCard = indexOfLastCard - parseInt(cardsPerPage);
  const currentCard = cards.filter( (item) => item.author.toLowerCase().includes(filterState.toLowerCase())).slice(indexOfFirstCard, indexOfLastCard);
  const newCurrentCard = cards.filter( (item) => item.author.toLowerCase().includes(filterState.toLowerCase())) ;
  /* Change page */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onInputChanger = e => {
    inputRef.current[e.target.name] = e.target.value;
  };

  const onInputSubmit = e => {
    setCardsPerPage(inputRef.current.displayPerPage);
    setFilterState(inputRef.current.search);
    paginate(1);
  };

  return (
      <div className={"container"}>
        <Form className="formStyle" onSubmit={onInputSubmit}>
          <Input type={"text"} name={"search"} onChange={onInputChanger} />
          <Input type={"number"} name={"displayPerPage"}  onChange={onInputChanger} />
        </Form>
        <Card cards={currentCard} loading={loading}/>
        <Pagination cardsPerPage={parseInt(cardsPerPage)} totalCards={newCurrentCard.length} paginate={paginate}/>
      </div>
  );
}
export default App;
