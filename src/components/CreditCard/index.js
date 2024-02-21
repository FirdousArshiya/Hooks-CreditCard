// Write your code here

import {useState} from 'react'

import {
  BgCont,
  Heading,
  HrLine,
  ImageCont,
  CardNum,
  CardTitle,
  CardUserName,
  PaymentCont,
  PaymentDetailsCont,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNum] = useState('')
  const [userName, setUserName] = useState('')

  const onChangeCardNum = event => {
    setCardNum(event.target.value)
  }
  const onChangeCardName = event => {
    setUserName(event.target.value)
  }

  return (
    <>
      <BgCont data-testid="creditCard">
        <Heading>CREDIT CARD</Heading>
        <HrLine />
        <ImageCont>
          <CardNum>{cardNumber}</CardNum>
          <CardTitle>CARDHOLDER NAME</CardTitle>
          <CardUserName>{userName}</CardUserName>
        </ImageCont>
      </BgCont>
      <PaymentCont>
        <PaymentDetailsCont>
          <Heading>Payment Method</Heading>
          <InputElement
            type="text"
            onChange={onChangeCardNum}
            placeholder="Card Number"
          />
          <InputElement
            type="text"
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
          />
        </PaymentDetailsCont>
      </PaymentCont>
    </>
  )
}
export default CreditCard
