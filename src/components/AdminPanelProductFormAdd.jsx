import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const AdminPanelProductFormAdd = (props) => {
  const dispatch = useDispatch();
  const refresh = props.refresh;

  const adminLoggedRestoran = useSelector(state => state.adminLoggedRestoran);

  const preset = {
    restoran: adminLoggedRestoran,
    kategorija: '',
    naziv: '',
    // opcije: '',
    // slika: "",
    cena: 0
  };

  const [opcija, setOpcija] = useState('');
  const [opcijeNiz, setOpcijeNiz] = useState([]);
  const [slikaBlob, setSlikaBlob] = useState('');
  const [formState, setFormState] = useState(preset);

  useEffect(() => {
    setFormState({
      ...formState,
      restoran: adminLoggedRestoran
    });
  }, [adminLoggedRestoran]);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleChangeCena = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
    setFormState({
      ...formState,
      cena: parseInt(value)
    });
  };


  const validator = (formData) => {
    let test = true;

    if (formData.kategorija === '') {
      test = false;
    }
    if (formData.naziv === '') {
      test = false;
    }
    if (formData.cena < 0) {
      test = false;
    }

    return test;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...formState,
      opcije: opcijeNiz,
      slika: slikaBlob
    };
    console.log('submit data', formData);
    if (validator(formState)) {

      const api = 'http://localhost:3001/api/product/create';
      axios.post(api, {
        formData
      })
        .then(res => {
          console.log('stigao repsonse sa backenda', res);
          if (true) {
            // ako je backend uspesno primio narudzbu
            alert('Proizvod je uspesno doat :)');
            // posle uspesne...
            refresh();
            dispatch({ type: 'MODAL_CLOSE' });
          }
        })
        .catch((err) => {
          console.log('cathct error in http://localhost:3001/api/product/create', err);
        })

    } else {
      alert('Sva polja su obavezna.');
    }
  };

  const handleClickDodajOpciju = (e) => {
    e.preventDefault();
    if (!opcijeNiz.includes(opcija.trim()) && opcija.trim() !== '') {
      // prevent duplicates
      setOpcijeNiz([...opcijeNiz, opcija.trim()]);
      setOpcija('');
    }
  };

  const handleChangeOpcija = (e) => {
    const target = e.target;
    const value = target.value;
    setOpcija(value);
  };

  const _handleDeleteOpcija = (opcija) => {
    const updatedOpcijeNiz = opcijeNiz.filter((opc) => {
      if (opc === opcija) {
        return false;
      }
      return true;
    });
    setOpcijeNiz(updatedOpcijeNiz);
  };

  const jsxOpcije = opcijeNiz.map((opcija) => {
    return (
      <span>{opcija}<button type="button" onClick={(e) => { _handleDeleteOpcija(opcija) }}>&times;</button>&nbsp;</span>
    );
  });

  const onSelectFile = (e) => {
    console.log('onSelectFile', e.target.files.length);
    if (e.target.files && e.target.files.length > 0) {
      const fileList = e.target.files;
      const selectedFile = fileList[0];
      const reader = new FileReader();
      if (selectedFile) {
        const handleLoad = (e) => {
          console.log('file load');
          const blob = reader.result;
          // console.log(blob);
          setSlikaBlob(blob);
        };
        reader.addEventListener('load', handleLoad);
        // reader.readAsDataURL(e.target.files[0]);
        reader.readAsDataURL(selectedFile); // read as blob
      }
    }
  };


  return (
    <div className="modal-form">
      <h3>Dodaj novi proizvod</h3>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Restoran</label>
          <input
            readOnly
            type="text"
            name="restoran"
            value={formState.restoran}
          />
        </div>
        <div className="field">
          <label>Kategorija</label>
          <select
            name="kategorija"
            value={formState.kategorija}
            onChange={handleChange}
          >
            <option value="">--Izaberi kategoriju--</option>
            <option value="Roštilj">Roštilj</option>
            <option value="Pizza">Pizza</option>
            <option value="Sendviči">Sendviči</option>
            <option value="Peciva">Peciva</option>
            <option value="Sokovi">Sokovi</option>
            <option value="Završeno">Ostalo</option>
          </select>
        </div>
        <div className="field">
          <label>Naziv</label>
          <input
            type="text"
            name="naziv"
            value={formState.naziv}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Cena</label>
          <input
            type="number"
            name="cena"
            value={formState.cena}
            onChange={handleChangeCena}
          />
        </div>
        <div className="field">
          <label>Nova opcija</label>
          <input
            type="text"
            name="opcija"
            value={opcija}
            onChange={handleChangeOpcija}
          />
          <button onClick={handleClickDodajOpciju}>Dodaj opciju</button>
          <p>Opcije:&nbsp;
            <span>{jsxOpcije}</span>
          </p>
        </div>
        <div className="field">
          <label>Slika</label>
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={onSelectFile}
            name="file"
          />
          <img className="product-img" src={slikaBlob} />
        </div>

        <br />
        <button className="btn-round" type="submit"><i className="fa fa-plus" aria-hidden="true"></i> Submit</button>

      </form>
    </div>
  );
};

export default AdminPanelProductFormAdd;
