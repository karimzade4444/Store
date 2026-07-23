import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  productSchema,
  type IProductSchema,
} from "@/lib/schemas/productSchema";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "@/lib/api/api";

interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const CreateModal = ({ openCreateModal, setOpenCreateModal }: ICreateModal) => {
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

  const { mutate }=useMutation({
    mutationFn:createProduct,
    onSuccess:()=>{
        queryClient.invalidateQueries({
            queryKey:["getProducts"]
        })
    }
  })

  const onSubmit = (data: IProductSchema) => {
    mutate(data);
    reset();
    setOpenCreateModal(false);
  };

  return (
    <>
      <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Добавление Продукта</DialogTitle>
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
                  setOpenCreateModal(false);
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

export default CreateModal;
