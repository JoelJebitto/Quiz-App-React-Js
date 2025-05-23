function Question({ children, ...props }) {
  return (
    <p className="pb-10" {...props}>
      {children}
    </p>
  );
}

export default Question;
