import Direction from "../pages/TrainOptions/Direction";
import List from "../models/List";
import Icon from "./Icon";
import VagonType from "./VagonType";
import reformatTime from "../utils/reformatTime";
import { bool, object } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addRoute,
  clearAllPassengers,
  clearAllSeats,
  clearPaymentInfo,
} from "../store/order";

export default function Train({ item, final }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.root.order.searchParams);
  const { arrival, departure } = item;
  let arrivalTime;
  if (arrival) arrivalTime = reformatTime(arrival.duration);
  const departureTime = reformatTime(departure.duration);
  const allServices = useSelector((state) => state.root.site.services);
  const services = [
    {
      name: "wifi",
      status: departure.have_wifi,
    },
    {
      name: "express",
      status: departure.is_express,
    },
    {
      name: "cond",
      status: departure.have_air_conditioning,
    },
  ];

  const chooseTrain = (e) => {
    e.preventDefault();
    dispatch(addRoute({ item }));
    navigate(`/routes/${departure._id}/seats`);
  };

  const changeOptions = (e) => {
    e.preventDefault();
    dispatch(clearPaymentInfo());
    dispatch(clearAllPassengers());
    dispatch(clearAllSeats());
    localStorage.clear();
    navigate(searchParams);
  };

  return (
    <li className={`train ${!final ? "train__main" : ""}`}>
      <div className="train__type">
        <div className="train__icon flex__center"></div>
        <div className="direction__full">
          <h4 className="trainName">{departure.train.name}</h4>
          <p className="px16 capital">
            {departure.from.city.name} &rarr; {departure.to.city.name}
          </p>
        </div>
      </div>

      <div className="directions">
        <Direction
          arrow={<>&#129050;</>}
          from={departure.from}
          to={departure.to}
          time={departureTime}
        ></Direction>
        {arrival && (
          <Direction
            arrow={<>&#129048;</>}
            from={arrival.to}
            to={arrival.from}
            time={arrivalTime}
          ></Direction>
        )}
      </div>

      <div className="vagonTypes flex">
        <List className="vagons">
          {Object.entries(departure.available_seats_info).map((item) => (
            <VagonType
              key={item[0]}
              item={item}
              prices={departure.price_info}
            />
          ))}
        </List>
        <List className="serviceList flex__end">
          {services.map((item) => (
            <Icon key={item.name} service={item} allServices={allServices} />
          ))}
        </List>
        {!final ? (
          <button className="button narrow" onClick={chooseTrain}>
            Выбрать места
          </button>
        ) : (
          <button
            className="button__transp narrow__black"
            onClick={changeOptions}
          >
            Изменить
          </button>
        )}
      </div>
    </li>
  );
}

Train.propTypes = {
  item: object,
  final: bool,
};
