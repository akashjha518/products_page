import useFetch from './useFetch'

function App() {
  const { data, loading, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products',
  )

  const products = Array.isArray(data) ? data : []

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900">
          Products
        </h1>

        {loading ? (
          <div className="flex flex-1 items-center justify-center">
            <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 shadow-sm">
              Loading products...
            </div>
          </div>
        ) : error ? (
          <div className="flex flex-1 items-center justify-center">
            <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm text-red-700 shadow-sm">
              Error: {error}
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="h-48 w-full bg-slate-200 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-emerald-700">
                    ${item.price}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.category?.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
