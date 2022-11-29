import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useUI, useProvideCart } from 'hooks'
import './CartItem.scss'
import { ItemCounter } from 'components'

export default function CartItem({ item }) {
  const { closeSidebar } = useUI()
  const { removeAllItems } = useProvideCart()
  return (
    <div className='item-box'>
      <div className='item-details'>
        <Container>
          <Row className='mb-2 align-items-center'>
            <Col key={item} xs='9'>
              <div className='d-flex align-items-center'>
                <Image
                  className='item-image mr-2'
                  src={`/${item.productImage}`}
                />
                <Link
                  to={`/p/${item._id}`}
                  className='item-link one-line-ellipsis'
                  onClick={closeSidebar}
                >
                  <h4>Product Name</h4>
                  <p>
                    { item.name }               
                    </p>
                </Link>
              </div>
            </Col>
            <Col key={item._id} xs='3' className='text-right'>
              <Button
                aria-label={`remove Product Name from cart`}
                className='hover:text-gray-500 transition ease-in-out duration-150'
                onClick={() => removeAllItems(item._id)}
              >
                <FontAwesomeIcon size='xs' icon={faTrash} />
              </Button>
            </Col>
          </Row>
          <Row className='mb-2 align-items-center'>
            <Col key={item._id} xs='9'>
              <p className='item-label'>price</p>
            </Col>
            <Col key={item._id} xs='3' className='text-right'>
              <p className='price item-value'>{` $${item.price}`}</p>
            </Col>
          </Row>
          <Row className='mb-2 align-items-center'>
            <Col key={item._id} xs='6'>
              <p className='item-label'>quantity</p>
            </Col>
            <Col key={item} xs='6' className='text-right'>
              <ItemCounter item={item} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
