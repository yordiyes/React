import "../../components/index.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../Categories";


const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50, { message: "Description should be at most 50 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({message: "Category is required."}),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props{
  onSubmit: (data: FormData) => void;
}

export default function Form({onSubmit} :Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <div className="contianer">
      <form onSubmit={handleSubmit((data)=>{
        onSubmit(data),
        reset()
      })}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control bg-light text-black"
          />
        </div>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control bg-light text-black"
          />
        </div>
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Categories
          </label>
          <select
            {...register("category")}
            className="form-select form-select-lg mb-3 bg-light text-black"
            id="categories"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
