import axios from "axios";
import { useState } from "react";


const Narucivanje = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit data', formState);
    axios.post('http://localhost:3001/api/order/create', {
      formData: {
        ...formState,
        order_items: []
      },
    })
      .then(res => {
        console.log('stigao repsonse sa backenda', res);
      })
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
      <h3>Narucivanje</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="ime_i_prezime"
            value={formState.ime_i_prezime}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="adresa"
            value={formState.adresa}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="telefon"
            value={formState.telefon}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="napomena"
            value={formState.napomena}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Naruči</button>
      </form>


    </div>
  );
};

export default Narucivanje;
