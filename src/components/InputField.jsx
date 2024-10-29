function InputField({ value, label, name, placeholder, type, onChange }) {
  return (
    <>
      <div className="input-field-group">
        {label && (
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="input-field"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          value={value}
          name={name}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default InputField;
