import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pripremiCartItemsZaNaruudzbu } from "../utils/cart-utils";


const Narucivanje = (props) => {
  const dispatch = useDispatch();
  const brojStavkiUKorpi = props.brojStavkiUKorpi;
  const ukupnaZaPlatiti = props.ukupnaZaPlatiti;
  const odabraniRestoran = useSelector(state => state.odabraniRestoran);
  const cart = useSelector(state => state.cart);

  const preset = {
    ime_i_prezime: "",
    adresa: '',
    telefon: '',
    napomena: ""
  };

  const [formState, setFormState] = useState(preset);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const validator = (formData) => {
    let test = true;

    if (formData.ime_i_prezime === '') {
      test = false;
    }
    if (formData.adresa === '') {
      test = false;
    }
    if (formData.telefon === '') {
      test = false;
    }

    return test;
  };

  /*
  PROBLEMATIKA NARUCIVANJA
  - order_items treba isfiltrirati da idu sam ooni items koji su od odabranog restorana
  - zatim moramo prepakovati iz order_items_obj u obican array
  - nakon uspesne narzdzbe moramo obristi te stavke it carta koje su od tog restorana za koji je naruceno
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      restoran: odabraniRestoran,
      ...formState,
      order_items: pripremiCartItemsZaNaruudzbu(odabraniRestoran, cart)
    };
    console.log('submit data', formData);
    if (validator(formState)) {

      axios.post('http://localhost:3001/api/order/create', {
        formData
      })
        .then(res => {
          console.log('stigao repsonse sa backenda', res);
          if (true) {
            // ako je backend uspesno primio narudzbu
            alert('Narudzba je uspesno primljena :)');
            // posle uspesne narudzbe praznimo cart jer su proizvodi iz carta vec naruceni.
            dispatch({
              type: 'POSLE_USPESNE_NARUDZBE',
              payload: odabraniRestoran
            });
          }
        })
        .catch((err) => {
          console.log('cathct error in http://localhost:3001/api/order/create', err);
        })

    } else {
      alert('Sva polja izuzev napomene su obavezna.');
    }
  };

  /*
    ime_i_prezime: {
      type: String,
      required: [true],
    },
    adresa: {
      type: String,
      required: [true],
    },
    telefon: {
      type: String,
      required: [true],
    },
    napomena: {
      type: String
    },
  */

  return (
    <div className="">
      <h3>Adresa za dostavu</h3>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Restoran</label>
          <input
            readOnly
            type="text"
            name="restoran"
            value={odabraniRestoran}
          />
        </div>
        <div className="field">
          <label>Ime i prezime</label>
          <input
            type="text"
            name="ime_i_prezime"
            value={formState.ime_i_prezime}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Adresa</label>
          <input
            type="text"
            name="adresa"
            value={formState.adresa}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Telefon</label>
          <input
            type="text"
            name="telefon"
            value={formState.telefon}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Napomena</label>
          <textarea
            type="text"
            name="napomena"
            value={formState.napomena}
            onChange={handleChange}
            cols="4"
          />
        </div>

        {
          (brojStavkiUKorpi > 0) ? (
            <button className="btn-round" type="submit"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Naruči za {ukupnaZaPlatiti} RSD</button>
          ) : (
            <button disabled className="btn-round disabled" type="button"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Naruči za {ukupnaZaPlatiti} RSD</button>
          )
        }

      </form>


    </div>
  );
};

export default Narucivanje;
