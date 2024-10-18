export default function APIDemo() {
  return (
    <div className="w-full max-w-md mx-auto my-8 space-y-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">API Endpoints</h2>

        <div className="mb-4 p-4 bg-blue-100 text-gray-700 rounded" role="alert">
          <p className="break-words">
            <span className="text-green-600">Green = No token needed<br /></span>
            <span className="text-red-600">Red = Token needed</span>
            <br /><br />
            <span>Token (get users and use email and password to get token):</span><br />
            <span className="text-green-600">POST - api/auth/login</span>
            <br /><br />
            <span>Users:</span><br />
            <span className="text-green-600">GET - api/users<br /></span>
            <span className="text-green-600">POST - api/users<br /></span>
            <span className="text-red-600">PATCH - api/users/[userID]<br /></span>
            <s><span className="text-red-600">DELETE - api/users/[userID]</span></s>
            <br /><br />
            <span>Categories:</span><br />
            <span className="text-red-600">GET - api/categories<br /></span>
            <span className="text-red-600">POST - api/categories<br /></span>
            <span className="text-red-600">PATCH - api/categories/[categoryId]<br /></span>
            <span className="text-red-600">DELETE - api/categories/[categoryId]</span>
            <br /><br />
            <span>Articles:</span><br />
            <span className="text-red-600">GET - api/articles<br /></span>
            <span className="text-red-600">GET  - api/articles?userId=<br /></span>
            <span className="text-red-600">GET  - api/articles?searchString=<br /></span>
            <span className="text-red-600">POST - api/articles<br /></span>
            <span className="text-red-600">PATCH - api/articles/[articlesId]<br /></span>
            <span className="text-red-600">DELETE - api/articles/[articlesId]</span>
          </p>
        </div>
      </div>
    </div>
  )
}