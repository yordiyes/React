interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: (item: string) => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <div>
      <button className={`btn btn-${color}`} 
      onClick={() => onClick(color)}>
        {children}
      </button>
    </div>
  );
}

export default Button;
