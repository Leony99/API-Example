'use client'

import { useState } from 'react'

export default function APIEndpoints() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (accordion: string) => {
    setOpenAccordion(openAccordion === accordion ? null : accordion)
  }

  return (
    <div className="container max-w-[800px] mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">API Endpoints</h1>
      <p className="text-lg text-center mb-6">
        Get an authentication token(Auth endpoint) 
        using a user email and password(Users endpoint).
      </p>
      
      <div className="space-y-4">
        {/* Auth */}
        <div className="border rounded-lg">
          <button
            className="w-full text-left p-4 font-semibold focus:outline-none"
            onClick={() => toggleAccordion('auth')}
            aria-expanded={openAccordion === 'auth'}
          >
            Auth
          </button>
          {openAccordion === 'auth' && (
            <div className="p-4 border-t">
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">POST</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/auth/login</code>
                  </div>
                  <p className="mt-1">Login with email and password (get bearer token)</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Content-Type': 'application/json' }, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Body:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ email: 'user.email', password: 'user.password' }, null, 2)}
                    </pre>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Users */}
        <div className="border rounded-lg">
          <button
            className="w-full text-left p-4 font-semibold focus:outline-none"
            onClick={() => toggleAccordion('users')}
            aria-expanded={openAccordion === 'users'}
          >
            Users
          </button>
          {openAccordion === 'users' && (
            <div className="p-4 border-t">
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">GET</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/users</code>
                  </div>
                  <p className="mt-1">Get all users</p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">POST</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/users</code>
                  </div>
                  <p className="mt-1">Post a user</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                    {JSON.stringify({ 'Content-Type': 'application/json' }, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Body:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ userName: 'string', email: 'string', password: 'string' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">PATCH</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/users/{'[userId]'}</code>
                  </div>
                  <p className="mt-1">Update a user</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}', 'Content-Type': 'application/json' }, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Body:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ newUserName: 'string', newEmail: 'string', newPassword: 'string' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">DELETE</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/users{'[userId]'}</code>
                  </div>
                  <p className="mt-1">Delete a user</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}' }, null, 2)}
                    </pre>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="border rounded-lg">
          <button
            className="w-full text-left p-4 font-semibold focus:outline-none"
            onClick={() => toggleAccordion('categories')}
            aria-expanded={openAccordion === 'categories'}
          >
            Categories
          </button>
          {openAccordion === 'categories' && (
            <div className="p-4 border-t">
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">GET</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/categories</code>
                  </div>
                  <p className="mt-1">Get all categories</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">POST</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/categories</code>
                  </div>
                  <p className="mt-1">Create a new category</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}', 'Content-Type': 'application/json' }, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Body:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ title: 'string' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">PATCH</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/categories/{'[categoryId]'}</code>
                  </div>
                  <p className="mt-1">Update a category</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}', 'Content-Type': 'application/json' }, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Body:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ newTitle: 'string' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">DELETE</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/categories/{'[categoryId]'}</code>
                  </div>
                  <p className="mt-1">Delete a category</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}' }, null, 2)}
                    </pre>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Articles */}
        <div className="border rounded-lg">
          <button
            className="w-full text-left p-4 font-semibold focus:outline-none"
            onClick={() => toggleAccordion('articles')}
            aria-expanded={openAccordion === 'articles'}
          >
            Articles
          </button>
          {openAccordion === 'articles' && (
            <div className="p-4 border-t">
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">GET</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/articles</code>
                  </div>
                  <p className="mt-1">Get all articles</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">GET</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/articles?userId={'{userId}'}</code>
                  </div>
                  <p className="mt-1">Get a specific article</p>
                  <div  className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">GET</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/articles?searchString={'{searchString}'}</code>
                  </div>
                  <p className="mt-1">Get article by title or content</p>
                  <div  className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">POST</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/articles?userId={'{userId}'}</code>
                  </div>
                  <p className="mt-1">Create a new article by user</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}', 'Content-Type': 'application/json' }, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Body:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ title: 'string', content: 'string', categories_id: '[string]' }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">PATCH</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/articles/{'[articleId]'}</code>
                  </div>
                  <p className="mt-1">Update an article</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}', 'Content-Type': 'application/json' }, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Body:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ newTitle: 'string', newContent: 'string', newCategories_id: ['string'] }, null, 2)}
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">DELETE</span>
                    <code className="bg-gray-100 px-2 py-1 rounded">/api/articles/{'[articleId]'}</code>
                  </div>
                  <p className="mt-1">Delete an article</p>
                  <div className="mt-2">
                    <h4 className="font-semibold">Headers:</h4>
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify({ 'Authorization': 'Bearer {token}' }, null, 2)}
                    </pre>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}