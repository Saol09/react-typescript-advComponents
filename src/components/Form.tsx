import { ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'>;

function Form(props: FormProps) {
  return <form {...props}>{props.children}</form>;
}

export default Form;
