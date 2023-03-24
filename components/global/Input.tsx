type InputProps = {
  className?: string;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'number';
  onChange: () => void;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const {
    className,
    label,
    name,
    type = 'text',
    onChange,
    placeholder
  } = props;

  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export { Input };
