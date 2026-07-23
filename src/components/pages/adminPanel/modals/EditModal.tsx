import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  productSchema,
  type IProductSchema,
} from "@/lib/schemas/productSchema";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  updateProduct } from "@/lib/api/api";
import type { IGetProducts } from "@/components/types/types";

interface IEditModal {
  openEditModal: boolean;
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
  prods: IGetProducts | null;
}

const EditModal = ({ openEditModal, setOpenEditModal, prods }: IEditModal) => {
    const queryClient = useQueryClient();
  const { control, handleSubmit, reset, clearErrors } = useForm<IProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      img: "",
      name: "",
      price: 0,
      sale: 0,
      stock: 0,
    },
  });

  const { mutate: updatingMobile } = useMutation({
    mutationFn: ({ id, data }: { id: number; data: IProductSchema }) =>
      updateProduct(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      reset();

      setOpenEditModal(false);
    },
  });
   useEffect(() => {
     if (prods) {
       reset({
         img: prods.img,
         name: prods.name,
         price: prods.price,
         sale: prods.sale,
         stock: prods.stock,
       });
     }
   }, [prods, reset]);

   const onSubmit = (data: IProductSchema) => {
     if (!prods) return;
     updatingMobile({
       id: prods.id,
       data,
     });
   };

  return (
    <>
      <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Изменение Продукта</DialogTitle>
            <div className="mt-5">
              <p className=" text-neutral-400">Изоброжение</p>
              <FormInput
                control={control}
                name="img"
                placeholder="https://..."
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Название продукта</p>
              <FormInput
                control={control}
                name="name"
                placeholder="Ввелите модель"
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Цена ($)</p>
              <FormInput
                control={control}
                name="price"
                placeholder="Введите цену"
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Скидка (%)</p>
              <FormInput
                control={control}
                name="sale"
                placeholder="Ввелите скидку"
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Количество</p>
              <FormInput
                control={control}
                name="stock"
                placeholder="Введите количество"
              />
            </div>
            <div className=" grid grid-cols-2 gap-10 mt-5">
              <Button
                type="button"
                variant="outline"
                className="h-10"
                onClick={() => {
                  reset();
                  clearErrors();
                  setOpenEditModal(false);
                }}
              >
                Закрыть
              </Button>
              <Button variant="default" className="h-10" type="submit">
                Добавить
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditModal;
