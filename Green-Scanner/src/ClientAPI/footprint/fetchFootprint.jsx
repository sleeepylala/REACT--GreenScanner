import axios from "axios";
import { APIFootprintKey } from "../../../enviroment";

const FetchFootprint = async (params) => {
  console.log(params);
  const auth = {
    username: APIFootprintKey,
    password: "",
  };

  const response = await axios.get(
    "https://api.goclimate.com/v1/flight_footprint",
    {
      auth,
      params,
    }
  );
  console.log(JSON.stringify(response.data));
  const footprintResult = response.data.footprint;
  return footprintResult;
};

export default FetchFootprint;
