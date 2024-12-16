import Head from 'next/head';
import { FaPlus } from 'react-icons/fa6';
import { VscEmptyWindow } from 'react-icons/vsc';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Grocery from '@/service/grocery';
import UiCard from '@/components/ui/uiCard';
import UiButton from '@/components/ui/uiButton';
import { GroceryCategory, GroceryItem, GroceryItemForm } from '@/service/types';
import UiDropdown from '@/components/ui/uiDropdown';
import UiMenu from '@/components/ui/uiMenu';
import { MenuItem } from '@szhsin/react-menu';
import Portal from '@/portal';
import GroceryItemModal from '@/components/groceryItemModal';
import { SubmitHandler } from 'react-hook-form';

export default function Home() {
  const [groceryList, setGroceryList] = useState(Grocery.items);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [selectedGroceryItemId, setSelectedGroceryItemId] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<'Add' | 'Edit'>('Add');

  const categories = ['All', 'Fruits', 'Dairy', 'Vegetables'];

  useEffect(() => {
    Grocery.init();
    setGroceryList([...Grocery.items]);
  }, []);

  const filteredList = selectedCategory === 'All' ? groceryList : Grocery.filterByCategory(selectedCategory);

  const handleMarkAsPurchased = (groceryItem: GroceryItem) => {
    Grocery.markItemAsPurchased(groceryItem.id);
    setGroceryList(Grocery.items);
  };

  const handleUnmarkAsPurchased = (groceryItem: GroceryItem) => {
    Grocery.unmarkItemAsPurchased(groceryItem.id);
    setGroceryList(Grocery.items);
  };

  const handleDeleteGroceryItem = (groceryItem: GroceryItem) => {
    Grocery.deleteGroceryItem(groceryItem.id);
    setGroceryList(Grocery.items);
  };

  const handleAddGroceryItem = () => {
    setIsModalOpen(true);
    setModalMode('Add');
  };

  const handleEditGroceryItem = (groceryItem: GroceryItem) => {
    setIsModalOpen(true);
    setModalMode('Edit');
    setSelectedGroceryItemId(groceryItem.id);
  };

  const onAddGroceryItemSubmit: SubmitHandler<GroceryItemForm> = (values: GroceryItemForm) => {
    Grocery.addGroceryItem({ ...values, category: values.category as GroceryCategory, id: uuidv4() });
    setGroceryList(Grocery.items);
    setIsModalOpen(false);
  };

  const onEditGroceryItemSubmit: SubmitHandler<GroceryItemForm> = (values: GroceryItemForm) => {
    Grocery.editGroceryItem({ ...values, category: values.category as GroceryCategory, id: selectedGroceryItemId });
    setGroceryList(Grocery.items);
    setIsModalOpen(false);
    setSelectedGroceryItemId('');
  };

  return (
    <>
      <Head>
        <title>Grocery List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mr-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Grocery List</h1>

        <div className="flex flex-col mb-6 sm:flex-row sm:justify-between">
          <UiDropdown
            id={'categoryFilter'}
            labelText="Filter by Category"
            value={selectedCategory}
            setValue={setSelectedCategory}
            options={categories}
          />
          <UiButton className="mt-7 h-10" text="Add grocery item" icon={<FaPlus />} onClick={handleAddGroceryItem} />
        </div>

        <UiCard padding="p-4">
          <div className="flex flex-col gap-4">
            {filteredList.length > 0 ? (
              filteredList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 rounded-lg shadow-sm p-4 hover:bg-gray-100 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-3 h-3 rounded-full ${item.isPurchased ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-600">Quantity:</span> {item.quantity}
                    </p>
                    <UiMenu menuButtonContent={<BsThreeDotsVertical />} align="end">
                      <MenuItem className="rounded text-blue-500" onClick={() => handleEditGroceryItem(item)}>
                        Edit
                      </MenuItem>
                      {item.isPurchased ? (
                        <MenuItem className="rounded text-yellow-500" onClick={() => handleUnmarkAsPurchased(item)}>
                          Unmark as purchased
                        </MenuItem>
                      ) : (
                        <MenuItem className="rounded text-green-500" onClick={() => handleMarkAsPurchased(item)}>
                          Mark as purchased
                        </MenuItem>
                      )}
                      <MenuItem className="rounded text-red-500" onClick={() => handleDeleteGroceryItem(item)}>
                        Delete
                      </MenuItem>
                    </UiMenu>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center">
                <VscEmptyWindow size={40} className="scale-x-[-1]" />
                <span className="text-xl text-gray-500">No data</span>
              </div>
            )}
          </div>
        </UiCard>
      </div>
      {isModalOpen && (
        <Portal>
          <GroceryItemModal
            isModalOpen
            modalMode={modalMode}
            setIsModalOpen={setIsModalOpen}
            defaultValues={
              modalMode === 'Add'
                ? { name: '', quantity: 0, category: null, isPurchased: false }
                : Grocery.findItem(selectedGroceryItemId)
            }
            categories={['Fruits', 'Dairy', 'Vegetables']}
            onSubmit={modalMode === 'Add' ? onAddGroceryItemSubmit : onEditGroceryItemSubmit}
          />
        </Portal>
      )}
    </>
  );
}
