import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import Clinic from '../Clinic/Clinic';
import './Add.css';

export default function Form() {
  const [clinicList, setClinicList] = useState();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleOnChangeZipcode = (e) => {
    setZipcode(e.target.value);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeWhatsapp = (e) => {
    setWhatsapp(e.target.value);
  };

  const createClinic = () => {
    const clinicRef = firebase.database().ref('Clinic');
    const clinic = {
      name,
      address,
      zipcode,
      email,
      whatsapp,
      // availableservices: {
      //   clinical,
      //   complementary,
      //   PPRA,
      //   PCMSO,
      // }
    };

    clinicRef.push(clinic);
  };

  useEffect(() => {
    const clinicRef = firebase.database().ref('Clinic');
    clinicRef.on('value', (snapshot) => {
      const clinics = snapshot.val();
      const clinicList = [];
      for (let id in clinics) {
        clinicList.push({ id, ...clinics[id] });
      }
      setClinicList(clinicList);
    });
  }, []);

  return (
    <>
      <div className="form">
        <label htmlFor="name"><b>*</b>Nome:</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={handleOnChangeName}
          name="name"
        />
        <label htmlFor="address"><b>*</b>Endereço:</label>
        <input
          type="text"
          id="address"
          required
          value={address}
          onChange={handleOnChangeAddress}
          name="address"
        />
        <label htmlFor="zipcode"><b>*</b>CEP:</label>
        <input
          type="text"
          id="zipcode"
          required
          value={zipcode}
          onChange={handleOnChangeZipcode}
          name="zipcode"
        />
        <label htmlFor="email"><b>*</b>E-mail:</label>
        <input
          type="text"
          id="email"
          required
          value={email}
          onChange={handleOnChangeEmail}
          name="email"
        />
        <label htmlFor="whatsapp"><b>*</b>Whatsapp:</label>
        <input
          type="text"
          id="whatsapp"
          required
          value={whatsapp}
          onChange={handleOnChangeWhatsapp}
          name="whatsapp"
        />
        <label htmlFor="availableservices"><b>*</b>Serviços Disponíveis:</label>
        <label>
          <input
            type="checkbox"
            name='Exames Clínicos'
            // checked={isSelected}
            // onChange={onCheckboxChange}
            className="form-check-input"
          />
          Exames Clínicos
        </label>
        <label>
          <input
            type="checkbox"
            name='Exames Clínicos'
            // checked={isSelected}
            // onChange={onCheckboxChange}
            className="form-check-input"
          />
          Exames Complementares
        </label>
        <label>
          <input
            type="checkbox"
            name='Exames Clínicos'
            // checked={isSelected}
            // onChange={onCheckboxChange}
            className="form-check-input"
          />
          PPRA
        </label>
        <label>
          <input
            type="checkbox"
            name='Exames Clínicos'
            // checked={isSelected}
            // onChange={onCheckboxChange}
            className="form-check-input"
          />
          PCMSO
        </label>
        <button onClick={createClinic}>Adicionar Clínica</button>
      </div>
      <div >
        {clinicList
          ? clinicList.map((clinic, index) => <Clinic clinic={clinic} key={index} />)
          : ''}
      </div>
    </>
  );
}