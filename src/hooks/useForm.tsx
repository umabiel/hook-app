import { ChangeEvent, useState } from "react";

interface IForm {
  name?: string;
  email?: string;
  password?: string;
}

const initState: IForm = {
  email: "",
  name: "",
  password: "",
};

export const useForm = (initialState = initState) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return { values, handleInputChange };
};
