import categories from "../Categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select form-select-lg mb-3 mt-2"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
