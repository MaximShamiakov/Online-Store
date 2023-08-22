import React, { useState } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { myOrders } from '../../redux/actions/myOrders';
import { removeCartItem } from '../../redux/actions/cart';

export default function OrderForm(props) {

  const dispatch = useDispatch();
  const itemsCart = useSelector(({ cart }) => cart.items);
  const idOrder = localStorage.getItem('id');
  const quantity = itemsCart[idOrder] ? itemsCart[idOrder].items.length : null;
  const itemsModels = useSelector(({ models }) => models.items[idOrder]);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    patronymic: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    comment: "",
    product_id: idOrder,
    quantity: quantity,
    key: localStorage.getItem('key')
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      //метод "trim()  удаления пробелов в начале и конце строки 
      formData.lastName.trim() === "" ||
      formData.firstName.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.email.trim() === "" ||
      formData.city.trim() === "" ||
      formData.address.trim() === ""
    ) {
      console.log("Заполните все обязательные поля!");
      return;
    }
    for (let i = 0; i < quantity; i++) {
      dispatch(myOrders({ ...itemsModels, ...formData }));
    }
    dispatch(removeCartItem(idOrder));
    axios
      .post("http://127.0.0.1:8000/orders/", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          lastName: "",
          firstName: "",
          patronymic: "",
          phone: "",
          email: "",
          city: "",
          address: "",
          comment: "",
          product_id: "",
          quantity: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cont description">
      <div className="form">
        <div className="btn-back">
          <Link to={'/userPage/componentsBasket'}>
            <Button classBtn={"toggle-btn-card-1"} propsText={"Назад"} />
          </Link>
        </div>
        <form className="input-group-card" onSubmit={handleSubmit}>
          <div className="form-send">
            <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} classInput="input-field" placeholder="Фамилия *" required />
            <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} classInput="input-field" placeholder="Имя *" required />
            <Input type="text" name="patronymic" value={formData.patronymic} onChange={handleChange} classInput="input-field" placeholder="Отчество" />
            <Input type="telephone" name="phone" value={formData.phone} onChange={handleChange} classInput="input-field" placeholder="Телефон *" required />
            <Input type="email" name="email" value={formData.email} onChange={handleChange} classInput="input-field" placeholder="Email *" required />
            <Input type="text" name="city" value={formData.city} onChange={handleChange} classInput="input-field" placeholder="Город *" required />
            <Input type="text" name="address" value={formData.address} onChange={handleChange} classInput="input-field" placeholder="Адрес *" required />
            <Input type="text" name="comment" value={formData.comment} onChange={handleChange} classInput="input-field" placeholder="Комментарий" />
          </div>
          <div>
            <button className="toggle-btn-card-1" type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  )
}