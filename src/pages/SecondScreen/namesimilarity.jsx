import { useState } from 'react';

export default function Example() {
  const [showTable, setShowTable] = useState(false); // Control table visibility

  const people = [
    { name: 'Soundex Similarity', progress: "Yes" },
    { name: 'Metaphone Similarity', progress: "Yes" },
    { name: 'Levenshtein Similarity', progress: "100%"},
    { name: 'Jaro-Winkler Similarity', progress: 0.906},
  ];

  const handleFindClick = (e) => {
    e.preventDefault();
    setShowTable(true); // Show table on button click
  };

  const getGradientColor = (progress) => {
    return `linear-gradient(to right, red, yellow, green ${progress}%)`;
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl mx-auto max-w-3xl text-center">
        Phonetic and Character-Based Name Similarity Check
        </h2>
      </div>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Enter Your Name</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>You will get the Similarity between both the names entered using some Algorithms.</p>
          </div>
          <form className="mt-5 sm:flex sm:items-center" onSubmit={handleFindClick}>
            <div className="w-full sm:max-w-xs">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="myname"
                id="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Name 1"
              />
            </div>
            <div className="w-full pl-3 sm:max-w-xs">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="myname"
                id="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Name 2"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Find
            </button>
          </form>
        </div>
      </div>

      {showTable && ( // Table will only be rendered if `showTable` is true
        <div className="px-4 sm:px-6 lg:px-8 pt-10">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Results:</h1>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-2 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          style={{ width: '20%' }}
                        >
                          Algorithms
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          style={{ width: '60%' }} 
                        >
                          Similarity
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        ></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {people.map((person, personIdx) => (
                        <tr
                          key={person.name + personIdx}
                          className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                           
                  
                            <span className="text-xs text-gray-500">{person.progress}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
