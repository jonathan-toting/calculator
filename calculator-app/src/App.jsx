// Components
import Wrapper from './components/Wrapper.jsx';
import Screen from './components/Screen.jsx';
import ButtonGrid from './components/ButtonGrid.jsx';
import Button from './components/Button.jsx';
import CalcProvider from './components/CalcContext.jsx';
// Styling
import './styles/index.css'

const ButtonMetadata = [
  [
    {label: 'π', styleClass: 'sym'},
    {label: 'e', styleClass: 'sym'},
    {label: 'c', styleClass: 'fun'},
    {label: '÷', styleClass: 'opt'},
  ],
  [
    {label: '7', styleClass: 'dig'},
    {label: '8', styleClass: 'dig'},
    {label: '9', styleClass: 'dig'},
    {label: '×', styleClass: 'opt'},
  ],
  [
    {label: '4', styleClass: 'dig'},
    {label: '5', styleClass: 'dig'},
    {label: '6', styleClass: 'dig'},
    {label: '-', styleClass: 'opt'},
  ],
  [
    {label: '1', styleClass: 'dig'},
    {label: '2', styleClass: 'dig'},
    {label: '3', styleClass: 'dig'},
    {label: '+', styleClass: 'opt'},
  ],
  [
    {label: '+/-', styleClass: 'fun'},
    {label: '0', styleClass: 'dig'},
    {label: '.', styleClass: 'fun'},
    {label: '=', styleClass: 'fun'},
  ],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonGrid>
            {ButtonMetadata.map((row, rowIndex) => (
              <div key={rowIndex} className='grid-row'>
                {row.map((button, buttonIndex) => (
                  <Button btnKey={buttonIndex} btnStyle={button.styleClass} btnValue={button.label} />
                ))}
              </div>
            ))}
          </ButtonGrid>
      </Wrapper>
    </CalcProvider>
  )
}

export default App
