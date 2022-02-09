
const maxLength = (max: number) => {
  return (value: string) => value && value.length > max ? `Max length is ${max} symbols` : undefined;
}



export const maxLength300 = maxLength(300);

export const required = (value: string) => value ? undefined : 'Field is required';
