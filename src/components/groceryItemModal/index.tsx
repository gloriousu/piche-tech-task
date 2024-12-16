import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { GroceryItemForm } from '@/service/types';
import UiModal from '@/components/ui/uiModal';
import UiValidationError from '@/components/ui/uiValidationError';
import UiButton from '@/components/ui/uiButton';

type GroceryItemModalProps = {
  modalMode: 'Add' | 'Edit';
  defaultValues?: GroceryItemForm;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  categories: string[];
  onSubmit: SubmitHandler<GroceryItemForm>;
};

const GroceryItemModal = ({
  modalMode,
  isModalOpen,
  setIsModalOpen,
  defaultValues,
  onSubmit,
  categories,
}: GroceryItemModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroceryItemForm>({
    defaultValues,
  });

  const inputClasses =
    'appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500';

  return (
    <UiModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} className="w-100">
      <h1 className="text-2xl font-bold text-gray-800">{modalMode} grocery item</h1>
      <form className="flex flex-col pt-10 h-full w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Name
            </label>
            <input
              id="name"
              className={inputClasses}
              type="text"
              {...register('name', {
                required: true,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.name?.type === 'required' && <UiValidationError errorText="This field is required" />}
            {errors?.name?.type === 'minLength' && (
              <UiValidationError errorText="Name must be more then 3 characters" />
            )}
            {errors?.name?.type === 'pattern' && <UiValidationError errorText="Use alphabetical characters only" />}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="category" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Category
            </label>
            <select
              id="category"
              className="w-full py-2 pl-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('category', {
                required: true,
              })}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors?.category?.type === 'required' && <UiValidationError errorText="This field is required" />}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="quantity" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Quantity
            </label>
            <input
              id="quantity"
              className={inputClasses}
              type="number"
              {...register('quantity', {
                required: true,
                min: 1,
              })}
            />
            {errors?.quantity?.type === 'required' && <UiValidationError errorText="This field is required" />}
            {errors?.quantity?.type === 'min' && <UiValidationError errorText="Quantity should be more than 0" />}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-8 pb-2 text-xl justify-end">
          <UiButton type="reset" variant="cancel" text="Cancel" onClick={() => setIsModalOpen(false)} />
          <UiButton type="submit" variant="submit" text={modalMode} />
        </div>
      </form>
    </UiModal>
  );
};

export default GroceryItemModal;
