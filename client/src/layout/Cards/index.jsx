import "./style.scss";
import { Col, Row } from 'antd';
import { Card } from 'antd';
import { useEffect, useState } from "react";
import { getAllData } from "../../assets/services";
const { Meta } = Card;

const Cards = () => {

  const [product, setProduct] = useState(null);


useEffect(()=>{
getAllData().then((res)=>{
  setProduct(res.data.data)
})
},[])


  return (
    <>
      <section id="card">
<div className="text-card">
<h1>Our Products</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
</div>
{/* CARD ---------------------------------------------------------------------- */}
<div className="container">
<Row gutter={16}>
    {
      product && product.map((p)=>{
        return (
          <Col className="gutter-row" span={6} key={p._id}>
          <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={p.imageUrl} />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
          </Col>
        )
      })
    }
    </Row>
</div>

      </section>
    </>
  )
}

export default Cards
