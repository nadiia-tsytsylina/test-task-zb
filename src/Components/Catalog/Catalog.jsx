import { useSelector } from 'react-redux';
import { selectDeals } from '../../redux/selectors';

import { Container, Title, List } from './Catalog.styled';
import Deal from '../../Components/Deal/Deal';

export default function Catalog() {
  const deals = useSelector(selectDeals);

  return (
    <Container>
      <Title>Open Deals</Title>
      {deals && (
        <List>
          {deals.map((deal) => (
            <li key={deal._id}>
              <Deal deal={deal} />
            </li>
          ))}
        </List>
      )}
    </Container>
  );
}
