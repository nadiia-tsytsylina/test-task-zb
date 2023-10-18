import { DealItem, Title, List, Item } from "./Deal.styled";

export default function Deal({ deal }) {
  const totalPriceString = deal.totalPrice.toLocaleString("ua");
  const ticketPriceString = deal.ticketPrice.toLocaleString("ua");

  return (
    <DealItem
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(23, 34, 52, 0.2),
      rgba(23, 34, 52, 0.2)
    ), url(${deal.img})`,
      }}
    >
      <div>
        <Title>{deal.name}</Title>
        <List>
          <Item>{totalPriceString} Dhs</Item>
          <Item>Yield {deal.yield}%</Item>
          <Item>Sold {deal.sold}%</Item>
          <Item>Tiket - {ticketPriceString} Dhs</Item>
          <Item>Days left {deal.days}</Item>
        </List>
      </div>
    </DealItem>
  );
}
