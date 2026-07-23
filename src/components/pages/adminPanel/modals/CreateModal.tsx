import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent,   DialogTitle, } from "@/components/ui/dialog"
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";


interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const CreateModal = ({ openCreateModal, setOpenCreateModal }: ICreateModal) => {
    const { control, handleSubmit, reset } = useForm<ICreateMobileSchema>({
      resolver: zodResolver(createMobileSchema),
      defaultValues: {
        brand: "",
        name: "",
        price: 0,
        storage: 0,
        color: "",
        logo: "",
        title: "",
      },
    });
  return (
    <>
      <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Добавление телефона</DialogTitle>
            <div className="mt-5">
              <p className=" text-neutral-400">Бренд</p>
             
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Модель</p>
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
              <p className=" text-neutral-400">Память (ГБ)</p>
             
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Цвет</p>
              <FormInput
                control={control}
                name="color"
                placeholder="Введите цвет"
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Лого</p>
              <FormInput
                control={control}
                name="logo"
                placeholder="https://..."
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Описание</p>
              <FormInput
                control={control}
                name="title"
                placeholder="Введите описание"
              />
            </div>
            <div className=" grid grid-cols-2 gap-10 mt-5">
              <Button
                type="button"
                variant="outline"
                className="h-10"
                onClick={() => {
                  reset();

                  setOpenCreateModal(false);
                }}
              >
                Закрыть
              </Button>
              <Button variant="ghost" className="h-10" type="submit">
                Добавить
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateModal