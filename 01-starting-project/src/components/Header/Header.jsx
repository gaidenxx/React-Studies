import './Header.css';
import reactHeaderImg from '../../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental','Crucial','Core'];

function getRandomInt(max = reactDescriptions.length - 1) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt()];
  
    return (
      <header>
        <img src={reactHeaderImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }