import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
  let navigation = useNavigate()

  let Handlebtn = () => {
    navigation(-1)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-gray-600">
      <div className="p-5 text-center">
        <div className="mb-5">
          <img
            alt="Illustration of construction workers building a 404 error page"
            className="h-72 w-96 object-contain"
            src="https://storage.googleapis.com/a1aa/image/skt5ncBEJC4MJ9cpOqea6YYf5KUjM5YriWXRmQh6fjWWfjjPB.jpg"
          />
        </div>
        <div className="text-lg mb-2">
          The page you were looking for could not be found
        </div>
        <button
          className="bg-red-700 text-white py-2 px-4 text-lg rounded-md hover:bg-red-800"
          onClick={Handlebtn}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
