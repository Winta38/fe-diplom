import SeatPanel from "./SeatPanel";
import List from "../../models/List";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { object, bool, arrayOf, oneOfType } from "prop-types";

export default function SeatChoice({ back, seatsTo, seatsBack }) {
  const navigate = useNavigate();
  const routeData = useSelector((state) => state.root.order.route);
  const chosenSeats = useSelector((state) => state.root.order.places);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (back && chosenSeats.to.length > 0 && chosenSeats.back.length > 0) {
      setDisabled(false);
    } else if (!back && chosenSeats.to.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [back, chosenSeats.to.length, chosenSeats.back.length]);

  const forward = () => {
    if (!disabled) navigate("/passengers");
  };

  return (
    <div className="offers__seats">
      <div className="seats__header">
        <h3 className="upper">Выбор мест</h3>
      </div>
      <List className="offers__list">
        <SeatPanel seats={seatsTo} route={routeData.departure} />
        {back && (
          <SeatPanel back={back} seats={seatsBack} route={routeData.arrival} />
        )}
      </List>
      <div className="btn__wrapper">
        <button
          className="button standart__white"
          disabled={disabled}
          onClick={forward}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

SeatChoice.propTypes = {
  seatsTo: arrayOf(object),
  seatsBack: oneOfType([arrayOf(object), object]),
  back: bool,
};
