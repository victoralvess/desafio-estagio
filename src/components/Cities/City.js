import styled from 'react-emotion';

const Li = styled('li')`
display: flex;
align-items: center;
padding: 1em;
:hover {
  background: whitesmoke;
}
`;

const CityName = styled('span')`
margin-left: 1em;
font-size: 1.1em;
`;

export default function({name}) {
  return (
    <Li>
      <img src="https://png.icons8.com/color/60/000000/pin-2.png" alt={`Ícone de ${name}`} title="Ícone"/>
      <CityName>{name}</CityName>
    </Li>
  );
};