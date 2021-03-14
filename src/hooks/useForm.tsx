import { ChangeEvent, useState } from "react";

interface IForm {
  name?: string;
  email?: string;
  password?: string;
  description?: string;
}

const initState: IForm = {
  email: "",
  name: "",
  password: "",
  description: "",
};

export const useForm = (initialState = initState) => {
  const [values, setValues] = useState(initialState);

  const clear = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return { values, handleInputChange, clear };
};
