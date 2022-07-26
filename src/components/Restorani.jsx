import { useDispatch, useSelector } from "react-redux";

const Restorani = () => {
  const dispatch = useDispatch();
  const odabraniRestoran = useSelector(state => state.odabraniRestoran);

  /*
  const handleChangeRestoran = (e) => {
    const value = e.target.value;
    console.log('change restoran', value);
    dispatch({
      type: 'ODABRAN_RESTORAN',
      payload: value
    });
  }
  */

  return (
    <div className="restorani-list">
      <h2>Izaberite restoran</h2>
      <div>

        <div className="restoran" onClick={(e)=>{
          dispatch({
            type: 'ODABRAN_RESTORAN',
            payload: 'Hamburgerko'
          })
        }}>Hamburgerko</div>

        <div className="restoran" onClick={(e)=>{
          dispatch({
            type: 'ODABRAN_RESTORAN',
            payload: 'Pizzeria'
          })
        }}>Pizzeria</div>

        <div className="restoran" onClick={(e)=>{
          dispatch({
            type: 'ODABRAN_RESTORAN',
            payload: 'Walter'
          })
        }}>Walter</div>
      </div>
    </div>
  );
};

export default Restorani;
