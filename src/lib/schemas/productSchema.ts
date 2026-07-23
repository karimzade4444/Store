import * as z from "zod"

export const productSchema = z.object({
  img: z.string().min(1, "Вставьте ссылку на Изоброжение"),
  name: z.string().min(1, "Введите название товара"),
  price: z.coerce.number<number>().min(0, "Введите цену"),
  sale: z.coerce.number<number>().min(0, "Скидка"),
  stock: z.coerce.number<number>().min(1, "Введите количество"),
});

export type IProductSchema = z.infer<typeof productSchema>