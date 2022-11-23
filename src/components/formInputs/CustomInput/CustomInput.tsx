import {Input} from "@chakra-ui/react";

export default function CustomInput({
                                      field, // { name, value, onChange, onBlur }
                                      form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                      ...props
                                    }) {
  return <Input {...field} {...props} />;
}
