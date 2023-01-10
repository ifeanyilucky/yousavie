export default function DownloadTable() {
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              Product name
            </th>
            <th scope='col' className='py-3 px-6'>
              Color
            </th>
            <th scope='col' className='py-3 px-6'>
              Category
            </th>
            <th scope='col' className='py-3 px-6'>
              Price
            </th>
            <th scope='col' className='py-3 px-6'>
              <span className='sr-only'>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b  '>
            <th
              scope='row'
              className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
            >
              Apple MacBook Pro 17"
            </th>
            <td className='py-4 px-6'>Sliver</td>
            <td className='py-4 px-6'>Laptop</td>
            <td className='py-4 px-6'>$2999</td>
            <td className='py-4 px-6 text-right'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
