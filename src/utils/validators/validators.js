
const maxLength = (max) => {
  return (value) => value && value.length > max ? `Max length is ${max} symbols` : undefined;
}



export const maxLength300 = maxLength(300);

export const required = (value) => value ? undefined : 'Field is required';
