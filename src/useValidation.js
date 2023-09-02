import { useState, useEffect } from "react";

function useValidation(config) {

  const [validation, setValidation] = useState({...config});

  useEffect(() => {
    if(validation){
      Object.keys(config).map((k)=>{
        const vo = validation[k];
        setValidation({...validation, [k]:{...vo, visited: false}});
      });
    }
    console.log("useValidation",validation);
  }, []);

  const isValid = (vo, value, name) => {
    console.log("validation", vo, value);
    let valid = true;
    let errorMessages = [];
    Object.keys(vo).map(k => {
      console.log("k", k);
      switch(k){
        case "required":
          console.log("entering required");
          console.log(typeof(value));
          if(vo[k] && (!value || value.trim() === "")) {
            valid = false;
            errorMessages.push(`${name} is required`);
          }
        break;
        case "type":
          const type = vo[k];
          if(type === 'number'){
            var regex=/^[0-9]+$/;
            if(!regex.test(value)){
              valid = false;
              errorMessages.push(`${name} should be a number`);
            }
          }
        break;
        case "min":
          const minNum = vo[k];
          if(Number(value) < Number(minNum)){
            valid = false;
            errorMessages.push(`${name} should be a number greater than ${minNum}`);
          }
        break;
        case "max":
          const maxNum = vo[k];
          if(Number(value) > Number(maxNum)){
            valid = false;
            errorMessages.push(`${name} should be a number less than ${maxNum}`);
          }
        break;
      }
    });
    // console.log("returning true");
    return [valid, errorMessages];
  }

  const validate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValidation(preValidation => {
      if(preValidation[name]){
        const vo = preValidation[name];
        console.log("validating", name, vo, value);
        const [valid, errorMessages] = isValid(vo, value, name);
        if(vo.visited && !valid){
          return {...preValidation, [name]:{...vo, error: errorMessages}}
        }else {
          return {...preValidation, [name]:{...vo, error: null}}
        }

      }
      return preValidation;
    });
    // console.log("useValidation", validation);
  };

  const visited = (e) => {
    const name = e.target.name;
    setValidation(preValidation => {
      if(preValidation[name]){
        const vo = preValidation[name];
        console.log("visiting", name, vo);
        if(vo){
          return {...preValidation, [name]:{...vo, visited: true}}
        }
      }
      return preValidation;
    });
    validate(e);
  }

  return [validate, visited, validation];
}

export default useValidation