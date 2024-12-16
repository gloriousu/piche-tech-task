import React from 'react';
import clsx from 'clsx';

type UiDropdownProps = {
  id: string;
  labelText?: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
} & React.ComponentProps<'select'>;

const UiDropdown = ({ id, labelText, value, setValue, options, className }: UiDropdownProps) => {
  return (
    <div>
      {labelText && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2 whitespace-nowrap">
          Filter by Category
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={clsx(
          'w-full sm:min-w-60 py-2 pl-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
          className
        )}
      >
        {options.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UiDropdown;
