import SideMenu from "../SideMenu/SideHeader";
import Latest from "../SideMenu/Latest";
import SeatChoice from "./SeatChoice";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import "./options.css";

export default function SeatOptions() {
  const data = useSelector((state) => state.root.order.route);
  const rawURL = import.meta.env.VITE_API_URL;

  const seatsTo = useFetch(`${rawURL}/routes/${data.departure._id}/seats`);
  const seatsBack = useFetch(
    `${rawURL}/routes/${data.arrival ? data.arrival._id : 0}/seats`
  );

  const back = Boolean(data.arrival);

  if (seatsTo.loading || (back && seatsBack.loading)) {
    return <div>Loading...</div>;
  }

  if (seatsTo.error || (back && seatsBack.error)) {
    return <div>Error loading seat data.</div>;
  }

  return (
    <section className="table flex">
      <div className="column">
        <SideMenu />
        <Latest />
      </div>
      <div className="column offers">
        {seatsTo.data && (
          <SeatChoice
            back={back}
            seatsTo={seatsTo.data}
            seatsBack={back ? seatsBack.data : null}
          />
        )}
      </div>
    </section>
  );
}
