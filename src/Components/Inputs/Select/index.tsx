interface SelectOneInputProps{
    onChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void,
}

export default function SelectOneInput({onChange}:SelectOneInputProps){
    return (
        <>
        {/* <form className="max-w-sm mx-auto"> */}
        <div className="relative inline-flex">
            <select  onChange={(e)=>onChange(e)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Choose a country</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            </select>
            </div>
        {/* </form> */}
</>
    )
}