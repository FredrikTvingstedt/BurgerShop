import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../cart/StoreItem"
import storeItems from "../../data/items.json"

export function Menu() {
  return (
  <section id="store"> 
    <>
      <h1>Menu</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
    </section>
  )
}


