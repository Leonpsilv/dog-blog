import { useState } from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido!'
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: 'A senha precisa conter ao menos um caracter maiúsculo, um minúsculo e pelo menos 8 caracteres no total'
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números!'
    }
}

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate (value) {
    if(type === false) return true;

    if(value.length === 0) {
        setError('O campo deve ser preenchido!');
        return false;
    } else if (types[type] && !types[type].regex.test(value)) {
        setError(types[type].message);
        return false;
    } 
    setError(null);
    return true;
  }

  function onChange ({target}) {
    if(error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
}

export default useForm;