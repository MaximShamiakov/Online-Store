import { regDescription } from "../../redux/actions/regDescription";
import { delivery } from "../../redux/actions/delivery";
import { service } from "../../redux/actions/service";
import { design } from "../../redux/actions/design";
import { contacts } from "../../redux/actions/сontacts";
import { logo } from "../../redux/actions/logo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../RepeatTheCode/isLoadingThunks";
import axios from "axios";
import { API_URL } from "../../config";

export const ApiDataFetcher = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const actions = {
      regDescription,
      delivery,
      service,
      design,
      contacts,
      logo,
    };
    const information = [
      { name: "regDescription" },
      { name: "delivery" },
      { name: "service" },
      { name: "design" },
      { name: "contacts" },
      { name: "logo" },
    ];
    information.forEach((item) => {
      dispatch(startLoading());
      axios.post(`${API_URL}/${item.name}/`).then((response) => {
        console.log(response);
        dispatch(actions[item.name](response.data));
        dispatch(stopLoading());
      });
    });
  }, [dispatch]);
};
