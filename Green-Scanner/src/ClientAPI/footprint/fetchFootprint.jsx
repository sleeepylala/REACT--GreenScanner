import axios from "axios";
import { APIFootprintKey } from "../../../enviroment";

const FetchFootprint = async () => {
  const auth = {
    username: APIFootprintKey,
    password: "",
  };
  const params = {
    "segments[0][origin]": "ARN",
    "segments[0][destination]": "BCN",
    cabin_class: "economy",
    "currencies[]": "SEK",
  };

  const response = await axios.get(
    "https://api.goclimate.com/v1/flight_footprint",
    {
      auth,
      params,
    }
  );
  console.log(JSON.stringify(response.data));
};

export default FetchFootprint;
