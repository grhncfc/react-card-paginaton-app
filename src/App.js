import React, {useState, useEffect , useRef} from 'react';
import styles from './App.module.css'
import cardData from "./assets/Data";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Input from "./components/Input/Input";
import Form from "./components/Form/Form";
import Switch from "./components/Switch/Switch"

function App() {
  const [toggle,setToggle] = useState(false);
  const [style,setStyle] = useState({});
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
  }
  const onInputSubmit = e => {
    setCardsPerPage(inputRef.current.displayPerPage);
    setFilterState(inputRef.current.search);
    paginate(1);
  }
  const styleChange = e => {
    setToggle(toggle ? false:true);
    setStyle(toggle ? {background: "linear-gradient(135deg, #E3E3E3 0%,#5D6874 100%)"} : {background: "black"});
    console.log(toggle);
  };
  return (
      <div className={styles.container}>
        <Form onSubmit={onInputSubmit}>
          <Switch checked={toggle} onChange={styleChange} />
          <Input type={"text"} name={"search"} onChange={onInputChanger} />
          <Input type={"number"} name={"displayPerPage"}  onChange={onInputChanger} />
        </Form>
        <Card style ={style} cards={currentCard} loading={loading}/>
        <Pagination cardsPerPage={parseInt(cardsPerPage)} totalCards={newCurrentCard.length} paginate={paginate}/>
      </div>
  );
}
export default App;
